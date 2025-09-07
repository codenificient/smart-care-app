'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function CleanupPage () {
	return (
		<div className="p-6">
			<header className="mb-8">
				<motion.h1
					className="text-3xl font-bold"
					initial={{ opacity: 0,y: -20 }}
					animate={{ opacity: 1,y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Cleanup
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card title="System Junk" className="md:col-span-1">
					<div className="flex items-center mb-4">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-70 flex items-center justify-center mr-4">
							<span className="text-2xl">🗑️</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold">153 GB</h3>
							<p className="text-white/70">System cache and temporary files</p>
						</div>
					</div>
					<motion.button
						className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
						whileTap={{ scale: 0.98 }}
					>
						Clean Now
					</motion.button>
				</Card>

				<Card title="Application Cache" className="md:col-span-1">
					<div className="flex items-center mb-4">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-70 flex items-center justify-center mr-4">
							<span className="text-2xl">📱</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold">47 GB</h3>
							<p className="text-white/70">Application cache files</p>
						</div>
					</div>
					<motion.button
						className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
						whileTap={{ scale: 0.98 }}
					>
						Clean Now
					</motion.button>
				</Card>

				<Card title="Downloads" className="md:col-span-1">
					<div className="flex items-center mb-4">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-70 flex items-center justify-center mr-4">
							<span className="text-2xl">⬇️</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold">28 GB</h3>
							<p className="text-white/70">Old downloaded files</p>
						</div>
					</div>
					<motion.button
						className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
						whileTap={{ scale: 0.98 }}
					>
						Review Files
					</motion.button>
				</Card>

				<Card title="Trash" className="md:col-span-1">
					<div className="flex items-center mb-4">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-70 flex items-center justify-center mr-4">
							<span className="text-2xl">🗑️</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold">12 GB</h3>
							<p className="text-white/70">Files in trash bin</p>
						</div>
					</div>
					<motion.button
						className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
						whileTap={{ scale: 0.98 }}
					>
						Empty Trash
					</motion.button>
				</Card>
			</div>

			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
				<StopButton />
			</div>
		</div>
	)
}
