'use client'

import { motion } from 'framer-motion'

interface StopButtonProps {
	onClick?: () => void
}

const StopButton=( { onClick }: StopButtonProps ) => {
	return (
		<motion.button
			className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-glow hover:from-pink-600 hover:to-pink-700 transition-all duration-200 animate-pulse-slow"
			onClick={onClick}
			whileTap={{ scale: 0.95 }}
			initial={{ scale: 0,opacity: 0 }}
			animate={{ scale: 1,opacity: 1 }}
			transition={{ type: 'spring',stiffness: 500,damping: 30 }}
		>
			<span className="text-lg font-semibold">Stop</span>
		</motion.button>
	)
}

export default StopButton
