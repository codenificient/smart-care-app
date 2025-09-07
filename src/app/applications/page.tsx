'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function ApplicationsPage () {
	const applications=[
		{ name: 'Chrome',size: '1.2 GB',lastUsed: '2 hours ago',icon: '🌐' },
		{ name: 'Photoshop',size: '2.8 GB',lastUsed: 'Yesterday',icon: '🖌️' },
		{ name: 'Spotify',size: '0.5 GB',lastUsed: '3 days ago',icon: '🎵' },
		{ name: 'Visual Studio Code',size: '0.9 GB',lastUsed: 'Just now',icon: '💻' },
		{ name: 'Slack',size: '0.7 GB',lastUsed: '1 hour ago',icon: '💬' },
		{ name: 'Zoom',size: '0.6 GB',lastUsed: '1 week ago',icon: '🎥' },
	]

	return (
		<div className="p-6">
			<header className="mb-8">
				<motion.h1
					className="text-3xl font-bold"
					initial={{ opacity: 0,y: -20 }}
					animate={{ opacity: 1,y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Applications
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 gap-6">
				<Card title="Installed Applications" className="md:col-span-1">
					<div className="flex justify-between items-center mb-4">
						<p className="text-white/70">6 applications, 6.7 GB total</p>
						<div className="flex gap-2">
							<button className="px-3 py-1 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors">
								Sort
							</button>
							<button className="px-3 py-1 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors">
								Filter
							</button>
						</div>
					</div>

					<div className="space-y-4">
						{applications.map( ( app,index ) => (
							<motion.div
								key={app.name}
								className="bg-white/5 p-4 rounded-lg flex items-center justify-between"
								initial={{ opacity: 0,y: 10 }}
								animate={{ opacity: 1,y: 0 }}
								transition={{ duration: 0.3,delay: index*0.1 }}
							>
								<div className="flex items-center">
									<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4">
										<span className="text-xl">{app.icon}</span>
									</div>
									<div>
										<h3 className="font-semibold">{app.name}</h3>
										<p className="text-white/70 text-sm">{app.size} • Last used: {app.lastUsed}</p>
									</div>
								</div>
								<div className="flex gap-2">
									<button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
										🔄
									</button>
									<button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
										✖️
									</button>
								</div>
							</motion.div>
						) )}
					</div>
				</Card>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card title="Updates Available" className="md:col-span-1">
						<div className="flex items-center">
							<div className="w-12 h-12 rounded-full bg-amber-500/30 flex items-center justify-center mr-4">
								<span className="text-xl">3</span>
							</div>
							<div>
								<p className="text-white/70">Chrome, Spotify, Slack</p>
							</div>
						</div>
						<motion.button
							className="w-full py-2 mt-4 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
							whileTap={{ scale: 0.98 }}
						>
							Update All
						</motion.button>
					</Card>

					<Card title="Unused Applications" className="md:col-span-1">
						<div className="flex items-center">
							<div className="w-12 h-12 rounded-full bg-red-500/30 flex items-center justify-center mr-4">
								<span className="text-xl">2</span>
							</div>
							<div>
								<p className="text-white/70">Not used in over 30 days</p>
							</div>
						</div>
						<motion.button
							className="w-full py-2 mt-4 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
							whileTap={{ scale: 0.98 }}
						>
							Review & Remove
						</motion.button>
					</Card>
				</div>
			</div>

			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
				<StopButton />
			</div>
		</div>
	)
}
