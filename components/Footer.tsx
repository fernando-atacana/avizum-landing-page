'use client'

import Link from 'next/link'
import Image from 'next/image'

const LINKS = [
  { href: '/#about', label: 'About us' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact us' },
]

export default function Footer() {
  return (
    <footer className="border-t border-avz-line/30 bg-avz-deep px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center rounded-lg bg-white px-3 py-2 shadow-sm"
          >
            <Image
              src="/avizum-logo-white-bg.png"
              alt="AVIZUM"
              width={160}
              height={54}
              className="h-9 w-auto"
            />
          </Link>
          <div className="flex flex-wrap gap-9">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-avz-muted transition-colors hover:text-avz-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-avz-line/50 pt-6 text-center text-[13px] text-avz-faint">
          © {new Date().getFullYear()} Avizum. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
