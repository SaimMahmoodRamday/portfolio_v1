import { motion } from 'framer-motion'
import { useState } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const CONTACT_INFO = [
  { label: 'Email', value: 'saimmehmood2004@gmail.com', href: 'mailto:saimmehmood2004@gmail.com' },
  { label: 'Location', value: 'Islamabad, Pakistan · Globally Available', href: null },
  { label: 'LinkedIn', value: 'linkedin.com/in/saim-mahmood-1385a5250', href: 'https://www.linkedin.com/in/saim-mahmood-1385a5250' },
  { label: 'GitHub', value: 'github.com/SaimMahmoodRamday', href: 'https://github.com/SaimMahmoodRamday' }
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/xyklqryj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      })
      if (!res.ok) throw new Error(`Formspree responded with ${res.status}`)
      setSent(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error('Contact form submission failed:', err)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-shell bg-paper">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Chapter VI.</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">Correspondence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-6xl lg:text-7xl text-ink mb-4 leading-[1.05] ink-bleed"
        >
          <span className="font-serif italic">Let&rsquo;s Build</span>{' '}
          <span className="font-serif font-semibold">Something Meaningful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="font-serif italic text-graphite text-lg max-w-2xl mb-16"
        >
          Open to AI/ML engineering roles, and high-impact freelance work.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Address card — printed letterhead */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="paper-card p-8 md:p-10" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-2">
                Letterhead
              </div>
              <div className="font-serif italic font-bold text-3xl text-ink ink-bleed mb-1">
                Saim Mahmood
              </div>
              <div className="font-serif text-graphite text-base mb-8">
                AI/ML Engineer
              </div>

              <div className="space-y-5">
                {CONTACT_INFO.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.08, ease: EASE }}
                    className="border-b border-rule pb-4 last:border-b-0"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-serif text-ink hover:text-graphite transition-colors duration-500 text-base break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-serif text-ink-2 text-base">{item.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Stamp */}
              <div className="mt-8 pt-6 border-t border-rule flex items-center justify-between">
                <span className="font-hand text-2xl text-ink">— yours,</span>
                <span className="font-serif italic text-graphite">SM</span>
              </div>
            </div>
          </motion.aside>

          {/* Letter form */}
          <motion.form
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 paper-card p-8 md:p-12"
            style={{ transform: 'rotate(0.3deg)' }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-graphite mb-2">
              A Letter
            </div>
            <div className="font-serif italic text-2xl text-ink mb-8 ink-bleed">
              Compose a note —
            </div>

            <div className="space-y-8">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-[10px] text-graphite tracking-[0.22em] uppercase mb-2">
                  From
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  aria-label="Your name"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-rule text-ink font-serif text-lg placeholder:text-pencil placeholder:italic focus:outline-none focus:border-ink transition-colors duration-500"
                  placeholder="your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-mono text-[10px] text-graphite tracking-[0.22em] uppercase mb-2">
                  Return Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  aria-label="Your email"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-rule text-ink font-serif text-lg placeholder:text-pencil placeholder:italic focus:outline-none focus:border-ink transition-colors duration-500"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-mono text-[10px] text-graphite tracking-[0.22em] uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  aria-label="Your message"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-rule text-ink font-serif text-lg placeholder:text-pencil placeholder:italic focus:outline-none focus:border-ink transition-colors duration-500 resize-none leading-[1.8]"
                  placeholder="dear saim, …"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              aria-label="Send message"
              className="group mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink disabled:opacity-40 disabled:pointer-events-none"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Pressing ink…
                </span>
              ) : sent ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Posted
                </span>
              ) : (
                <>
                  <span className="relative">
                    Seal &amp; Send
                    <span className="block h-[1px] w-full bg-ink scale-x-100 group-hover:scale-x-110 origin-left transition-transform duration-500 mt-1" />
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
