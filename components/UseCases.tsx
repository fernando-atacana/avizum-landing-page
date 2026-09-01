'use client'

import { motion } from 'framer-motion'

const USE_CASES = [
  {
    gradient: 'from-avz-blue to-avz-cyan',
    title: 'Competitive Intelligence',
    body: "Track every competitor's pipeline, trials and strategic moves in one always-current view.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    gradient: 'from-avz-cyan to-avz-sky',
    title: 'Medical Affairs',
    body: 'Surface the latest publications, readouts and KOL activity the day they land — never miss the evidence.',
    icon: (
      <>
        <path d="M20.8 12.3a5 5 0 0 0-9-3.5 5 5 0 0 0-9 3.5c0 4.4 9 8.7 9 8.7s9-4.3 9-8.7z" />
        <path d="M3.5 12.5h4l1.5-3 2.5 6 1.5-3h4" />
      </>
    ),
  },
  {
    gradient: 'from-avz-royal to-avz-blue',
    title: 'Commercial & Brand',
    body: 'Anticipate launches, label changes and market shifts to keep your brand strategy a step ahead.',
    icon: (
      <>
        <path d="M3 20h18" />
        <path d="M6 20v-6" />
        <path d="M11 20V9" />
        <path d="M16 20v-4" />
        <path d="M21 20V5" />
        <path d="M5 11l5-5 3 3 6-6" />
      </>
    ),
  },
  {
    gradient: 'from-avz-sky to-avz-blue',
    title: 'R&D & Pipeline scouting',
    body: 'Spot emerging science, modalities and partnering opportunities before they hit the mainstream.',
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.7-4.7" />
      </>
    ),
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-avz-deep px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-royal">
            Who it&apos;s for
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] text-avz-ink sm:text-[42px]">
            Built for every team that can&apos;t afford to be second
          </h2>
        </div>

        <div className="mx-auto grid max-w-[980px] gap-6 md:grid-cols-2">
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="flex gap-5 rounded-2xl border border-avz-line bg-avz-surface p-8"
            >
              <div
                className={`flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full bg-gradient-to-r text-white ${useCase.gradient}`}
                style={{ boxShadow: '0 0 24px -4px rgba(57,200,245,.6)' }}
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
                  {useCase.icon}
                </svg>
              </div>
              <div>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-avz-ink">
                  {useCase.title}
                </h3>
                <p className="leading-relaxed text-avz-muted">{useCase.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
