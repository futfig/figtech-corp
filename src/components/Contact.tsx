import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="section-label mb-4 block">Get In Touch</span>
        <h2
          className="font-black tracking-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Interested in{' '}
          <span className="text-gradient">early access or partnership?</span>
        </h2>
        <p className="text-base leading-relaxed mb-10" style={{ color: '#838896' }}>
          Favo is in active development ahead of FIFA World Cup 2026. We are selectively
          sharing early access with interested users and exploring partnership opportunities
          with tournament communities, media organizations, and platform partners.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:hello@figtech.io"
          className="btn-primary inline-flex items-center gap-3 mb-8"
        >
          <Mail className="w-4 h-4" />
          hello@figtech.io
          <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-sm" style={{ color: '#838896' }}>
          For early access requests, partnership inquiries, or press contact.
        </p>
      </div>
    </section>
  )
}
