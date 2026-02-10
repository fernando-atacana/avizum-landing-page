'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'How AI is Transforming Competitive Intelligence',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way companies analyze competitive landscapes and make strategic decisions.',
    date: '2024-01-15',
    slug: 'ai-transforming-competitive-intelligence',
  },
  {
    id: 2,
    title: 'The Future of Market Research: A Data-Driven Approach',
    excerpt: 'Explore how data-driven market research is reshaping industries and enabling faster, more accurate insights.',
    date: '2024-01-10',
    slug: 'future-market-research-data-driven',
  },
  {
    id: 3,
    title: 'Competitive Intelligence Best Practices for Modern Organizations',
    excerpt: 'Learn the essential strategies and best practices for building an effective competitive intelligence program.',
    date: '2024-01-05',
    slug: 'competitive-intelligence-best-practices',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Insights, updates, and thought leadership on competitive intelligence and AI.
            </p>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-700 pb-8 last:border-b-0"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-400 text-sm mb-4">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
