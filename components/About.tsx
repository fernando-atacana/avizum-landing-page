'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const DIFFERENTIATORS = [
  {
    color: '#39C8F5',
    bg: 'rgba(57,200,245,.14)',
    border: 'rgba(57,200,245,.3)',
    title: 'Rooted in experience',
    body: 'Designed by industry executives from our founder company, Atacana — executed by a home-grown team of intelligence engineers.',
  },
  {
    color: '#6FB6FF',
    bg: 'rgba(61,125,255,.14)',
    border: 'rgba(61,125,255,.3)',
    title: 'Market pioneer',
    body: 'The first AICI platform to deliver real-time, personalized AI-generated summaries: one news event, different viewpoints.',
  },
  {
    color: '#8AB3EC',
    bg: 'rgba(138,179,236,.14)',
    border: 'rgba(138,179,236,.3)',
    title: 'Trialed & validated',
    body: 'Refined through 2+ years of renewed partnerships with our pioneer clients — each feature built to address a real need.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-avz-deep px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-royal">
            About us
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] text-avz-ink sm:text-[42px]">
            At the intersection of human purpose and AI
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-avz-muted">
            Founded by leading competitive intelligence group{' '}
            <span className="font-semibold text-avz-ink">Atacana</span>, Avizum is
            on a mission to democratize access to the power of knowing — moving
            teams from &ldquo;what happened&rdquo; to &ldquo;what&apos;s
            next.&rdquo;
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-avz-line bg-avz-surface p-8"
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-[11px] font-display text-lg font-bold"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  color: item.color,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-2.5 font-display text-xl font-bold leading-snug text-avz-ink">
                {item.title}
              </h3>
              <p className="leading-relaxed text-avz-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-[10px] border border-avz-line px-6 py-3.5 text-base font-semibold text-avz-ink transition-colors hover:border-avz-sky/60"
          >
            Read our full story
            <span aria-hidden="true">{'->'}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
