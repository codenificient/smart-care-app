'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import { motion } from 'framer-motion'

export default function ClutterPage () {
	const folders=[
		{ name: 'Downloads',size: '28 GB',files: 342,icon: '📥' },
		{ name: 'Documents',size: '15 GB',files: 156,icon: '📄' },
		{ name: 'Desktop',size: '5.2 GB',files: 48,icon: '🖥️' },
		{ name: 'Pictures',size: '32 GB',files: 1205,icon: '🖼️' },
	]

	const fileTypes=[
		{ type: 'Images',count: 1548,size: '42 GB',color: 'from-blue-400 to-blue-600' },
		{ type: 'Videos',count: 124,size: '28 GB',color: 'from-purple-400 to-purple-600' },
		{ type: 'Documents',count: 356,size: '8 GB',color: 'from-amber-400 to-amber-600' },
		{ type: 'Archives',count: 52,size: '15 GB',color: 'from-green-400 to-green-600' },
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
					My Clutter
				</motion.h1>
			</header>

			<div className="grid grid-cols-1 gap-6">
				<Card title="Cluttered Folders" className="md:col-span-1">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{folders.map( ( folder,index ) => (
							<motion.div
								key={folder.name}
								className="bg-white/5 p-4 rounded-lg flex items-center"
								initial={{ opacity: 0,y: 10 }}
								animate={{ opacity: 1,y: 0 }}
								transition={{ duration: 0.3,delay: index*0.1 }}
							>
								<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4">
									<span className="text-2xl">{folder.icon}</span>
								</div>
								<div>
									<h3 className="font-semibold">{folder.name}</h3>
									<p className="text-white/70 text-sm">{folder.size} • {folder.files} files</p>
								</div>
								<button className="ml-auto p-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors">
									Clean
								</button>
							</motion.div>
						) )}
					</div>
				</Card>

				<Card title="File Types" className="md:col-span-1">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						{fileTypes.map( ( fileType,index ) => (
							<motion.div
								key={fileType.type}
								className="bg-white/5 p-4 rounded-lg flex flex-col items-center"
								initial={{ opacity: 0,y: 10 }}
								animate={{ opacity: 1,y: 0 }}
								transition={{ duration: 0.3,delay: index*0.1 }}
							>
								<div className={`w-16 h-16 rounded-full bg-gradient-to-br ${fileType.color} opacity-70 flex items-center justify-center mb-4`}>
									<span className="text-2xl">{fileType.count}</span>
								</div>
								<h3 className="font-semibold">{fileType.type}</h3>
								<p className="text-white/70 text-sm">{fileType.size}</p>
							</motion.div>
						) )}
					</div>
				</Card>

				<Card title="Duplicate Files" className="md:col-span-1">
					<div className="flex items-center mb-6">
						<div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-70 flex items-center justify-center mr-4">
							<span className="text-2xl">128</span>
						</div>
						<div>
							<h3 className="text-xl font-semibold">Duplicate Files Found</h3>
							<p className="text-white/70">5.8 GB of space can be freed</p>
						</div>
					</div>
					<motion.button
						className="w-full py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
						whileTap={{ scale: 0.98 }}
					>
						Review & Remove
					</motion.button>
				</Card>
			</div>

			<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
				<StopButton />
			</div>
		</div>
	)
}
