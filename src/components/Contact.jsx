import { motion } from 'framer-motion'
import { useState } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'saimmehmood2004@gmail.com', href: 'mailto:saimmehmood2004@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan | Globally Available', href: null },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/saim-mahmood-1385a5250', href: 'https://www.linkedin.com/in/saim-mahmood-1385a5250' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/SaimMahmoodRamday', href: 'https://github.com/SaimMahmoodRamday' }
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    /*
      FORM BACKEND — Wire this to Formspree or EmailJS for free email delivery.
      Formspree: https://formspree.io — create a free form, replace the action URL.
      EmailJS: https://www.emailjs.com — free tier: 200 emails/month.

      Example with Formspree:
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      })
    */

    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSending(false)
    setSent(true)
    setFormState({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-shell bg-bg">
      <div className="container-xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-syne text-xs uppercase tracking-[0.3em] text-text-muted mb-8"
        >
          CONTACT
        </motion.div>

        {/* Heading — editorial mixed typography */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-3xl md:text-5xl lg:text-6xl text-text-primary mb-4 leading-[1.1]"
        >
          <span className="font-playfair italic">Let&rsquo;s Build</span>{' '}
          <span className="font-syne font-bold">Something Meaningful</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="text-text-muted text-base md:text-lg max-w-2xl mb-16"
        >
          Open to AI/ML engineering roles, and high-impact freelance work.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Contact info */}
          <div className="space-y-6">
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: EASE }}
                className="group flex items-center gap-4"
              >
                <span
                  className="text-lg w-10 h-10 flex items-center justify-center rounded border border-white/10 group-hover:border-white/30 transition-all duration-500"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.label}
                    className="text-text-muted hover:text-text-primary transition-colors duration-500 text-sm"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-text-muted text-sm">{item.value}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="contact-name" className="block font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-3">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                aria-label="Your name"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/15 text-text-primary text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-white/40 transition-colors duration-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-3">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                aria-label="Your email"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/15 text-text-primary text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-white/40 transition-colors duration-500"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-3">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows="4"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                aria-label="Your message"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/15 text-text-primary text-sm placeholder:text-text-muted/40 focus:outline-none focus:border-white/40 transition-colors duration-500 resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              aria-label="Send message"
              className="group font-syne text-sm uppercase tracking-[0.12em] text-text-primary hover:text-ivory transition-all duration-500 mt-4 disabled:opacity-40 disabled:pointer-events-none"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Sending...
                </span>
              ) : sent ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Sent
                </span>
              ) : (
                <>
                  Send Message
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="block h-[1px] w-0 group-hover:w-full bg-white/40 transition-all duration-500 mt-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
