'use client'

import { motion } from 'framer-motion'

const CONTACT_METHODS = [
  {
    label: 'Email',
    value: 'info@avizum.ai',
    href: 'mailto:info@avizum.ai',
    color: '#39C8F5',
    bg: 'rgba(57,200,245,.14)',
    border: 'rgba(57,200,245,.3)',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
    color: '#6FB6FF',
    bg: 'rgba(61,125,255,.14)',
    border: 'rgba(61,125,255,.3)',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
]

const ADDRESS = {
  color: '#8AB3EC',
  bg: 'rgba(138,179,236,.14)',
  border: 'rgba(138,179,236,.3)',
  lines: ['123 Innovation Drive', 'San Francisco, CA 94105', 'United States'],
}

function IconWrap({
  color,
  bg,
  border,
  children,
}: {
  color: string
  bg: string
  border: string
  children: React.ReactNode
}) {
  return (
    <div
      className="mb-5 flex h-11 w-11 items-center justify-center rounded-[11px]"
      style={{ background: bg, border: `1px solid ${border}`, color }}
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
        {children}
      </svg>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-avz-bg px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-avz-royal">
            Get in touch
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] text-avz-ink sm:text-[42px]">
            Questions about Avizum?
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-lg leading-relaxed text-avz-muted">
            We&apos;d love to hear from you. Reach out through any of the channels
            below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CONTACT_METHODS.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-avz-line bg-avz-surface p-8 transition-colors hover:border-avz-sky/60"
            >
              <IconWrap
                color={method.color}
                bg={method.bg}
                border={method.border}
              >
                {method.icon}
              </IconWrap>
              <h3 className="mb-2 font-display text-lg font-bold text-avz-ink">
                {method.label}
              </h3>
              <span className="text-avz-sky transition-colors group-hover:text-avz-cyan">
                {method.value}
              </span>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-avz-line bg-avz-surface p-8 md:col-span-2"
          >
            <IconWrap color={ADDRESS.color} bg={ADDRESS.bg} border={ADDRESS.border}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </IconWrap>
            <h3 className="mb-2 font-display text-lg font-bold text-avz-ink">
              Address
            </h3>
            <p className="leading-relaxed text-avz-muted">
              {ADDRESS.lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < ADDRESS.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
