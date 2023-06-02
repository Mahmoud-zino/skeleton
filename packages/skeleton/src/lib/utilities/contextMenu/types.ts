/** Placement https://floating-ui.com/docs/computePosition#placement */
type Direction = 'top' | 'bottom' | 'left' | 'right';
type Placement = Direction | `${Direction}-start` | `${Direction}-end`;

// Options & Middleware
export interface Middleware {
	// Required ---
	/** Offset middleware settings: https://floating-ui.com/docs/offset */
	offset?: number | Record<string, unknown>;
	/** Shift middleware settings: https://floating-ui.com/docs/shift */
	shift?: Record<string, unknown>;
	/** Flip middleware settings: https://floating-ui.com/docs/flip */
	flip?: Record<string, unknown>;
	// Optional ---
	/** Size middleware settings: https://floating-ui.com/docs/size */
	size?: Record<string, unknown>;
	/** Auto Placement middleware settings: https://floating-ui.com/docs/autoPlacement */
	autoPlacement?: Record<string, unknown>;
	/** Hide middleware settings: https://floating-ui.com/docs/hide */
	hide?: Record<string, unknown>;
	/** Inline middleware settings: https://floating-ui.com/docs/inline */
	inline?: Record<string, unknown>;
}

export interface ContextMenuSettings {
	/** Match the popup data value `data-popup="targetNameHere"` */
	target: string;
	/** Set the placement position. Defaults 'bottom'. */
	placement?: Placement;
	/** Query elements that close the contextMenu when clicked. Defaults `'a[href], button'`. */
	closeQuery?: string;
	/** Optional callback function that reports state change. */
	state?: (event: { state: boolean }) => void;
	/** Provide Floating UI middleware settings. */
	middleware?: Middleware;
}
