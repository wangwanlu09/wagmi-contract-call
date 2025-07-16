'use client'

import { type JSX } from 'react'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'

// Dynamically import the AirdropContent component with SSR disabled
const AirdropContent = dynamic(() => import('./AirdropContent'), {
  ssr: false,
  loading: () => (
    <main className="flex-1 flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 text-center">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading Web3 components...</p>
      </div>
    </main>
  ),
})

export default function AirdropPage(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <AirdropContent />
    </div>
  )
}
