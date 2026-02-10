'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo – white-background version so it stands out on nav */}
          <Link
            href="/"
            className="flex items-center rounded-lg bg-white px-4 py-2.5 mt-2 shadow-sm transition-shadow hover:shadow-md"
          >
            <Image
              src="/avizum-logo-white-bg.png"
              alt="AVIZUM Logo"
              width={210}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
