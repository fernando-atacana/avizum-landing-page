'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WaitlistModal from '@/components/WaitlistModal'

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const openWaitlist = () => setIsWaitlistOpen(true)

  return (
    <main className="min-h-screen bg-avz-bg">
      <Navigation onJoinWaitlist={openWaitlist} />
      <Hero onJoinWaitlist={openWaitlist} />
      <TrustStrip />
      <HowItWorks />
      <UseCases />
      <Features />
      <CTA onJoinWaitlist={openWaitlist} />
      <Footer />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </main>
  )
}
