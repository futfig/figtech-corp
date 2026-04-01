import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('https://formsubmit.co/ajax/hello@orvka.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mb-4 block">Get In Touch</span>
          <h2
            className="font-black tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Interested in{' '}
            <span className="text-gradient">early access or partnership?</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#838896' }}>
            Orvka is in active development. We are selectively sharing early access with
            interested users and exploring partnership opportunities with soccer communities,
            media organizations, and data partners.
          </p>
        </div>

        {status === 'success' ? (
          <div
            className="glass-card p-10 text-center flex flex-col items-center gap-4"
            style={{ borderColor: 'rgba(45,196,178,0.3)' }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: '#2DC4B2' }} />
            <p className="font-bold text-white text-lg">Message received.</p>
            <p className="text-sm" style={{ color: '#838896' }}>
              We'll be in touch at the email you provided.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#838896' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#838896] outline-none transition-colors duration-200"
                  style={{
                    background: 'rgba(29,32,41,0.8)',
                    border: '1px solid rgba(37,42,53,0.8)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(245,162,0,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(37,42,53,0.8)')}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#838896' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#838896] outline-none transition-colors duration-200"
                  style={{
                    background: 'rgba(29,32,41,0.8)',
                    border: '1px solid rgba(37,42,53,0.8)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(245,162,0,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(37,42,53,0.8)')}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#838896' }}>
                What brings you here?
              </label>
              <select
                name="interest"
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors duration-200 appearance-none"
                style={{
                  background: 'rgba(29,32,41,0.8)',
                  border: '1px solid rgba(37,42,53,0.8)',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(245,162,0,0.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(37,42,53,0.8)')}
              >
                <option value="early-access">Early access</option>
                <option value="partnership">Partnership or collaboration</option>
                <option value="press">Press or media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#838896' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us a bit about yourself or what you're looking for..."
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#838896] outline-none resize-none transition-colors duration-200"
                style={{
                  background: 'rgba(29,32,41,0.8)',
                  border: '1px solid rgba(37,42,53,0.8)',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(245,162,0,0.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(37,42,53,0.8)')}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm" style={{ color: '#F03636' }}>
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Something went wrong. Please try again or email us directly at hello@orvka.com
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary flex items-center justify-center gap-2 w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            <p className="text-xs text-center" style={{ color: '#838896' }}>
              hello@orvka.com
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
