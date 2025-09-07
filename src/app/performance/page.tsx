'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function PerformancePage () {
	return (
		<div className="p-6">
			<header className="mb-8">
				<motion.h1
					className="text-3xl font-bold"
					initial={{ opacity: 0,y: -20 }}
					animate={{ opacity: 1,y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Performance
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card title="CPU Usage" className="md:col-span-1">
					<div className="flex flex-col items-center">
						<div className="w-32 h-32 rounded-full border-4 border-amber-400/30 flex items-center justify-center mb-4 relative">
							<div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent transform -rotate-45"></div>
							<span className="text-3xl font-bold">45%</span>
						</div>
						<p className="text-white/70">Normal usage</p>
					</div>
				</Card>

				<Card title="Memory" className="md:col-span-1">
					<div className="flex flex-col items-center">
						<div className="w-32 h-32 rounded-full border-4 border-primary-400/30 flex items-center justify-center mb-4 relative">
							<div className="absolute inset-0 rounded-full border-4 border-primary-400 border-t-transparent border-r-transparent"></div>
							<span className="text-3xl font-bold">68%</span>
						</div>
						<p className="text-white/70">12.8 GB of 16 GB used</p>
					</div>
				</Card>

				<Card title="Disk" className="md:col-span-1">
					<div className="flex flex-col items-center">
						<div className="w-32 h-32 rounded-full border-4 border-green-400/30 flex items-center justify-center mb-4 relative">
							<div className="absolute inset-0 rounded-full border-4 border-green-400 border-t-transparent border-r-transparent border-b-transparent transform rotate-45"></div>
							<span className="text-3xl font-bold">25%</span>
						</div>
						<p className="text-white/70">256 GB free of 1 TB</p>
					</div>
				</Card>

				<Card title="Performance Optimization" className="md:col-span-3">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="bg-white/5 p-4 rounded-lg">
							<h3 className="font-semibold mb-2">Startup Items</h3>
							<p className="text-white/70 mb-2">12 items at startup</p>
							<motion.button
								className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
								whileTap={{ scale: 0.98 }}
							>
								Optimize
							</motion.button>
						</div>

						<div className="bg-white/5 p-4 rounded-lg">
							<h3 className="font-semibold mb-2">Background Processes</h3>
							<p className="text-white/70 mb-2">24 processes running</p>
							<motion.button
								className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
								whileTap={{ scale: 0.98 }}
							>
								Manage
							</motion.button>
						</div>

						<div className="bg-white/5 p-4 rounded-lg">
							<h3 className="font-semibold mb-2">Power Settings</h3>
							<p className="text-white/70 mb-2">Balanced mode</p>
							<motion.button
								className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
								whileTap={{ scale: 0.98 }}
							>
								Optimize
							</motion.button>
						</div>
					</div>
				</Card>
			</div>

			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
				<StopButton />
			</div>
		</div>
	)
}
