'use client'

import { motion, AnimatePresence } from 'framer-motion'

const AWEBER_FORM_ACTION = 'https://www.aweber.com/scripts/addlead.pl'

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
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col my-4">
              {/* Header: sticky so close + title stay visible when form scrolls */}
              <div className="shrink-0 p-8 pb-4 pr-14 relative">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Join the Waitlist
                </h2>
                <p className="text-gray-300 mb-2">
                  By submitting this form, your firm will join our waitlist to get
                  early access to Avizum. When your firm has been selected, we
                  will reach out to set up a demo.
                </p>
                <p className="text-gray-400 text-sm">Required*</p>
              </div>

              {/* Scrollable form */}
              <form
                action={AWEBER_FORM_ACTION}
                method="post"
                target="_blank"
                acceptCharset="UTF-8"
                onSubmit={handleSubmit}
                className="waitlist-form-scroll flex-1 min-h-0 overflow-y-auto space-y-4 px-8 pb-8"
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
                  value="https://www.aweber.com/thankyou-coi.htm?m=text"
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

                <div>
                  <label
                    htmlFor="awf_field-118541114-first"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    id="awf_field-118541114-first"
                    type="text"
                    name="name (awf_first)"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                    placeholder="Enter your First Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="awf_field-118541114-last"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    id="awf_field-118541114-last"
                    type="text"
                    name="name (awf_last)"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                    placeholder="Enter your Last Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="awf_field-118541115"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="awf_field-118541115"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                    placeholder="Enter your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="awf_field-118541116"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="awf_field-118541116"
                    type="text"
                    name="custom Phone Number"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                    placeholder="Enter your Phone"
                  />
                </div>

                <div>
                  <label
                    htmlFor="awf_field-118541117"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Website *
                  </label>
                  <input
                    id="awf_field-118541117"
                    type="text"
                    name="custom Company Website"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                    placeholder="Your Company Website"
                  />
                </div>

                <div>
                  <label
                    htmlFor="awf_field-118541118"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Title *
                  </label>
                  <input
                    id="awf_field-118541118"
                    type="text"
                    name="custom Title"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                    placeholder="Enter your Job Title"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
