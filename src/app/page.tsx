'use client'

import React, { type JSX } from 'react'
import { useRouter } from 'next/navigation'
import NavBar from '@/components/NavBar'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import Head from 'next/head' // Needed for <link preload>

const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1636587224433-3cd253788c40?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Home(): JSX.Element {
  const router = useRouter()

  const handleGoToAirdrop = (): void => {
    router.push('/airdrop')
  }

  return (
    <>
      {/* Preload background image */}
      <Head>
        <link rel="preload" as="image" href={BACKGROUND_IMAGE_URL} />
      </Head>

      <div className="flex flex-col h-screen">
        {/* Navigation bar with solid background */}
        <NavBar />

        {/* Main content with animated background and overlay */}
        <main className="relative flex-1 overflow-hidden">
          {/* Animated zoom-in background image */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: 'easeOut' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={BACKGROUND_IMAGE_URL}
              alt="Background"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          {/* Foreground content: text and button */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 space-y-6 text-white">
            <h1 className="font-semibold text-2xl sm:text-[5rem] text-center">
              TuTu + Linea XP : $TuTu
            </h1>

            <p className="text-lg text-center max-w-xl text-gray-200">
              Claim your TuTu Tokens based on your Linea XP. TuTu is a community airdrop project on the Linea network.
            </p>

            <Button onClick={handleGoToAirdrop}>
              Go to Airdrop Page
            </Button>
          </div>
        </main>
      </div>
    </>
  )
}

