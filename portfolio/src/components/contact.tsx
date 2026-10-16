"use client"

import ContactForm from "@/components/ContactForm"
import AnimateIn from "@/components/AnimateIn"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Get In <span className="text-[#f59e0b]">Touch</span></h2>
            <p className="text-sm text-[#f8fafc]/60 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </AnimateIn>

        <div className="max-w-2xl mx-auto">
          <AnimateIn delay={0.2}>
            <ContactForm />
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 pt-8 border-t border-[#334155] text-center">
              <p className="text-sm text-[#f8fafc]/50 mb-3">or reach out directly:</p>
              <a href="mailto:nclaire981@gmail.com" className="text-[#f59e0b] text-sm font-semibold hover:opacity-70 transition-opacity">
                nclaire981@gmail.com
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
