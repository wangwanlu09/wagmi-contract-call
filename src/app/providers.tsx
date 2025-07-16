'use client'

import React, { type JSX, type ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import { 
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  type Theme
} from '@rainbow-me/rainbowkit'
import { WagmiProvider, type Config } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  mainnet,
  sepolia,
  polygon,
  arbitrum,
  optimism,
  bsc,
  linea,
} from 'wagmi/chains'
import { useTheme } from 'next-themes'

// Configure wagmi with default RainbowKit config, including app info and supported chains
const config: Config = getDefaultConfig({
  appName: 'My Web3 Dashboard',
  projectId: '3a88bcf32dcd8f209b8bd003a4811c71',
  chains: [mainnet, sepolia, polygon, arbitrum, optimism, bsc, linea],
  ssr: true,
})

// Initialize React Query client for data fetching and caching
const queryClient: QueryClient = new QueryClient()

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  const { resolvedTheme } = useTheme()

  const currentTheme: Theme =
    resolvedTheme === 'dark'
      ? darkTheme({
          accentColor: '#ffffff', // Button background in dark mode
          accentColorForeground: '#000000', // Button text in dark mode
          borderRadius: 'large',
        })
      : lightTheme({
          accentColor: '#000000', // Button background in light mode
          accentColorForeground: '#ffffff', // Button text in light mode
          borderRadius: 'large',
        })

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={currentTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
