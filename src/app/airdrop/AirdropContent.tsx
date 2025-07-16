'use client'

import { type JSX } from 'react'
import { useAccount, useReadContract, useChainId, useSwitchChain } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { TUTU_CONTRACT_ADDRESS, TUTU_CONTRACT_ABI } from '@/constants/tutuAirdrop'
import ClaimButton from '@/components/airdrop/ClaimButton'
import { linea } from 'wagmi/chains'
import { formatUnits } from 'viem'

export default function AirdropContent(): JSX.Element {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()

  const EXPECTED_CHAIN_ID = linea.id
  const isCorrectChain = chainId === EXPECTED_CHAIN_ID

  const { data, isLoading, error } = useReadContract({
    address: TUTU_CONTRACT_ADDRESS,
    abi: TUTU_CONTRACT_ABI,
    functionName: 'getClaimableAmount',
    args: address ? [address] : undefined,
    query: { enabled: !!address && isCorrectChain },
  })

  const claimableAmount: string = data ? formatUnits(data, 18) : '0'

  const handleSwitchChain = async () => {
    try {
      await switchChain({ chainId: EXPECTED_CHAIN_ID })
    } catch (err) {
      console.error('Failed to switch chain:', err)
    }
  }

  return (
    <main className="flex-1 flex items-center justify-center bg-background text-foreground px-4 py-12">
    <div className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-8 space-y-6">
      
      <div className="text-center">
        <ConnectButton showBalance={false} />
      </div>
  
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
         Your TuTu Airdrop
      </h1>
  
      {!isConnected ? (
  <p className="text-center text-gray-600 dark:text-gray-300">
    Connect your wallet to check claimable amount.
  </p>
) : !isCorrectChain ? (
  <div className="bg-yellow-50 dark:bg-yellow-100/10 border border-yellow-300 dark:border-yellow-500/30 rounded-xl p-4">
    <div className="text-yellow-800 dark:text-yellow-300 font-semibold mb-2">
      ⚠️ Wrong Network
    </div>
    <p className="text-sm mb-4 text-yellow-700 dark:text-yellow-400">
      TuTu Airdrop is available on Linea network. Please switch to continue.
    </p>
    <button
      onClick={handleSwitchChain}
      className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:brightness-110 transition"
    >
      Switch to Linea
    </button>
  </div>
) : isLoading ? (
  <p className="text-center text-gray-500 dark:text-gray-400">
    Loading your claimable amount...
  </p>
) : error ? (
  <div className="bg-red-100 dark:bg-red-400/10 border border-red-200 dark:border-red-500/30 rounded-xl p-4">
    <div className="font-semibold text-red-700 dark:text-red-400">❌ Error loading claimable amount</div>
    <div className="text-sm mt-1 text-red-600 dark:text-red-300">
      {error.message || 'Please check your connection and try again'}
    </div>
  </div>
) : (
  <>
    <div className="text-center space-y-2">
      <p className="text-gray-500 dark:text-gray-400 text-sm">Claimable Amount:</p>
      <p className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
        {Number(claimableAmount).toLocaleString()} TUTU
      </p>
    </div>

    {parseFloat(claimableAmount) > 0 && data ? (
      <div className="pt-4 flex justify-center">
        <ClaimButton claimableAmountRaw={data} />
      </div>
    ) : (
      <p className="text-center text-gray-500 dark:text-gray-400">
        You have no tokens to claim yet.
      </p>
    )}
  </>
      )}
    </div>
  </main>  
  )
} 