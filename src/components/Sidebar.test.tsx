import { render } from '@testing-library/react'
import { describe,expect,it,vi } from 'vitest'
import Sidebar from './Sidebar'

// Mock the next/navigation hooks
vi.mock( 'next/navigation',() => ( {
	usePathname: () => '/',
	useRouter: () => ( {
		push: vi.fn(),
	} ),
} ) )

// Mock framer-motion to avoid animation issues in tests
vi.mock( 'framer-motion',() => ( {
	motion: {
		div: ( { children,...props }: { children: React.ReactNode;[ key: string ]: unknown } ) => <div {...props}>{children}</div>,
	},
} ) )

describe( 'Sidebar Component',() => {
	it( 'renders correctly',() => {
		render( <Sidebar /> )

		// Check if the sidebar container is rendered
		const sidebarElement=document.querySelector( 'div' )
		expect( sidebarElement ).toBeInTheDocument()
	} )

	it( 'contains navigation icons',() => {
		render( <Sidebar /> )

		// Check if all sidebar icons are present
		const sidebarIcons=document.querySelectorAll( '.sidebar-icon' )
		expect( sidebarIcons.length ).toBeGreaterThan( 0 )
	} )
} )
