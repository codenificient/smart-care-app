'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function StatsPage () {
	return (
		<div className="p-6">
			<header className="mb-8">
				<motion.h1
					className="text-3xl font-bold"
					initial={{ opacity: 0,y: -20 }}
					animate={{ opacity: 1,y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Statistics
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card title="System Health" className="md:col-span-1">
					<div className="flex flex-col items-center">
						<div className="w-32 h-32 rounded-full border-8 border-green-500/50 flex items-center justify-center mb-4">
							<span className="text-4xl font-bold">92%</span>
						</div>
						<p className="text-xl text-green-400 font-semibold">Excellent</p>
						<p className="text-white/70 mt-2">Last checked: Today, 2:45 PM</p>
					</div>
				</Card>

				<Card title="Protection Status" className="md:col-span-1">
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<p>Malware Protection</p>
							<span className="text-green-400">Active</span>
						</div>
						<div className="flex justify-between items-center">
							<p>Firewall</p>
							<span className="text-green-400">Active</span>
						</div>
						<div className="flex justify-between items-center">
							<p>Real-time Scanning</p>
							<span className="text-green-400">Active</span>
						</div>
						<div className="flex justify-between items-center">
							<p>Automatic Updates</p>
							<span className="text-amber-400">Paused</span>
						</div>
					</div>
				</Card>

				<Card title="Activity Summary" className="md:col-span-1">
					<div className="space-y-4">
						<div>
							<div className="flex justify-between items-center mb-1">
								<p>Files Cleaned</p>
								<span>2,458</span>
							</div>
							<div className="w-full h-2 bg-white/10 rounded-full">
								<div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
							</div>
						</div>
						<div>
							<div className="flex justify-between items-center mb-1">
								<p>Threats Blocked</p>
								<span>37</span>
							</div>
							<div className="w-full h-2 bg-white/10 rounded-full">
								<div className="h-full w-1/4 bg-primary-500 rounded-full"></div>
							</div>
						</div>
						<div>
							<div className="flex justify-between items-center mb-1">
								<p>Performance Boosts</p>
								<span>15</span>
							</div>
							<div className="w-full h-2 bg-white/10 rounded-full">
								<div className="h-full w-1/2 bg-primary-500 rounded-full"></div>
							</div>
						</div>
					</div>
				</Card>

				<Card title="Usage History" className="md:col-span-3">
					<div className="h-64 flex items-end justify-between px-4">
						{[ 35,45,60,75,50,65,80,70,60,85,90,75 ].map( ( height,index ) => (
							<motion.div
								key={index}
								className="w-8 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-md"
								style={{ height: `${height}%` }}
								initial={{ height: 0 }}
								animate={{ height: `${height}%` }}
								transition={{ duration: 1,delay: index*0.1 }}
							/>
						) )}
					</div>
					<div className="flex justify-between mt-2 px-4 text-white/70">
						<span>Jan</span>
						<span>Feb</span>
						<span>Mar</span>
						<span>Apr</span>
						<span>May</span>
						<span>Jun</span>
						<span>Jul</span>
						<span>Aug</span>
						<span>Sep</span>
						<span>Oct</span>
						<span>Nov</span>
						<span>Dec</span>
					</div>
				</Card>
			</div>

			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
				<StopButton />
			</div>
		</div>
	)
}
