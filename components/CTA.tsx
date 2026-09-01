'use client'

import { motion } from 'framer-motion'

interface CTAProps {
  onJoinWaitlist: () => void
}

export default function CTA({ onJoinWaitlist }: CTAProps) {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-avz-bg px-6 py-24 text-center sm:px-10 sm:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-[620px]"
      >
        <h2 className="mb-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.015em] text-avz-ink sm:text-5xl">
          Be first to know.
        </h2>
        <p className="mb-9 text-lg leading-relaxed text-avz-muted">
          Join the wait list and get early access to Avizum the day we launch.
        </p>
        <button
          type="button"
          onClick={onJoinWaitlist}
          className="rounded-[11px] bg-gradient-to-r from-avz-blue to-avz-cyan px-8 py-4 text-base font-bold text-white shadow-xl shadow-avz-blue/30 transition-transform hover:scale-[1.03]"
        >
          Join Wait List
        </button>
      </motion.div>
    </section>
  )
}
