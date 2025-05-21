import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['Roboto Mono', 'monospace'],
				morganite: ['Morganite', 'sans-serif'],
				morena: ['Morena', 'sans-serif'],
        'display-alt': ['"Alfa Slab One"', 'cursive'],
        'jura': ['Jura', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))', 
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				pink: {
					50: '#fff0fb',
					100: '#ffe1f6',
					200: '#ffc4ee',
					300: '#ff95dd',
					400: '#ff56c6',
					500: '#ff29af',
					600: '#ff0098',
					700: '#d2007b',
					800: '#b10067',
					900: '#8a0053',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '15px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
        'dynamic-object-move-1': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 0.7 },
          '25%': { transform: 'translate(20vw, -30vh) rotate(45deg)', opacity: 1 },
          '50%': { transform: 'translate(-10vw, 10vh) rotate(-30deg)', opacity: 0.8 },
          '75%': { transform: 'translate(15vw, 20vh) rotate(15deg)', opacity: 1 },
          '100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 0.7 },
        },
        'dynamic-object-move-2': {
          '0%': { transform: 'translate(80vw, 70vh) rotate(0deg)', opacity: 0.6 },
          '50%': { transform: 'translate(10vw, -20vh) rotate(180deg)', opacity: 1 },
          '100%': { transform: 'translate(80vw, 70vh) rotate(360deg)', opacity: 0.6 },
        },
        'appear-disappear': {
          '0%, 100%': { opacity: '0' },
          '10%, 60%': { opacity: '1' }, 
          '70%': { opacity: '0'}, 
        },
        'text-wave': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2px)' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
        'dynamic-object-1': 'dynamic-object-move-1 25s ease-in-out infinite, appear-disappear 28s linear infinite 3s',
        'dynamic-object-2': 'dynamic-object-move-2 30s linear infinite, appear-disappear 33s linear infinite 1.5s',
				'drift': 'drift 10s ease-in-out infinite',
				'drift-slow': 'drift 15s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'text-wave-animation': 'text-wave 2s ease-in-out infinite alternate',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
