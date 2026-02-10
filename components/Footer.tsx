'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            About us
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Contact us
          </Link>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Avizum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
