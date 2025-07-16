// src/components/airdrop/ClaimButton.tsx
'use client'
import { type JSX } from 'react'
import { useAccount, useWriteContract } from 'wagmi'
import { TUTU_CONTRACT_ADDRESS, TUTU_CONTRACT_ABI } from '@/constants/tutuAirdrop'
import { Button } from '@/components/ui/button'

interface ClaimButtonProps {
  claimableAmountRaw: bigint // Unit is in wei, unformatted raw value
}

export default function ClaimButton({ claimableAmountRaw }: ClaimButtonProps): JSX.Element {
  const { isConnected } = useAccount()
  const { writeContract, isPending, isSuccess, error } = useWriteContract()

  const handleClaim = (): void => {
    const MIN_VALUE: bigint = BigInt('100000000000000') // 0.0001 ETH

    if (claimableAmountRaw <= BigInt(0)) {
      console.error('No claimable amount')
      return
    }

    // amount = claimableAmountRaw / 10^18 (convert wei to tokens)
    const amount = claimableAmountRaw / BigInt('1000000000000000000')

    writeContract({
      address: TUTU_CONTRACT_ADDRESS,
      abi: TUTU_CONTRACT_ABI,
      functionName: 'claim',
      args: [amount],
      value: MIN_VALUE,
    })
  }

  if (isSuccess) {
    return (
      <div className="text-center text-green-600 font-medium mb-2">
        ✅ Claim successful!
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <Button
        disabled={!isConnected || isPending}
        onClick={handleClaim}
      >
        {isPending ? 'Claiming...' : 'Claim'}
      </Button>

      {error && (
        <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">
          <div className="font-medium">Transaction failed:</div>
          <div className="mt-1">
            {error.message || 'An unknown error occurred'}
          </div>
        </div>
      )}

      {!isConnected && (
        <div className="text-gray-600 text-sm text-center">
          Please connect your wallet to claim
        </div>
      )}
    </div>
  )
}
