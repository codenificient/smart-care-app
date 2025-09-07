'use client'

import { CardProps } from '@/types'
import { motion } from 'framer-motion'

const Card=( { title,children,className='' }: CardProps ) => {
	return (
		<motion.div
			className={`glass-card p-6 ${className}`}
			initial={{ opacity: 0,y: 20 }}
			animate={{ opacity: 1,y: 0 }}
			transition={{ duration: 0.3 }}
			whileHover={{ scale: 1.02,transition: { duration: 0.2 } }}
		>
			{title&&(
				<h2 className="text-xl font-semibold mb-4">{title}</h2>
			)}
			{children}
		</motion.div>
	)
}

export default Card
