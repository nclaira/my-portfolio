"use client"

import type React from "react"
import { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field error as user types
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (formError) setFormError(null)
    if (isSuccess) setIsSuccess(false)
  }

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name is too long"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    } else if (formData.message.trim().length > 2000) {
      errors.message = "Message is too long"
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    setFieldErrors({})

    // Client-side validation first
    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Safely parse: the route may return HTML (e.g. 404 on a stale dev server)
      let result: any = null
      try {
        result = await response.json()
      } catch {
        if (!response.ok) {
          throw new Error(
            `Server responded with status ${response.status}. The API route may not be available yet — try restarting the dev server.`
          )
        }
        throw new Error("Unexpected response from server. Please try again later.")
      }

      if (!response.ok || !result?.success) {
        // Handle validation errors from the server
        if (result?.errors && typeof result.errors === "object") {
          setFieldErrors(result.errors)
        }
        setFormError(result?.message || "Something went wrong. Please try again.")
      } else {
        setIsSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error: any) {
      console.error("Form submission error:", error)
      setFormError(
        error?.message ||
          "Network error. Please check your connection and try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xl font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          className={`text-xl w-full px-4 py-3 bg-[#1e293b] border rounded-lg focus:outline-none transition-colors ${
            fieldErrors.name
              ? "border-[#ef4444] focus:border-[#ef4444]"
              : "border-[#334155] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/50"
          } disabled:opacity-50`}
          placeholder="Your name"
        />
        {fieldErrors.name && (
          <p className="text-[#ef4444] text-sm mt-1">{fieldErrors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xl font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          className={`text-xl w-full px-4 py-3 bg-[#1e293b] border rounded-lg focus:outline-none transition-colors ${
            fieldErrors.email
              ? "border-[#ef4444] focus:border-[#ef4444]"
              : "border-[#334155] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/50"
          } disabled:opacity-50`}
          placeholder="your@email.com"
        />
        {fieldErrors.email && (
          <p className="text-[#ef4444] text-sm mt-1">{fieldErrors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xl font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          rows={5}
          className={`text-xl w-full px-4 py-3 bg-[#1e293b] border rounded-lg focus:outline-none transition-colors resize-none ${
            fieldErrors.message
              ? "border-[#ef4444] focus:border-[#ef4444]"
              : "border-[#334155] focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/50"
          } disabled:opacity-50`}
          placeholder="Your message..."
        />
        {fieldErrors.message && (
          <p className="text-[#ef4444] text-sm mt-1">{fieldErrors.message}</p>
        )}
      </div>

      {/* Form-level error */}
      {formError && (
        <p className="text-[#ef4444] text-xl text-center">{formError}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-xl w-full bg-[#f59e0b] text-[#0f172a] font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-[#0f172a]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.125 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Sending...</span>
          </>
        ) : isSuccess ? (
          <>
            <svg
              className="h-5 w-5 text-[#0f172a]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 12.5l5 5 9-9"
                strokeWidth="2"
              />
            </svg>
            <span>Message Sent!</span>
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
