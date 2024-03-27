import type { Snippet } from 'svelte';

// Tabs ---

export interface TabsProps {
	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Set vertical spacing between list and panels. */
	spaceY?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Tab list ---
	/** Sets the list snippet element's base styles. */
	listBase?: string;
	/** Sets the list snippet element's justification styles. */
	listJustify?: string;
	/** Sets the list snippet element's gap spacing. */
	listGap?: string;
	/** Sets the list snippet element's border styles. */
	listBorder?: string;
	/** Provide arbitrary CSS classes to the list snippet. */
	listClasses?: string;

	// Tab panel ---
	/** Provide arbitrary CSS classes to the tab panel snippet. */
	panelClasses?: string;

	// Snippets ---
	/** The tab list slot. */
	list?: Snippet;
	/** The tab panel slot. */
	panels?: Snippet;
}

// TabControl ---

export interface TabsControlProps {
	/** Provide the tab control name. */
	name: string;
	/** Provide the tab control radio group. */
	group: string;

	// A11y ---
	/** Provide a hoverable title attribute. */
	title?: string;
	/** Sets the A11y label. */
	label?: string;
	/** Sets ARIA controls value to define which panel this tab controls. */
	controls?: string;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets text size styles. */
	text?: string;
	/** Sets background styles. */
	background?: string;
	/** Sets justification styles. */
	justify?: string;
	/** Sets the active control styles. */
	active?: string;
	/** Sets the inactive control styles. */
	inactive?: string;
	/** Sets padding styles. */
	padding?: string;
	/** Sets rounded styles. */
	rounded?: string;
	/** Sets vertical gap styles. */
	gap?: string;
	/** Sets cursor styles. */
	cursor?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Tab ---
	/** Sets tab content base styles. */
	contentBase?: string;
	/** Sets the tab content background styles. */
	contentBg?: string;
	/** Sets the tab content padding styles. */
	contentPadding?: string;
	/** Sets the tab content gap styles. */
	contentGap?: string;
	/** Sets the tab content rounded styles. */
	contentRounded?: string;
	/** Provide arbitrary CSS classes for the tab content. */
	contentClasses?: string;

	// Events ---
	/** Triggers on Tab Control click. */
	onclick?: (event: MouseEvent) => void;
	/** Triggers on Tab Control key press. */
	onkeypress?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control key down. */
	onkeydown?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control key up. */
	onkeyup?: (event: KeyboardEvent) => void;
	/** Triggers on Tab Control group change. */
	onchange?: (group: string) => void;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}

// TabPanel ---

export interface TabsPanelProps {
	/** Provide a unique ID. */
	id?: string;
	/** Provide the tab panel value. */
	value: string;
	/** Provide the tab control radio group. */
	group: string;

	// A11y ---
	/** Sets the A11y labelledby. */
	labelledBy?: string;

	// Root ---
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
