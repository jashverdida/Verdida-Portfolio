import { motion } from 'framer-motion'
import { SectionTitle } from './Chrome'
import { CONTACT } from '../data'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
}

export default function Contact({ onToast }) {
  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = data.get('subject')
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    onToast('Opening your email client...')
    setTimeout(() => e.target.reset(), 2000)
  }

  const inputClass =
    'glass w-full rounded-xl px-4 py-3 text-sm text-main placeholder:text-muted/70 outline-none transition-all duration-300 focus:border-accent/50 focus:shadow-[0_0_20px_var(--glow)]'

  return (
    <section id="contact" className="deck-section bg-deep">
      <div className="mx-auto w-full max-w-5xl px-5 pt-16">
        <SectionTitle
          title="Let's Work Together"
          subtitle="I'm always interested in hearing about new projects and opportunities."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <motion.div {...fadeUp} className="space-y-4">
            {[
              { icon: 'fa-envelope', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: 'fa-phone', label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
              { icon: 'fa-map-marker-alt', label: 'Location', value: CONTACT.location },
            ].map((item) => (
              <div key={item.label} className="glass glow-border flex items-center gap-4 rounded-2xl p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <i className={`fas ${item.icon}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="break-all text-xs text-muted hover:text-accent md:text-sm">{item.value}</a>
                  ) : (
                    <p className="text-xs text-muted md:text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="pt-2 text-center md:text-left">
              <h3 className="mb-3 text-sm font-semibold">Connect With Me</h3>
              <div className="flex justify-center gap-3 md:justify-start">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    title={s.title}
                    target="_blank"
                    rel="noreferrer"
                    className="glass glow-border flex h-11 w-11 items-center justify-center rounded-full text-lg text-accent transition-transform duration-300 hover:-translate-y-1"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} onSubmit={submit} className="space-y-4">
            <input name="name" type="text" placeholder="Your Name" required className={inputClass} />
            <input name="email" type="email" placeholder="Your Email" required className={inputClass} />
            <input name="subject" type="text" placeholder="Subject" required className={inputClass} />
            <textarea name="message" rows="4" placeholder="Your Message" required className={`${inputClass} resize-none`} />
            <button
              type="submit"
              className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_8px_32px_var(--glow)]"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        <footer className="mt-10 border-t border-white/5 pt-5 text-center text-xs text-muted">
          © 2026 Jashmine Verdida. All Rights Reserved.
        </footer>
      </div>
    </section>
  )
}
