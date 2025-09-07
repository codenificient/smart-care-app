import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach,expect } from 'vitest'

// Extend Vitest's expect method with testing-library methods
expect.extend( {} )

// Cleanup after each test
afterEach( () => {
	cleanup()
} )
