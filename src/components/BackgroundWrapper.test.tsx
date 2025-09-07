import { render } from '@testing-library/react'
import { describe,expect,it,vi } from 'vitest'
import BackgroundWrapper from './BackgroundWrapper'

// Mock the next/navigation hooks
vi.mock( 'next/navigation',() => ( {
	usePathname: () => '/',
} ) )

// Mock framer-motion to avoid animation issues in tests
vi.mock( 'framer-motion',() => ( {
	motion: {
		div: ( { children,...props }: { children: React.ReactNode;[ key: string ]: unknown } ) => <div {...props}>{children}</div>,
	},
	AnimatePresence: ( { children }: { children: React.ReactNode } ) => <>{children}</>,
} ) )

describe( 'BackgroundWrapper Component',() => {
	it( 'renders children correctly',() => {
		const { getByText }=render(
			<BackgroundWrapper>
				<div>Test Content</div>
			</BackgroundWrapper>
		)

		expect( getByText( 'Test Content' ) ).toBeInTheDocument()
	} )

	it( 'applies background based on route',() => {
		const { container }=render(
			<BackgroundWrapper>
				<div>Test Content</div>
			</BackgroundWrapper>
		)

		// Since usePathname is mocked to return '/', we should have the dashboard background
		const backgroundElement=container.querySelector( 'div' )
		expect( backgroundElement ).toHaveClass( 'bg-dark-gradient' )
	} )
} )
