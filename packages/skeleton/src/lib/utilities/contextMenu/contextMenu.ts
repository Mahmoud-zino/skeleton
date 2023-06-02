import type { ContextMenuSettings } from './types.js';
import { get } from 'svelte/store';
import { storePopup } from '../Popup/popup.js';

export function contextMenu(triggerNode: HTMLElement, args: ContextMenuSettings) {
	const documentationLink = 'https://www.skeleton.dev/utilities/contextMenu';
	// Floating UI Modules
	const { computePosition, autoUpdate, offset, shift, flip, size, autoPlacement, hide, inline } = get(storePopup);
	const focusableAllowedList = ':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';
	// Elements
	let contextMenuElement: HTMLElement;
	let focusableContextMenuElements: HTMLElement[];
	// Mouse Position
	let mousePos = { x: 0, y: 0 };
	// Local State
	const contextMenuState = {
		open: false,
		autoUpdateCleanup: () => {}
	};

	function init() {
		triggerNode.addEventListener('contextmenu', onOpen, true);
		window.addEventListener('click', onWindowClick, true);
		window.addEventListener('keydown', onWindowKeyDown, true);
		contextMenuElement = document.querySelector(`[data-context-menu="${args.target}"]`) || document.createElement('div');
	}
	init();

	// Render Context menu
	function render() {
		// Error handling for required Floating UI modules
		if (!contextMenuElement) throw new Error(`The data-context-menu="${args.target}" element was not found. ${documentationLink}`);
		if (!computePosition)
			throw new Error(`Floating UI 'computePosition' not found for data-context-menu="${args.target}". ${documentationLink}`);
		if (!offset) throw new Error(`Floating UI 'offset' not found for data-context-menu="${args.target}". ${documentationLink}`);
		if (!shift) throw new Error(`Floating UI 'shift' not found for data-context-menu="${args.target}". ${documentationLink}`);
		if (!flip) throw new Error(`Floating UI 'flip' not found for data-context-menu="${args.target}". ${documentationLink}`);

		// Bundle optional middleware
		const optionalMiddleware = [];
		// https://floating-ui.com/docs/size
		if (size) optionalMiddleware.push(size(args.middleware?.size));
		// https://floating-ui.com/docs/autoPlacement
		if (autoPlacement) optionalMiddleware.push(autoPlacement(args.middleware?.autoPlacement));
		// https://floating-ui.com/docs/hide
		if (hide) optionalMiddleware.push(hide(args.middleware?.hide));
		// https://floating-ui.com/docs/inline
		if (inline) optionalMiddleware.push(inline(args.middleware?.inline));

		// temporary div on mouse position to compute context menu position.
		const tempDiv = document.createElement('div');
		Object.assign(tempDiv.style, {
			position: 'fixed',
			left: `${mousePos.x}px`,
			top: `${mousePos.y}px`
		});
		document.body.appendChild(tempDiv);

		// Floating UI Compute Position
		// https://floating-ui.com/docs/computePosition
		computePosition(tempDiv, contextMenuElement, {
			placement: args.placement ?? 'bottom-start',
			// Middleware - NOTE: the order matters:
			// https://floating-ui.com/docs/middleware#ordering
			middleware: [
				// https://floating-ui.com/docs/offset
				offset(args.middleware?.offset ?? 8),
				// https://floating-ui.com/docs/shift
				shift(args.middleware?.shift ?? { padding: 8 }),
				// https://floating-ui.com/docs/flip
				flip(args.middleware?.flip),
				// Implement optional middleware
				...optionalMiddleware
			]
		})
			.then(({ x, y }: { x: number; y: number }) => {
				// actual position of context menu
				Object.assign(contextMenuElement.style, {
					left: `${x}px`,
					top: `${y}px`
				});
			})
			.finally(() => {
				// cleanup
				document.body.removeChild(tempDiv);
			});
	}

	// State Handlers
	function onOpen(event: MouseEvent) {
		event.preventDefault();
		if (!contextMenuElement) return;
		contextMenuState.open = true;
		mousePos = { x: event.clientX, y: event.clientY };
		// Return the current state
		if (args.state) args.state({ state: contextMenuState.open });
		// Update render settings
		render();
		// Update the DOM
		Object.assign(contextMenuElement.style, {
			display: 'block',
			opacity: 1,
			pointerEvents: 'auto'
		});
		// Trigger Floating UI autoUpdate (open only)
		// https://floating-ui.com/docs/autoUpdate
		contextMenuState.autoUpdateCleanup = autoUpdate(triggerNode, contextMenuElement, render);
		// refresh focusable elements in context menu
		focusableContextMenuElements = Array.from(contextMenuElement?.querySelectorAll(focusableAllowedList));
		// set focusable elements tabIndex back to 0 (is set to -2 in onClose)
		focusableContextMenuElements.forEach((elem) => {
			elem.tabIndex = 0;
		});
		// Focus the first focusable element within the context Menu
		if (focusableContextMenuElements[0]) focusableContextMenuElements[0].focus();
	}
	function close(callback?: () => void) {
		if (!contextMenuElement) return;
		// Set transition duration
		const cssTransitionDuration = parseFloat(window.getComputedStyle(contextMenuElement).transitionDuration.replace('s', '')) * 200;
		setTimeout(() => {
			contextMenuState.open = false;
			// Return the current state
			if (args.state) args.state({ state: contextMenuState.open });
			// Update the DOM
			Object.assign(contextMenuElement.style, {
				display: 'hidden',
				opacity: 0,
				pointerEvents: 'none'
			});
			// set focusable elements tabIndex back to -2
			focusableContextMenuElements.forEach((elem) => {
				// setting the tabIndex to -2 will do the same as -1,
				// but elements with tabIndex -2 will still be available in the focusableAllowedList (unlike -1).
				// This allows us to reset their tabIndex to 0 once the context menu is opened.
				elem.tabIndex = -2;
			});
			// Cleanup Floating UI autoUpdate (close only)
			if (contextMenuState.autoUpdateCleanup) contextMenuState.autoUpdateCleanup();
			// Trigger callback
			if (callback) callback();
		}, cssTransitionDuration);
	}

	// Event Handlers
	function onWindowClick(event: MouseEvent) {
		if (!(event.target instanceof Node)) return;
		const target = event.target;
		// Return if the context Menu is not yet open
		if (contextMenuState.open === false) return;
		// click outside the context Menu
		if (contextMenuElement && !contextMenuElement.contains(target)) {
			close();
			return;
		}
		// Handle Close Query State
		const closeQueryString: string = args.closeQuery === undefined ? 'a[href], button' : args.closeQuery;
		const closableMenuElements = contextMenuElement?.querySelectorAll(closeQueryString);
		closableMenuElements?.forEach((elem) => {
			if (elem.contains(target)) {
				close();
				return;
			}
		});
	}

	// Keyboard Interactions for A11y
	function onWindowKeyDown(event: KeyboardEvent): void {
		if (contextMenuState.open === false) return;

		// Escape
		if (event.code === 'Escape') {
			event.preventDefault();
			triggerNode.focus();
			close();
			return;
		}
		if (event.code === 'Tab') {
			// Tab (no shift) and active element is the last element
			if (!event.shiftKey && focusableContextMenuElements.at(-1) === document.activeElement) {
				close();
			}
			// Tab + shift and active element is the first element
			if (event.shiftKey && focusableContextMenuElements.at(0) === document.activeElement) {
				close();
			}
		}
	}

	// Lifecycle
	return {
		update(newArgs: ContextMenuSettings) {
			close(() => {
				args = newArgs;
				render();
				init();
			});
		},
		destroy() {
			triggerNode.removeEventListener('contextmenu', onOpen);
			window.removeEventListener('click', onWindowClick);
			window.removeEventListener('keydown', onWindowKeyDown);
		}
	};
}
