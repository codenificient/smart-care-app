'use client'

import { sidebarItems } from '@/lib/routes'
import { motion } from 'framer-motion'
import {
	AppWindowIcon,
	CloudIcon,
	FolderIcon,
	HandIcon,
	MonitorIcon,
	MoreHorizontal,
	SearchIcon,
	UserIcon,
	ZapIcon
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const iconMap: Record<string,React.ReactNode>={
	MonitorIcon: <MonitorIcon size={24} />,
	UserIcon: <UserIcon size={24} />,
	HandIcon: <HandIcon size={24} />,
	ZapIcon: <ZapIcon size={24} />,
	AppWindowIcon: <AppWindowIcon size={24} />,
	FolderIcon: <FolderIcon size={24} />,
	SearchIcon: <SearchIcon size={24} />,
	CloudIcon: <CloudIcon size={24} />,
	MoreHorizontalIcon: <MoreHorizontal size={24} />,
}

const Sidebar=() => {
	const pathname=usePathname()

	return (
		<motion.div
			className="fixed left-0 top-0 h-full w-20 bg-dark-purple-900/50 backdrop-blur-md flex flex-col items-center py-6 gap-6 border-r border-white/10"
			initial={{ x: -80 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center mb-4">
				<MonitorIcon size={24} className="text-primary-300" />
			</div>

			<div className="flex flex-col items-center gap-6 mt-4">
				{sidebarItems.map( ( item ) => {
					const isActive=pathname===item.path
					const hasNotification=item.id==='dashboard'
					return (
						<Link href={item.path} key={item.id}>
							<div
								className={`sidebar-icon relative ${isActive? 'active':''}`}
								title={item.name}
							>
								{iconMap[ item.icon ]}
								{hasNotification&&(
									<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white/20"></div>
								)}
								{isActive&&(
									<motion.div
										className="absolute left-0 w-1 h-full bg-primary-400 rounded-r-full"
										layoutId="sidebar-indicator"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.2 }}
									/>
								)}
							</div>
						</Link>
					)
				} )}
			</div>
		</motion.div>
	)
}

export default Sidebar
