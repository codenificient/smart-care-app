'use client'

import { pageBackgrounds } from '@/lib/routes'
import { AnimatePresence,motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React,{ useEffect,useState } from 'react'

interface BackgroundWrapperProps {
	children: React.ReactNode
}

const BackgroundWrapper=( { children }: BackgroundWrapperProps ) => {
	const pathname=usePathname()
	const [ currentBackground,setCurrentBackground ]=useState<string>( 'dashboard' )

	useEffect( () => {
		// Extract the route key from the pathname (remove leading slash)
		const routeKey=pathname==='/'? 'dashboard':pathname.substring( 1 )

		// Check if we have a background for this route
		if ( pageBackgrounds[ routeKey ] ) {
			setCurrentBackground( routeKey )
		}
	},[ pathname ] )

	const backgroundData=pageBackgrounds[ currentBackground ]

	return (
		<div className="relative min-h-screen">
			{/* Background gradient */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentBackground}
					className={`fixed inset-0 ${backgroundData.gradient} z-0`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				/>
			</AnimatePresence>

			{/* Content */}
			<div className="relative z-10">
				{children}
			</div>
		</div>
	)
}

export default BackgroundWrapper
