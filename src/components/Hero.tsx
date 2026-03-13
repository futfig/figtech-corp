import { Globe, Trophy, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,162,0,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(45,196,178,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Status pill */}
        <div className="flex justify-center mb-8">
          <span className="pill">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#2DC4B2' }}
            />
            MVP Development · FIFA World Cup 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-black tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Tournament Engagement{' '}
          <br />
          <span className="text-gradient">for the World's Biggest Stage.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#838896', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          Favo is a bracket creation, scenario analysis, and tournament tracking
          platform built for FIFA World Cup 2026 — helping fans and bracket
          managers stay engaged from the opening draw to the final whistle.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#contact" className="btn-primary flex items-center gap-2">
            Request Early Access <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#product" className="btn-outline">
            See the Platform
          </a>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <Globe className="w-4 h-4 text-gold" />, label: '48 Teams', sub: 'Largest World Cup ever' },
            { icon: <Trophy className="w-4 h-4 text-teal" />, label: '104 Matches', sub: '3 host nations' },
            {
              icon: (
                <svg className="w-4 h-4" style={{ color: '#F5A200' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              label: 'Real-time Data',
              sub: 'Powered by official feeds',
            },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="glass-card flex items-center gap-3 px-5 py-3">
              <div className="flex-shrink-0">{icon}</div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{label}</div>
                <div className="text-xs" style={{ color: '#838896' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
