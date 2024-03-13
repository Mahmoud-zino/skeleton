// import type { PresetTheme } from './index.js';

const rose = {
	name: 'rose',
	properties: {
		'--space-scale-factor': '1.05',
		'--type-scale-factor': '1.125',
		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
		'--base-font-color': 'var(--color-surface-950)',
		'--base-font-color-dark': 'var(--color-surface-50)',
		'--base-font-family': 'system-ui, sans-serif',
		'--base-font-size': 'inherit',
		'--base-line-height': 'inherit',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': 'var(--color-secondary-900)',
		'--heading-font-color-dark': 'var(--color-secondary-100)',
		'--heading-font-family': 'Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif',
		'--heading-font-weight': 'normal',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': '0.025em',
		'--anchor-font-color': 'var(--color-primary-700)',
		'--anchor-font-color-dark': 'var(--color-primary-300)',
		'--anchor-font-family': 'inherit',
		'--anchor-font-size': 'inherit',
		'--anchor-line-height': 'inherit',
		'--anchor-font-weight': 'normal',
		'--anchor-font-style': 'normal',
		'--anchor-letter-spacing': 'inherit',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'none',
		'--anchor-text-decoration-focus': 'none',
		'--body-background-color': 'var(--color-surface-50)',
		'--body-background-color-dark': 'var(--color-surface-950)',
		'--radii-default': '9999px',
		'--radii-container': '24px',
		'--border-width-default': '2px',
		'--ring-width-default': '2px',
		'--outline-width-default': '2px',
		'--divide-width-default': '2px',
		'--color-primary-50': '255 249 255',
		'--color-primary-100': '247 224 238',
		'--color-primary-200': '239 199 222',
		'--color-primary-300': '232 173 205',
		'--color-primary-400': '224 148 189',
		'--color-primary-500': '216 123 172',
		'--color-primary-600': '189 109 152',
		'--color-primary-700': '162 95 132',
		'--color-primary-800': '134 80 111',
		'--color-primary-900': '107 66 91',
		'--color-primary-950': '80 52 71',
		'--color-primary-contrast-dark': 'var(--color-primary-950)',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
		'--color-secondary-50': '214 199 255',
		'--color-secondary-100': '182 172 246',
		'--color-secondary-200': '151 144 237',
		'--color-secondary-300': '119 117 229',
		'--color-secondary-400': '88 89 220',
		'--color-secondary-500': '56 62 211',
		'--color-secondary-600': '55 60 189',
		'--color-secondary-700': '54 58 167',
		'--color-secondary-800': '54 57 145',
		'--color-secondary-900': '53 55 123',
		'--color-secondary-950': '52 53 101',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': '255 255 255',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
		'--color-tertiary-50': '222 223 247',
		'--color-tertiary-100': '215 214 244',
		'--color-tertiary-200': '207 204 241',
		'--color-tertiary-300': '200 195 238',
		'--color-tertiary-400': '192 185 235',
		'--color-tertiary-500': '185 176 232',
		'--color-tertiary-600': '159 151 201',
		'--color-tertiary-700': '132 127 169',
		'--color-tertiary-800': '106 102 138',
		'--color-tertiary-900': '79 78 106',
		'--color-tertiary-950': '53 53 75',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': '255 255 255',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '220 244 243',
		'--color-success-100': '203 232 231',
		'--color-success-200': '186 220 220',
		'--color-success-300': '170 208 208',
		'--color-success-400': '153 196 197',
		'--color-success-500': '136 184 185',
		'--color-success-600': '121 161 167',
		'--color-success-700': '105 138 149',
		'--color-success-800': '90 115 130',
		'--color-success-900': '74 92 112',
		'--color-success-950': '59 69 94',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': '255 255 255',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-light)',
		'--color-success-contrast-700': 'var(--color-success-contrast-light)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',
		'--color-warning-50': '249 238 210',
		'--color-warning-100': '250 231 182',
		'--color-warning-200': '251 224 153',
		'--color-warning-300': '252 216 125',
		'--color-warning-400': '253 209 96',
		'--color-warning-500': '254 202 68',
		'--color-warning-600': '219 174 64',
		'--color-warning-700': '184 146 60',
		'--color-warning-800': '150 119 56',
		'--color-warning-900': '115 91 52',
		'--color-warning-950': '80 63 48',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': '255 255 255',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
		'--color-error-50': '242 186 222',
		'--color-error-100': '238 171 199',
		'--color-error-200': '234 155 177',
		'--color-error-300': '231 140 154',
		'--color-error-400': '227 124 132',
		'--color-error-500': '223 109 109',
		'--color-error-600': '198 94 109',
		'--color-error-700': '172 80 108',
		'--color-error-800': '147 65 108',
		'--color-error-900': '121 51 107',
		'--color-error-950': '96 36 107',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': '255 255 255',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-light)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',
		'--color-surface-50': '246 243 247',
		'--color-surface-100': '225 217 226',
		'--color-surface-200': '204 191 205',
		'--color-surface-300': '184 165 184',
		'--color-surface-400': '163 139 163',
		'--color-surface-500': '142 113 142',
		'--color-surface-600': '121 97 122',
		'--color-surface-700': '100 81 102',
		'--color-surface-800': '79 66 81',
		'--color-surface-900': '58 50 61',
		'--color-surface-950': '37 34 41',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	},
	properties_dark: {}, // TODO: REMOVE
	enhancements: {} // TODO: REMOVE
}; // satisfies PresetTheme;

export default rose;
