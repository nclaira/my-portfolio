"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Handle form submission here
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="text-[#f59e0b]">Touch</span>
          </h2>
          <p className="text-xl text-[#f8fafc]/60">
            Have a project in mind? I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              required
              className="text-xl w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors"
              placeholder="Your name"
            />
          </div>

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
              required
              className="text-xl w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xl font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="text-xl w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg focus:outline-none focus:border-[#f59e0b] transition-colors resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-xl w-full bg-[#f59e0b] text-[#0f172a] font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        <div className="text-xl mt-12 pt-8 border-t border-[#334155] text-center">
          <p className="text-[#f8fafc]/60 mb-4">or reach out directly:</p>
          <a
            href="mailto:claire@example.com"
            className="text-[#f59e0b] font-semibold hover:opacity-70 transition-opacity"
          >
            nclaire981@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
