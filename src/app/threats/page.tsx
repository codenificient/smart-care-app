'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function ThreatsPage () {
	return (
		<div className="p-6">
			<header className="mb-8">
				<motion.h1
					className="text-3xl font-bold"
					initial={{ opacity: 0,y: -20 }}
					animate={{ opacity: 1,y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Threat Detection
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 gap-6">
				<Card title="" className="md:col-span-1 flex flex-col items-center justify-center py-16">
					<h2 className="text-3xl mb-10">Looking for threats...</h2>

					<motion.div
						className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 opacity-80 flex items-center justify-center mb-10"
						animate={{
							scale: [ 1,1.05,1 ],
							opacity: [ 0.8,0.9,0.8 ]
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					>
						<span className="text-5xl">✋</span>
					</motion.div>

					<p className="text-white/60 mb-2">Scanning system files...</p>
					<p className="text-white/60">com.kolide-k2.launcher.plist</p>
				</Card>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card title="Last Scan" className="md:col-span-1">
						<p className="text-white/70 mb-2">Completed</p>
						<p className="text-xl">Yesterday, 8:45 PM</p>
						<p className="text-white/70 mt-4">Status</p>
						<p className="text-green-400">No threats found</p>
					</Card>

					<Card title="Protection Status" className="md:col-span-1">
						<div className="flex items-center">
							<div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center mr-4">
								<span className="text-xl">✓</span>
							</div>
							<div>
								<p className="text-xl">Active</p>
								<p className="text-white/70">Real-time protection enabled</p>
							</div>
						</div>
					</Card>

					<Card title="Quarantined Items" className="md:col-span-1">
						<div className="flex items-center">
							<div className="w-12 h-12 rounded-full bg-amber-500/30 flex items-center justify-center mr-4">
								<span className="text-xl">0</span>
							</div>
							<p className="text-white/70">No items in quarantine</p>
						</div>
					</Card>
				</div>
			</div>

			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
				<StopButton />
			</div>
		</div>
	)
}
