'use client'

import Card from '@/components/Card'
import StopButton from '@/components/StopButton'
import Link from 'next/link'

export default function Home () {
  return (
    <div className="p-8 h-screen flex flex-col">
      <div className="flex-1 flex flex-col space-y-6">
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-5 gap-6 flex-1">
          {/* Cleanup Card - Left */}
          <Link href="/cleanup" className="col-span-1">
            <Card title="Cleanup" className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-70 flex items-center justify-center">
                    <span className="text-5xl font-bold">C</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-3xl font-bold mb-2 text-white">153 GB of junk</h3>
                  <p className="text-white/70">to clean</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Looking for threats Card - Center, 3x width */}
          <Link href="/threats" className="col-span-3">
            <div className="threats-card p-6 h-full flex flex-col justify-center items-center">
              <h2 className="text-2xl mb-8">Looking for threats...</h2>
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 opacity-80 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✋</span>
                </div>
              </div>
              <p className="mt-8 text-sm text-white/60">com.kolide-k2.launcher.plist</p>
            </div>
          </Link>

          {/* Performance Card - Right */}
          <Link href="/performance" className="col-span-1">
            <Card title="Performance" className="h-full">
              <div className="flex flex-col h-full items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-80 flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Bottom Row - 2 cards, each taking half width */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {/* Applications Card - Left */}
          <Link href="/applications" className="col-span-1">
            <Card title="Applications" className="h-full">
              <div className="flex items-center justify-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-70 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">✖</span>
                </div>
              </div>
            </Card>
          </Link>

          {/* My Clutter Card - Right */}
          <Link href="/clutter" className="col-span-1">
            <Card title="My Clutter" className="h-full">
              <div className="flex items-center justify-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-70 flex items-center justify-center">
                  <span className="text-4xl">📁</span>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <StopButton />
      </div>
    </div>
  )
}