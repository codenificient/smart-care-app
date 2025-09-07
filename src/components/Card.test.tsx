import { render,screen } from '@testing-library/react'
import { describe,expect,it,vi } from 'vitest'
import Card from './Card'

// Mock framer-motion to avoid animation issues in tests
vi.mock( 'framer-motion',() => ( {
	motion: {
		div: ( { children,...props }: { children: React.ReactNode;[ key: string ]: unknown } ) => <div {...props}>{children}</div>,
	},
} ) )

describe( 'Card Component',() => {
	it( 'renders with title',() => {
		render( <Card title="Test Title">Content</Card> )

		expect( screen.getByText( 'Test Title' ) ).toBeInTheDocument()
		expect( screen.getByText( 'Content' ) ).toBeInTheDocument()
	} )

	it( 'renders without title',() => {
		render( <Card title="">Content Only</Card> )

		expect( screen.queryByRole( 'heading' ) ).not.toBeInTheDocument()
		expect( screen.getByText( 'Content Only' ) ).toBeInTheDocument()
	} )

	it( 'applies custom className',() => {
		render( <Card title="Title" className="custom-class">Content</Card> )

		const cardElement=screen.getByText( 'Content' ).parentElement
		expect( cardElement ).toHaveClass( 'custom-class' )
	} )
} )
