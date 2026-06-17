'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    color: '#6FB6FF',
    bg: 'rgba(61,125,255,.14)',
    border: 'rgba(61,125,255,.3)',
    title: 'Connect the sources',
    body: 'Trials, publications, regulatory filings, conferences and competitor moves — all watched continuously.',
  },
  {
    number: '02',
    color: '#39C8F5',
    bg: 'rgba(57,200,245,.14)',
    border: 'rgba(57,200,245,.3)',
    title: 'AI distills the signal',
    body: "Avizum's models cut through the volume into timely, ranked, decision-ready insight for your space.",
  },
  {
    number: '03',
    color: '#6FB6FF',
    bg: 'rgba(111,182,255,.14)',
    border: 'rgba(111,182,255,.3)',
    title: 'Stay ahead',
    body: 'Get alerted the moment something material changes — briefed and ready to act before competitors react.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-avz-bg px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-royal">
            How it works
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] text-avz-ink sm:text-[42px]">
            From noise to signal, in three steps
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-avz-line bg-avz-surface p-8"
            >
              <div
                className="mb-6 flex h-11 w-11 items-center justify-center rounded-[11px] font-display text-lg font-bold"
                style={{
                  background: step.bg,
                  border: `1px solid ${step.border}`,
                  color: step.color,
                }}
              >
                {step.number}
              </div>
              <h3 className="mb-2.5 font-display text-xl font-bold leading-snug text-avz-ink">
                {step.title}
              </h3>
              <p className="leading-relaxed text-avz-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
