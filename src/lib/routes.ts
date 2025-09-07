import { PageBackground,SidebarItem } from '@/types'

export const sidebarItems: SidebarItem[]=[
	{
		id: 'dashboard',
		name: 'Dashboard',
		icon: 'MonitorIcon',
		path: '/',
	},
	{
		id: 'user',
		name: 'User',
		icon: 'UserIcon',
		path: '/user',
	},
	{
		id: 'cleanup',
		name: 'Cleanup',
		icon: 'HandIcon',
		path: '/cleanup',
	},
	{
		id: 'threats',
		name: 'Threats',
		icon: 'ZapIcon',
		path: '/threats',
	},
	{
		id: 'performance',
		name: 'Performance',
		icon: 'ZapIcon',
		path: '/performance',
	},
	{
		id: 'applications',
		name: 'Applications',
		icon: 'AppWindowIcon',
		path: '/applications',
	},
	{
		id: 'clutter',
		name: 'My Clutter',
		icon: 'FolderIcon',
		path: '/clutter',
	},
	{
		id: 'search',
		name: 'Search',
		icon: 'SearchIcon',
		path: '/search',
	},
	{
		id: 'cloud',
		name: 'Cloud',
		icon: 'CloudIcon',
		path: '/cloud',
	},
	{
		id: 'settings',
		name: 'Settings',
		icon: 'MoreHorizontalIcon',
		path: '/settings',
	},
]

export const pageBackgrounds: Record<string,PageBackground>={
	dashboard: {
		id: 'dashboard',
		path: '/backgrounds/dashboard.jpg',
		gradient: 'bg-dark-gradient',
	},
	cleanup: {
		id: 'cleanup',
		path: '/backgrounds/cleanup.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-900 to-dark-purple-800',
	},
	threats: {
		id: 'threats',
		path: '/backgrounds/threats.jpg',
		gradient: 'bg-gradient-to-br from-primary-900 to-primary-800',
	},
	performance: {
		id: 'performance',
		path: '/backgrounds/performance.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-800 to-primary-900',
	},
	applications: {
		id: 'applications',
		path: '/backgrounds/applications.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-900 to-dark-purple-700',
	},
	clutter: {
		id: 'clutter',
		path: '/backgrounds/clutter.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-800 to-primary-800',
	},
	user: {
		id: 'user',
		path: '/backgrounds/user.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-900 to-dark-purple-800',
	},
	stats: {
		id: 'stats',
		path: '/backgrounds/stats.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-800 to-dark-purple-700',
	},
	settings: {
		id: 'settings',
		path: '/backgrounds/settings.jpg',
		gradient: 'bg-gradient-to-br from-dark-purple-900 to-primary-900',
	},
}
