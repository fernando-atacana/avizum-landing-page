'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  onJoinWaitlist: () => void
}

const NODES = [
  { left: '20%', top: '22%', size: 13, color: '#3D7DFF', delay: '0s' },
  { left: '80%', top: '18%', size: 11, color: '#39C8F5', delay: '0.4s' },
  { left: '84%', top: '58%', size: 15, color: '#6FB6FF', delay: '0.8s' },
  { left: '22%', top: '62%', size: 10, color: '#39C8F5', delay: '1.1s' },
  { left: '44%', top: '82%', size: 9, color: '#3D7DFF', delay: '0.2s' },
  { left: '72%', top: '80%', size: 8, color: '#6FB6FF', delay: '1.4s' },
  { left: '44%', top: '14%', size: 8, color: '#39C8F5', delay: '0.6s' },
]

const FLOATING_CARDS = [
  {
    tag: 'Phase III readout',
    tagColor: '#39C8F5',
    title: 'Competitor hits primary endpoint',
    position: 'left-[-7%] top-[8%]',
    delay: 0,
  },
  {
    tag: 'New filing',
    tagColor: '#6FB6FF',
    title: 'FDA submission detected',
    position: 'right-[-6%] top-[36%]',
    delay: 3,
  },
  {
    tag: 'Label update',
    tagColor: '#3D7DFF',
    title: 'Indication expanded',
    position: 'left-[6%] bottom-[-7%]',
    delay: 6,
  },
]

// One notification is visible roughly every 3s, looping like a live feed.
const CARD_VISIBLE = 4.5
const CARD_GAP = 4.5

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 540px at 78% 28%, rgba(61,125,255,.22), transparent 60%), radial-gradient(680px 480px at 2% 100%, rgba(57,200,245,.10), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-sky">
            Pharma competitive intelligence
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-[-0.015em] text-avz-ink sm:text-6xl lg:text-[64px]">
            Unprecedented{' '}
            <span className="bg-gradient-to-r from-avz-blue to-avz-cyan bg-clip-text text-transparent">
              competitive intelligence
            </span>{' '}
            for pharma
          </h1>
          <p className="mt-6 max-w-[450px] text-lg leading-relaxed text-avz-muted">
            Avizum surfaces the latest medical and market signals the moment they
            break — distilled into decision-ready insight, so your team stays
            ahead, not behind.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="rounded-[10px] bg-gradient-to-r from-avz-blue to-avz-cyan px-7 py-4 text-base font-bold text-white shadow-xl shadow-avz-blue/30 transition-transform hover:scale-[1.03]"
            >
              Join Wait List
            </button>
            <a
              href="#how"
              className="rounded-[10px] border border-avz-line px-6 py-4 text-base font-semibold text-avz-ink transition-colors hover:border-avz-sky/60"
            >
              See how it works
            </a>
          </div>
          <div className="mt-5 text-sm font-medium text-avz-faint">
            Be first in line — no spam, just launch news.
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden h-[500px] rounded-[18px] border border-avz-line bg-gradient-to-b from-avz-surface/55 to-avz-bg/15 lg:block"
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <g
              stroke="#3D7DFF"
              strokeWidth="0.3"
              fill="none"
              opacity="0.4"
              strokeDasharray="2 2"
              className="animate-avz-dash"
            >
              <line x1="50" y1="48" x2="20" y2="22" />
              <line x1="50" y1="48" x2="80" y2="18" />
              <line x1="50" y1="48" x2="84" y2="58" />
              <line x1="50" y1="48" x2="22" y2="62" />
              <line x1="50" y1="48" x2="44" y2="82" />
              <line x1="50" y1="48" x2="72" y2="80" />
              <line x1="20" y1="22" x2="44" y2="14" />
              <line x1="80" y1="18" x2="84" y2="58" />
            </g>
          </svg>

          {/* Core node */}
          <div className="absolute left-1/2 top-[48%] flex h-[66px] w-[66px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-avz-sky/50">
            <div
              className="h-9 w-9 rounded-full bg-gradient-to-r from-avz-blue to-avz-cyan"
              style={{ boxShadow: '0 0 30px 5px rgba(57,200,245,.55)' }}
            />
          </div>

          {/* Pulsing nodes — outer span centers the dot on the line endpoint,
              inner span owns the pulse animation so transforms don't clash */}
          {NODES.map((node, i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.left, top: node.top }}
            >
              <span
                className="block rounded-full animate-avz-pulse"
                style={{
                  width: node.size,
                  height: node.size,
                  background: node.color,
                  boxShadow: `0 0 16px 2px ${node.color}b3`,
                  animationDelay: node.delay,
                }}
              />
            </span>
          ))}

          {/* Floating insight cards — pop in then slowly fade out, like a feed */}
          {FLOATING_CARDS.map((card) => (
            <motion.div
              key={card.tag}
              className={`absolute z-[2] rounded-xl border border-avz-line bg-avz-surface/90 px-4 py-3 backdrop-blur-sm ${card.position}`}
              style={{ boxShadow: '0 14px 32px -14px rgba(0,0,0,.65)' }}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.04, 1, 0.96],
                y: [10, 0, 0, -6],
              }}
              transition={{
                duration: CARD_VISIBLE,
                times: [0, 0.12, 0.7, 1],
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: CARD_GAP,
                delay: card.delay,
              }}
            >
              <div
                className="font-display text-[11px] font-bold uppercase tracking-[0.1em]"
                style={{ color: card.tagColor }}
              >
                {card.tag}
              </div>
              <div className="mt-1.5 text-sm font-semibold leading-snug text-avz-ink">
                {card.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
