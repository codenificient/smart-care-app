'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function UserPage () {
	return (
		<div className="p-6">
			<header className="mb-8">
				<motion.h1
					className="text-3xl font-bold"
					initial={{ opacity: 0,y: -20 }}
					animate={{ opacity: 1,y: 0 }}
					transition={{ duration: 0.5 }}
				>
					User Profile
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card title="" className="md:col-span-1">
					<div className="flex flex-col items-center">
						<div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-4">
							<span className="text-3xl">👤</span>
						</div>
						<h2 className="text-xl font-semibold">John Doe</h2>
						<p className="text-white/70 mb-4">Premium User</p>
						<div className="w-full h-2 bg-white/10 rounded-full mb-2">
							<div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
						</div>
						<p className="text-white/70 text-sm">75% of storage used</p>
					</div>
				</Card>

				<Card title="Subscription" className="md:col-span-2">
					<div className="flex items-center mb-6">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-70 flex items-center justify-center mr-4">
							<span className="text-2xl">⭐</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold">Premium Plan</h3>
							<p className="text-white/70">Renews on November 15, 2025</p>
						</div>
					</div>

					<div className="bg-white/5 p-4 rounded-lg mb-4">
						<h3 className="font-semibold mb-2">Plan Features</h3>
						<ul className="space-y-2 text-white/80">
							<li className="flex items-center">
								<span className="mr-2">✓</span> Unlimited device cleaning
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span> Real-time threat protection
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span> Advanced performance optimization
							</li>
							<li className="flex items-center">
								<span className="mr-2">✓</span> Priority customer support
							</li>
						</ul>
					</div>

					<motion.button
						className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
						whileTap={{ scale: 0.98 }}
					>
						Manage Subscription
					</motion.button>
				</Card>

				<Card title="Settings" className="md:col-span-3">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="bg-white/5 p-4 rounded-lg">
							<h3 className="font-semibold mb-4">Notifications</h3>
							<div className="space-y-3">
								<div className="flex items-center justify-between">
									<p>Security Alerts</p>
									<div className="w-10 h-6 bg-primary-600 rounded-full relative">
										<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<p>Cleaning Reminders</p>
									<div className="w-10 h-6 bg-primary-600 rounded-full relative">
										<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<p>Performance Reports</p>
									<div className="w-10 h-6 bg-white/20 rounded-full relative">
										<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white/5 p-4 rounded-lg">
							<h3 className="font-semibold mb-4">Privacy</h3>
							<div className="space-y-3">
								<div className="flex items-center justify-between">
									<p>Usage Analytics</p>
									<div className="w-10 h-6 bg-primary-600 rounded-full relative">
										<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<p>Personalized Recommendations</p>
									<div className="w-10 h-6 bg-primary-600 rounded-full relative">
										<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<p>Cloud Backup</p>
									<div className="w-10 h-6 bg-white/20 rounded-full relative">
										<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white/5 p-4 rounded-lg">
							<h3 className="font-semibold mb-4">Appearance</h3>
							<div className="space-y-3">
								<div className="flex items-center justify-between">
									<p>Dark Mode</p>
									<div className="w-10 h-6 bg-primary-600 rounded-full relative">
										<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<p>Animations</p>
									<div className="w-10 h-6 bg-primary-600 rounded-full relative">
										<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<p>Compact View</p>
									<div className="w-10 h-6 bg-white/20 rounded-full relative">
										<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
									</div>
								</div>
							</div>
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
