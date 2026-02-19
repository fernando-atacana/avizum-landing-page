'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AWEBER_FORM_ACTION = 'https://www.aweber.com/scripts/addlead.pl'
const AWEBER_CONFIRMATION_REDIRECT = '/waitlist/confirmed'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

type FieldKey =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'companyWebsite'
  | 'jobTitle'

type FormErrors = Partial<Record<FieldKey, string>>

const FIELD_NAMES: Record<FieldKey, string> = {
  firstName: 'name (awf_first)',
  lastName: 'name (awf_last)',
  email: 'email',
  phone: 'custom Phone Number',
  companyWebsite: 'custom Company Website',
  jobTitle: 'custom Title',
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [errors, setErrors] = useState<FormErrors>({})

  const sanitizePhoneInput = (value: string) => {
    // Keep only characters we accept for phone numbers.
    return value.replace(/[^0-9()+\-\s]/g, '')
  }

  const validateField = (key: FieldKey, rawValue: string): string | undefined => {
    const value = rawValue.trim()

    switch (key) {
      case 'firstName':
        if (!value) return 'First name is required.'
        if (value.length < 2) return 'First name must be at least 2 characters.'
        return undefined
      case 'lastName':
        if (!value) return 'Last name is required.'
        if (value.length < 2) return 'Last name must be at least 2 characters.'
        return undefined
      case 'email':
        if (!value) return 'Email is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.'
        return undefined
      case 'phone': {
        if (!value) return 'Phone number is required.'
        if (!/^\+?[0-9()\-\s]{7,20}$/.test(value)) return 'Please enter a valid phone number.'
        return undefined
      }
      case 'companyWebsite':
        if (!value) return 'Company website is required.'
        if (!/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(value)) {
          return 'Please enter a valid website URL.'
        }
        return undefined
      case 'jobTitle':
        if (!value) return 'Job title is required.'
        if (value.length < 2) return 'Job title must be at least 2 characters.'
        return undefined
      default:
        return undefined
    }
  }

  const getFieldKeyByName = (name: string): FieldKey | null => {
    switch (name) {
      case FIELD_NAMES.firstName:
        return 'firstName'
      case FIELD_NAMES.lastName:
        return 'lastName'
      case FIELD_NAMES.email:
        return 'email'
      case FIELD_NAMES.phone:
        return 'phone'
      case FIELD_NAMES.companyWebsite:
        return 'companyWebsite'
      case FIELD_NAMES.jobTitle:
        return 'jobTitle'
      default:
        return null
    }
  }

  const validateForm = (form: HTMLFormElement): FormErrors => {
    const formData = new FormData(form)
    const nextErrors: FormErrors = {}

    ;(Object.keys(FIELD_NAMES) as FieldKey[]).forEach((key) => {
      const value = String(formData.get(FIELD_NAMES[key]) ?? '')
      const error = validateField(key, value)

      if (error) {
        nextErrors[key] = error
      }
    })

    return nextErrors
  }

  const setFieldError = (key: FieldKey, value: string) => {
    const error = validateField(key, value)
    setErrors((prev) => {
      if (!error && !prev[key]) return prev
      return { ...prev, [key]: error }
    })
  }

  const handleFieldBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const key = getFieldKeyByName(event.currentTarget.name)
    if (!key) return
    setFieldError(key, event.currentTarget.value)
  }

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = getFieldKeyByName(event.currentTarget.name)
    if (!key || !errors[key]) return
    setFieldError(key, event.currentTarget.value)
  }

  const handlePhoneInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget
    input.value = sanitizePhoneInput(input.value)

    if (errors.phone) {
      setFieldError('phone', input.value)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const nextErrors = validateForm(event.currentTarget)
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault()
      setErrors(nextErrors)
      return
    }

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
                noValidate
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
                  value={AWEBER_CONFIRMATION_REDIRECT}
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
                      minLength={2}
                      maxLength={50}
                      autoComplete="given-name"
                      className={`w-full rounded-lg border bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500/30 ${
                        errors.firstName
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-gray-800 focus:border-primary-500'
                      }`}
                      placeholder="Enter your First Name"
                      title="Please enter at least 2 characters for your first name."
                      onBlur={handleFieldBlur}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(errors.firstName)}
                      aria-describedby="first-name-error"
                    />
                    <p
                      id="first-name-error"
                      className={`mt-2 min-h-5 text-sm ${
                        errors.firstName ? 'text-rose-400' : 'text-transparent'
                      }`}
                      aria-live="polite"
                    >
                      {errors.firstName || ' '}
                    </p>
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
                      minLength={2}
                      maxLength={50}
                      autoComplete="family-name"
                      className={`w-full rounded-lg border bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500/30 ${
                        errors.lastName
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-gray-800 focus:border-primary-500'
                      }`}
                      placeholder="Enter your Last Name"
                      title="Please enter at least 2 characters for your last name."
                      onBlur={handleFieldBlur}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(errors.lastName)}
                      aria-describedby="last-name-error"
                    />
                    <p
                      id="last-name-error"
                      className={`mt-2 min-h-5 text-sm ${
                        errors.lastName ? 'text-rose-400' : 'text-transparent'
                      }`}
                      aria-live="polite"
                    >
                      {errors.lastName || ' '}
                    </p>
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
                      autoComplete="email"
                      className={`w-full rounded-lg border bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500/30 ${
                        errors.email
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-gray-800 focus:border-primary-500'
                      }`}
                      placeholder="Enter your Email"
                      title="Please enter a valid email address."
                      onBlur={handleFieldBlur}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby="email-error"
                    />
                    <p
                      id="email-error"
                      className={`mt-2 min-h-5 text-sm ${
                        errors.email ? 'text-rose-400' : 'text-transparent'
                      }`}
                      aria-live="polite"
                    >
                      {errors.email || ' '}
                    </p>
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
                      type="tel"
                      name="custom Phone Number"
                      required
                      minLength={7}
                      maxLength={20}
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="^\+?[0-9()\-\s]{7,20}$"
                      className={`w-full rounded-lg border bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500/30 ${
                        errors.phone
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-gray-800 focus:border-primary-500'
                      }`}
                      placeholder="Enter your Phone"
                      title="Please enter a valid phone number using 7-20 digits (you may include +, spaces, hyphens, or parentheses)."
                      onInput={handlePhoneInput}
                      onBlur={handleFieldBlur}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby="phone-error"
                    />
                    <p
                      id="phone-error"
                      className={`mt-2 min-h-5 text-sm ${
                        errors.phone ? 'text-rose-400' : 'text-transparent'
                      }`}
                      aria-live="polite"
                    >
                      {errors.phone || ' '}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541117"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Company Website *
                    </label>
                    <input
                      id="awf_field-118541117"
                      type="text"
                      name="custom Company Website"
                      required
                      inputMode="url"
                      pattern="^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$"
                      className={`w-full rounded-lg border bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500/30 ${
                        errors.companyWebsite
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-gray-800 focus:border-primary-500'
                      }`}
                      placeholder="example.com or https://example.com"
                      title="Please enter a valid website URL (for example: example.com or https://example.com)."
                      onBlur={handleFieldBlur}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(errors.companyWebsite)}
                      aria-describedby="website-error"
                    />
                    <p
                      id="website-error"
                      className={`mt-2 min-h-5 text-sm ${
                        errors.companyWebsite ? 'text-rose-400' : 'text-transparent'
                      }`}
                      aria-live="polite"
                    >
                      {errors.companyWebsite || ' '}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="awf_field-118541118"
                      className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-300"
                    >
                      Job Title *
                    </label>
                    <input
                      id="awf_field-118541118"
                      type="text"
                      name="custom Title"
                      required
                      minLength={2}
                      maxLength={80}
                      autoComplete="organization-title"
                      className={`w-full rounded-lg border bg-[#0c1019] px-4 py-3 text-lg text-gray-100 outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500/30 ${
                        errors.jobTitle
                          ? 'border-rose-500/70 focus:border-rose-500'
                          : 'border-gray-800 focus:border-primary-500'
                      }`}
                      placeholder="Enter your Job Title"
                      title="Please enter your job title."
                      onBlur={handleFieldBlur}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(errors.jobTitle)}
                      aria-describedby="job-title-error"
                    />
                    <p
                      id="job-title-error"
                      className={`mt-2 min-h-5 text-sm ${
                        errors.jobTitle ? 'text-rose-400' : 'text-transparent'
                      }`}
                      aria-live="polite"
                    >
                      {errors.jobTitle || ' '}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-900 px-7 py-3 text-xl font-semibold text-gray-100 transition-colors hover:border-gray-500 hover:bg-gray-800"
                >
                  Submit Form
                  <span aria-hidden="true">{'->'}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
