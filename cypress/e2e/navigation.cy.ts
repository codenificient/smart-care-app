describe( 'Navigation Tests',() => {
	beforeEach( () => {
		cy.visit( '/' )
	} )

	it( 'should load the home page',() => {
		cy.contains( 'Smart Care' ).should( 'be.visible' )
		cy.contains( '153 GB of junk' ).should( 'be.visible' )
		cy.contains( 'Looking for threats...' ).should( 'be.visible' )
	} )

	it( 'should navigate to Cleanup page',() => {
		// Click on the Cleanup card
		cy.contains( 'Cleanup' ).click()
		cy.url().should( 'include','/cleanup' )
		cy.contains( 'System Junk' ).should( 'be.visible' )
		cy.contains( '153 GB' ).should( 'be.visible' )
	} )

	it( 'should navigate to Threats page',() => {
		// Click on the Threats card
		cy.contains( 'Looking for threats...' ).click()
		cy.url().should( 'include','/threats' )
		cy.contains( 'Threat Detection' ).should( 'be.visible' )
	} )

	it( 'should navigate to Performance page',() => {
		// Click on the Performance card
		cy.contains( 'Performance' ).click()
		cy.url().should( 'include','/performance' )
		cy.contains( 'CPU Usage' ).should( 'be.visible' )
	} )

	it( 'should navigate using sidebar',() => {
		// Since sidebar has icons only, we'll use the nth-child selector
		// The third icon should be the Cleanup icon
		cy.get( '.sidebar-icon' ).eq( 2 ).click()
		cy.url().should( 'include','/cleanup' )

		// The fourth icon should be the Threats icon
		cy.get( '.sidebar-icon' ).eq( 3 ).click()
		cy.url().should( 'include','/threats' )
	} )
} )
