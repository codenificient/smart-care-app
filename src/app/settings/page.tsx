'use client'

import Card from '@/components/Card'
import {
	Bell,
	Lock,
	Monitor,
	Palette,
	RotateCcw,
	Save,
	Settings,
	Shield,
	Wifi
} from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage () {
	const [ settings,setSettings ]=useState( {
		// Security Settings
		autoScan: true,
		realTimeProtection: true,
		quarantineThreats: true,
		autoUpdate: true,

		// Notification Settings
		emailNotifications: true,
		pushNotifications: false,
		scanCompleteAlerts: true,
		threatAlerts: true,

		// Appearance Settings
		theme: 'dark',
		accentColor: 'purple',
		compactMode: false,
		showAnimations: true,

		// Performance Settings
		backgroundScanning: true,
		cpuUsage: 'medium',
		memoryOptimization: true,
		cacheSize: 'medium',

		// Privacy Settings
		dataCollection: false,
		crashReports: true,
		analytics: false,
		telemetry: false,

		// Network Settings
		proxyEnabled: false,
		proxyHost: '',
		proxyPort: '',
		autoConnect: true,
	} )

	const handleSettingChange=( category: string,setting: string,value: boolean|string ) => {
		setSettings( prev => ( {
			...prev,
			[ setting ]: value
		} ) )
	}

	const handleSave=() => {
		// Save settings logic here
		console.log( 'Saving settings:',settings )
		// You could add a toast notification here
	}

	const handleReset=() => {
		// Reset to default settings
		setSettings( {
			autoScan: true,
			realTimeProtection: true,
			quarantineThreats: true,
			autoUpdate: true,
			emailNotifications: true,
			pushNotifications: false,
			scanCompleteAlerts: true,
			threatAlerts: true,
			theme: 'dark',
			accentColor: 'purple',
			compactMode: false,
			showAnimations: true,
			backgroundScanning: true,
			cpuUsage: 'medium',
			memoryOptimization: true,
			cacheSize: 'medium',
			dataCollection: false,
			crashReports: true,
			analytics: false,
			telemetry: false,
			proxyEnabled: false,
			proxyHost: '',
			proxyPort: '',
			autoConnect: true,
		} )
	}

	const SettingSection=( {
		title,
		icon: Icon,
		children
	}: {
		title: string
		icon: React.ComponentType<{ className?: string }>
		children: React.ReactNode
	} ) => (
		<Card title="" className="mb-6">
			<div className="flex items-center mb-6">
				<Icon className="w-6 h-6 text-primary-400 mr-3" />
				<h2 className="text-xl font-semibold text-white">{title}</h2>
			</div>
			{children}
		</Card>
	)

	const ToggleSwitch=( {
		enabled,
		onChange,
		label,
		description
	}: {
		enabled: boolean
		onChange: ( enabled: boolean ) => void
		label: string
		description?: string
	} ) => (
		<div className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
			<div className="flex-1">
				<p className="text-white font-medium">{label}</p>
				{description&&<p className="text-white/60 text-sm mt-1">{description}</p>}
			</div>
			<button
				onClick={() => onChange( !enabled )}
				className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled? 'bg-primary-500':'bg-white/20'
					}`}
			>
				<span
					className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled? 'translate-x-6':'translate-x-1'
						}`}
				/>
			</button>
		</div>
	)

	const SelectOption=( {
		value,
		onChange,
		options,
		label,
		description
	}: {
		value: string
		onChange: ( value: string ) => void
		options: { value: string; label: string }[]
		label: string
		description?: string
	} ) => (
		<div className="py-3 border-b border-white/10 last:border-b-0">
			<div className="mb-2">
				<p className="text-white font-medium">{label}</p>
				{description&&<p className="text-white/60 text-sm mt-1">{description}</p>}
			</div>
			<select
				value={value}
				onChange={( e ) => onChange( e.target.value )}
				className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
			>
				{options.map( ( option ) => (
					<option key={option.value} value={option.value} className="bg-dark-purple-900">
						{option.label}
					</option>
				) )}
			</select>
		</div>
	)

	const TextInput=( {
		value,
		onChange,
		label,
		placeholder,
		type='text'
	}: {
		value: string
		onChange: ( value: string ) => void
		label: string
		placeholder?: string
		type?: string
	} ) => (
		<div className="py-3 border-b border-white/10 last:border-b-0">
			<label className="block text-white font-medium mb-2">{label}</label>
			<input
				type={type}
				value={value}
				onChange={( e ) => onChange( e.target.value )}
				placeholder={placeholder}
				className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500"
			/>
		</div>
	)

	return (
		<div className="p-8 min-h-screen">
			<div className="max-w-4xl mx-auto">
				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center">
						<Settings className="w-8 h-8 text-primary-400 mr-3" />
						<h1 className="text-3xl font-bold text-white">Settings</h1>
					</div>
					<div className="flex space-x-3">
						<button
							onClick={handleReset}
							className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
						>
							<RotateCcw className="w-4 h-4 mr-2" />
							Reset
						</button>
						<button
							onClick={handleSave}
							className="flex items-center px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
						>
							<Save className="w-4 h-4 mr-2" />
							Save Changes
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Security Settings */}
					<SettingSection title="Security" icon={Shield}>
						<ToggleSwitch
							enabled={settings.autoScan}
							onChange={( value ) => handleSettingChange( 'security','autoScan',value )}
							label="Automatic Scanning"
							description="Scan for threats automatically on schedule"
						/>
						<ToggleSwitch
							enabled={settings.realTimeProtection}
							onChange={( value ) => handleSettingChange( 'security','realTimeProtection',value )}
							label="Real-time Protection"
							description="Monitor files and processes in real-time"
						/>
						<ToggleSwitch
							enabled={settings.quarantineThreats}
							onChange={( value ) => handleSettingChange( 'security','quarantineThreats',value )}
							label="Auto-quarantine Threats"
							description="Automatically isolate detected threats"
						/>
						<ToggleSwitch
							enabled={settings.autoUpdate}
							onChange={( value ) => handleSettingChange( 'security','autoUpdate',value )}
							label="Automatic Updates"
							description="Keep security definitions up to date"
						/>
					</SettingSection>

					{/* Notification Settings */}
					<SettingSection title="Notifications" icon={Bell}>
						<ToggleSwitch
							enabled={settings.emailNotifications}
							onChange={( value ) => handleSettingChange( 'notifications','emailNotifications',value )}
							label="Email Notifications"
							description="Receive alerts via email"
						/>
						<ToggleSwitch
							enabled={settings.pushNotifications}
							onChange={( value ) => handleSettingChange( 'notifications','pushNotifications',value )}
							label="Push Notifications"
							description="Show system notifications"
						/>
						<ToggleSwitch
							enabled={settings.scanCompleteAlerts}
							onChange={( value ) => handleSettingChange( 'notifications','scanCompleteAlerts',value )}
							label="Scan Complete Alerts"
							description="Notify when scans finish"
						/>
						<ToggleSwitch
							enabled={settings.threatAlerts}
							onChange={( value ) => handleSettingChange( 'notifications','threatAlerts',value )}
							label="Threat Alerts"
							description="Immediate alerts for threats found"
						/>
					</SettingSection>

					{/* Appearance Settings */}
					<SettingSection title="Appearance" icon={Palette}>
						<SelectOption
							value={settings.theme}
							onChange={( value ) => handleSettingChange( 'appearance','theme',value )}
							options={[
								{ value: 'dark',label: 'Dark' },
								{ value: 'light',label: 'Light' },
								{ value: 'auto',label: 'Auto' }
							]}
							label="Theme"
							description="Choose your preferred theme"
						/>
						<SelectOption
							value={settings.accentColor}
							onChange={( value ) => handleSettingChange( 'appearance','accentColor',value )}
							options={[
								{ value: 'purple',label: 'Purple' },
								{ value: 'blue',label: 'Blue' },
								{ value: 'green',label: 'Green' },
								{ value: 'red',label: 'Red' }
							]}
							label="Accent Color"
							description="Primary color for the interface"
						/>
						<ToggleSwitch
							enabled={settings.compactMode}
							onChange={( value ) => handleSettingChange( 'appearance','compactMode',value )}
							label="Compact Mode"
							description="Use smaller spacing and elements"
						/>
						<ToggleSwitch
							enabled={settings.showAnimations}
							onChange={( value ) => handleSettingChange( 'appearance','showAnimations',value )}
							label="Animations"
							description="Enable smooth transitions and effects"
						/>
					</SettingSection>

					{/* Performance Settings */}
					<SettingSection title="Performance" icon={Monitor}>
						<ToggleSwitch
							enabled={settings.backgroundScanning}
							onChange={( value ) => handleSettingChange( 'performance','backgroundScanning',value )}
							label="Background Scanning"
							description="Scan files when system is idle"
						/>
						<SelectOption
							value={settings.cpuUsage}
							onChange={( value ) => handleSettingChange( 'performance','cpuUsage',value )}
							options={[
								{ value: 'low',label: 'Low (25%)' },
								{ value: 'medium',label: 'Medium (50%)' },
								{ value: 'high',label: 'High (75%)' }
							]}
							label="CPU Usage Limit"
							description="Maximum CPU usage during scans"
						/>
						<ToggleSwitch
							enabled={settings.memoryOptimization}
							onChange={( value ) => handleSettingChange( 'performance','memoryOptimization',value )}
							label="Memory Optimization"
							description="Optimize memory usage during operations"
						/>
						<SelectOption
							value={settings.cacheSize}
							onChange={( value ) => handleSettingChange( 'performance','cacheSize',value )}
							options={[
								{ value: 'small',label: 'Small (100MB)' },
								{ value: 'medium',label: 'Medium (500MB)' },
								{ value: 'large',label: 'Large (1GB)' }
							]}
							label="Cache Size"
							description="Amount of disk space for caching"
						/>
					</SettingSection>

					{/* Privacy Settings */}
					<SettingSection title="Privacy" icon={Lock}>
						<ToggleSwitch
							enabled={settings.dataCollection}
							onChange={( value ) => handleSettingChange( 'privacy','dataCollection',value )}
							label="Data Collection"
							description="Allow collection of usage data"
						/>
						<ToggleSwitch
							enabled={settings.crashReports}
							onChange={( value ) => handleSettingChange( 'privacy','crashReports',value )}
							label="Crash Reports"
							description="Send crash reports to help improve the app"
						/>
						<ToggleSwitch
							enabled={settings.analytics}
							onChange={( value ) => handleSettingChange( 'privacy','analytics',value )}
							label="Analytics"
							description="Help improve the app with anonymous analytics"
						/>
						<ToggleSwitch
							enabled={settings.telemetry}
							onChange={( value ) => handleSettingChange( 'privacy','telemetry',value )}
							label="Telemetry"
							description="Send performance and diagnostic data"
						/>
					</SettingSection>

					{/* Network Settings */}
					<SettingSection title="Network" icon={Wifi}>
						<ToggleSwitch
							enabled={settings.proxyEnabled}
							onChange={( value ) => handleSettingChange( 'network','proxyEnabled',value )}
							label="Use Proxy"
							description="Connect through a proxy server"
						/>
						{settings.proxyEnabled&&(
							<>
								<TextInput
									value={settings.proxyHost}
									onChange={( value ) => handleSettingChange( 'network','proxyHost',value )}
									label="Proxy Host"
									placeholder="proxy.example.com"
								/>
								<TextInput
									value={settings.proxyPort}
									onChange={( value ) => handleSettingChange( 'network','proxyPort',value )}
									label="Proxy Port"
									placeholder="8080"
									type="number"
								/>
							</>
						)}
						<ToggleSwitch
							enabled={settings.autoConnect}
							onChange={( value ) => handleSettingChange( 'network','autoConnect',value )}
							label="Auto-connect"
							description="Automatically connect to network services"
						/>
					</SettingSection>
				</div>
			</div>
		</div>
	)
}
