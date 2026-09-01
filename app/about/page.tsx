'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const SECTIONS = [
  {
    heading: 'Our mission',
    body: 'To democratize access to the power of knowing. We believe that competitive intelligence should be accessible, actionable, and forward-looking — moving teams from "what happened" to "what\'s next."',
  },
  {
    heading: 'Our platform',
    body: 'The Avizum AICI Platform is a proactive, predictive AI Work Companion that unifies the entire competitive intelligence workflow into a single collaborative intelligence ecosystem. Accessible through multiple devices, it guides your daily work, interpreting new events through contextual knowledge, automating analysis, drafting scheduled or on-demand reports for your review, and returning explainable insights to your questions.',
  },
  {
    heading: 'The problem we solve',
    body: "Professionals operate in highly specialized, regulated, and fast-moving environments. Teams are under constant pressure to cover more information, analyze faster, and communicate more effectively. While AI promises productivity gains, most tools lack the domain knowledge, data foundations, and governance required to stay relevant and trustworthy. Today's solutions remain fragmented and reactive — focused on summarizing collections of past events rather than integrating data into end-to-end user workflows to enable smarter decisions about the future.",
  },
]

const DIFFERENTIATORS = [
  {
    title: 'Rooted in experience',
    body: 'Designed by industry executives from our founder company; executed by a home-grown team of intelligence engineers.',
  },
  {
    title: 'Market pioneer',
    body: 'The first AICI platform to deliver real-time, personalized AI-generated summaries: one news event, different viewpoints.',
  },
  {
    title: 'Trialed and validated',
    body: 'Tested and perfected through over 2 years of renewed partnerships with our pioneer clients. Each feature built to address a real need.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-avz-bg">
      <Navigation />

      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(800px 460px at 70% 0%, rgba(61,125,255,.18), transparent 62%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[820px]"
        >
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-sky">
            About us
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.015em] text-avz-ink sm:text-6xl">
            At the intersection of human purpose and artificial intelligence.
          </h1>
          <p className="mt-7 text-xl leading-relaxed text-avz-muted">
            Founded by leading competitive intelligence group{' '}
            <span className="font-semibold text-avz-ink">Atacana</span>, our
            mission is to democratize access to the power of knowing.
          </p>
          <p className="mt-5 leading-relaxed text-avz-muted">
            We are building an intelligence platform that gets work done today and
            sets the stage for tomorrow. The Avizum AICI platform is an AI-powered
            Work Companion for Intelligence Professionals — a single, collaborative
            platform that replaces fragmented tools and turns scattered data into
            forward-looking intelligence.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-12 sm:px-10">
        <div className="mx-auto max-w-[820px] space-y-12">
          {SECTIONS.map((section) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-3 font-display text-2xl font-bold text-avz-ink sm:text-3xl">
                {section.heading}
              </h2>
              <p className="leading-relaxed text-avz-muted">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[980px]">
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-avz-ink sm:text-3xl">
            What sets us apart
          </h2>
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
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[11px] border border-avz-sky/30 bg-avz-blue/10 font-display text-lg font-bold text-avz-sky">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2.5 font-display text-xl font-bold leading-snug text-avz-ink">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-avz-muted">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
