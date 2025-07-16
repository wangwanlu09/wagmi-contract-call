'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type JSX } from 'react'

export default function NavBar(): JSX.Element {
  const pathname = usePathname()

  // Hide the ConnectButton only on the "/airdrop" page
  const hideConnectButton = pathname === '/airdrop'

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-6">
       <h1 className="text-xl font-bold text-gray-800 dark:text-white">Web3 Dashboard</h1>
      {/* Left side navigation links */}
        {/* Home link */}
        <Link href="/" className="text-lg text-gray-800 dark:text-white hover:underline">
          Home
        </Link>
        {/* Add more navigation links here if needed */}
      </div>

      {/* Right side: Wallet Connect button (hidden on /airdrop page) */}
      {!hideConnectButton && <ConnectButton showBalance={false} />}
    </nav>
  )

}