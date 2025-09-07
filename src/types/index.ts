export type SidebarItem={
	id: string
	name: string
	icon: string
	path: string
}

export type PageBackground={
	id: string
	path: string
	gradient: string
}

export type CardProps={
	title: string
	children: React.ReactNode
	className?: string
}
