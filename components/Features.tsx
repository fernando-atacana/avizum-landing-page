'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    color: '#39C8F5',
    bg: 'rgba(57,200,245,.14)',
    border: 'rgba(57,200,245,.3)',
    title: 'Real-time monitoring',
    body: 'Always-on watch across thousands of pharma sources.',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    color: '#6FB6FF',
    bg: 'rgba(61,125,255,.14)',
    border: 'rgba(61,125,255,.3)',
    title: 'AI synthesis',
    body: 'Plain-language summaries you can act on instantly.',
    icon: (
      <>
        <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
      </>
    ),
  },
  {
    color: '#6FB6FF',
    bg: 'rgba(111,182,255,.14)',
    border: 'rgba(111,182,255,.3)',
    title: 'Pipeline & trial tracking',
    body: 'Follow every program from preclinical to launch.',
    icon: (
      <>
        <path d="M9 3v6.5L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 9.5V3" />
        <path d="M8 3h8" />
        <path d="M7.5 14h9" />
      </>
    ),
  },
  {
    color: '#8AB3EC',
    bg: 'rgba(138,179,236,.14)',
    border: 'rgba(138,179,236,.3)',
    title: 'Smart alerts & briefings',
    body: 'Only what matters, delivered when it matters.',
    icon: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-avz-bg px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-royal">
            What you get
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] text-avz-ink sm:text-[42px]">
            Intelligence, the moment it breaks
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[14px] border border-avz-line bg-avz-surface p-7"
            >
              <div
                className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-[11px]"
                style={{
                  background: feature.bg,
                  border: `1px solid ${feature.border}`,
                  color: feature.color,
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mb-2 font-display text-[17px] font-bold leading-snug text-avz-ink">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-avz-muted">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
