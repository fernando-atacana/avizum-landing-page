'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import WaitlistModal from './WaitlistModal'

interface NavigationProps {
  /**
   * Optional handler for the "Join Wait List" button. When omitted (e.g. on
   * secondary pages), Navigation manages its own waitlist modal.
   */
  onJoinWaitlist?: () => void
}

const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#use-cases', label: 'Use cases' },
  { href: '#features', label: 'Features' },
]

export default function Navigation({ onJoinWaitlist }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleJoin = onJoinWaitlist ?? (() => setIsWaitlistOpen(true))

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-avz-line/60 bg-avz-bg/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 sm:px-10 sm:py-5">
        <Link
          href="/"
          className="flex items-center rounded-lg bg-white px-3 py-2 shadow-sm transition-shadow hover:shadow-md"
        >
          <Image
            src="/avizum-logo-white-bg.png"
            alt="AVIZUM"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-6 sm:gap-9">
          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-avz-muted transition-colors hover:text-avz-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={handleJoin}
            className="rounded-[9px] bg-gradient-to-r from-avz-blue to-avz-cyan px-5 py-3 text-sm font-bold text-white shadow-lg shadow-avz-blue/25 transition-transform hover:scale-[1.03]"
          >
            Join Wait List
          </button>
        </div>
      </div>

      {!onJoinWaitlist && (
        <WaitlistModal
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      )}
    </motion.nav>
  )
}
