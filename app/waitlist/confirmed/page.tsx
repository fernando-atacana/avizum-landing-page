'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WaitlistConfirmedPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-gray-800 bg-gray-900/90 p-8 shadow-2xl shadow-black/40 sm:p-12"
          >
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10">
              <svg
                className="h-8 w-8 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Welcome to the Avizum waitlist.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Thank you for confirming your email and joining the Avizum waitlist.
              Our sales representative will reach out soon to coordinate next
              steps and schedule your demo.
            </p>
            <p className="mt-4 text-base text-gray-400">
              We&apos;re excited to connect and show you what&apos;s possible with Avizum.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-200"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-gray-500 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
