import { Globe, TrendingUp, ArrowRight } from 'lucide-react'

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
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2DC4B2' }} />
            MVP Development · International Soccer
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-black tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          The intelligence layer
          <br />
          <span className="text-gradient">for international soccer.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#838896', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          Favo helps fans around the world understand their favorite leagues, teams, and
          players — and predict what happens next. Powered by deep data analytics and
          machine learning that gets smarter as the platform grows.
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
            {
              icon: <Globe className="w-4 h-4" style={{ color: '#F5A200' }} />,
              label: '3.5B Fans',
              sub: 'Soccer is the world\'s sport',
            },
            {
              icon: <TrendingUp className="w-4 h-4" style={{ color: '#2DC4B2' }} />,
              label: '500+ Competitions',
              sub: 'Leagues and tournaments worldwide',
            },
            {
              icon: (
                <svg className="w-4 h-4" style={{ color: '#F5A200' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.546A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.546z" />
                </svg>
              ),
              label: 'Gets smarter over time',
              sub: 'ML that improves with every match',
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
