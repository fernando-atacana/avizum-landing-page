'use client'

import { motion, AnimatePresence } from 'framer-motion'

const AWEBER_FORM_ACTION = 'https://www.aweber.com/scripts/addlead.pl'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://avizum.com'
const WAITLIST_CONFIRMATION_REDIRECT = `${SITE_URL}/waitlist/confirmed`

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const handleSubmit = () => {
    // Form posts to AWeber in new tab; close modal so user can see the thank-you page
    setTimeout(onClose, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-4xl max-h-[90vh] my-4 flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#070a12] shadow-2xl shadow-black/60">
              <div className="shrink-0 border-b border-gray-800 p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                    Join the Waitlist
                  </h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-2 text-lg font-medium text-gray-200 transition-colors hover:border-gray-600 hover:text-white"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
                <p className="max-w-3xl text-lg text-gray-300">
                  By submitting this form, your firm will join our waitlist to get
                  early access to Avizum. When your firm has been selected, we
                  will reach out to set up a demo.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Required *
                </p>
              </div>

              <form
                action={AWEBER_FORM_ACTION}
                method="post"
                target="_blank"
                acceptCharset="UTF-8"
                onSubmit={handleSubmit}
                className="waitlist-form-scroll flex-1 min-h-0 overflow-y-auto px-6 pb-8 pt-6 sm:px-8"
              >
                {/* AWeber hidden fields */}
                <input
                  type="hidden"
                  name="meta_web_form_id"
                  value="481360741"
                />
                <input type="hidden" name="meta_split_id" value="" />
                <input type="hidden" name="listname" value="awlist6939557" />
                <input
                  type="hidden"
                  name="redirect"
                  value={WAITLIST_CONFIRMATION_REDIRECT}
                />
                <input
                  type="hidden"
                  name="meta_adtracking"
                  value="Avizum_Web_Form"
                />
                <input type="hidden" name="meta_message" value="1" />
                <input
                  type="hidden"
                  name="meta_required"
                  value="name (awf_first),name (awf_last),email,custom Phone Number,custom Company Website,custom Title"
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
                  <div>
                    <label
                      htmlFor="awf_field-118541114-first"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      First Name *
                    </label>
                    <input
                      id="awf_field-118541114-first"
                      type="text"
                      name="name (awf_first)"
                      required
                      className="w-full rounded-lg border border-gray-800 bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Enter your First Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541114-last"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Last Name *
                    </label>
                    <input
                      id="awf_field-118541114-last"
                      type="text"
                      name="name (awf_last)"
                      required
                      className="w-full rounded-lg border border-gray-800 bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Enter your Last Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541115"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      id="awf_field-118541115"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-800 bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541116"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Phone *
                    </label>
                    <input
                      id="awf_field-118541116"
                      type="text"
                      name="custom Phone Number"
                      required
                      className="w-full rounded-lg border border-gray-800 bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Enter your Phone"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541117"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Law Firm Website *
                    </label>
                    <input
                      id="awf_field-118541117"
                      type="text"
                      name="custom Company Website"
                      required
                      className="w-full rounded-lg border border-gray-800 bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Enter Law Firm Website"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541118"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Title *
                    </label>
                    <input
                      id="awf_field-118541118"
                      type="text"
                      name="custom Title"
                      required
                      className="w-full rounded-lg border border-gray-800 bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Enter your Title"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-900 px-7 py-3 text-xl font-semibold text-gray-100 transition-colors hover:border-gray-500 hover:bg-gray-800"
                >
                  Submit Form
                  <span aria-hidden="true">-></span>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
