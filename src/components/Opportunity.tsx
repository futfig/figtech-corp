import { Calendar, Zap, TrendingUp } from 'lucide-react'

export function Opportunity() {
  return (
    <section
      id="opportunity"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(45,196,178,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="section-label mb-4 block">Why Now</span>
            <h2
              className="font-black tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              The window for{' '}
              <span className="text-gradient">FIFA World Cup 2026</span>{' '}
              is defined and closing.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              The 2026 FIFA World Cup — hosted across the United States, Canada, and Mexico — is
              the largest in the tournament's history: 48 national teams, 3 host nations, and
              104 matches. The group stage alone generates a combinatorial breadth of bracket
              scenarios that no existing consumer product treats seriously.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Existing bracket tools treat submission as the endpoint. Favo treats it as the
              beginning — a persistent engagement surface that evolves with the tournament.
              The opportunity is specific, time-bound, and real.
            </p>
            <p className="text-sm font-medium" style={{ color: '#D8DAE5' }}>
              Tournament begins <span className="text-gold font-bold">June 2026</span>.
              MVP launch is targeted to coincide with the group draw and pre-tournament window.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: <Calendar className="w-5 h-5" />,
                stat: '48',
                label: 'National Teams',
                sub: 'Largest field in World Cup history — expanded from 32',
                color: '#F5A200',
              },
              {
                icon: <Zap className="w-5 h-5" />,
                stat: '104',
                label: 'Total Matches',
                sub: 'Creating persistent bracket decisions across a 6-week window',
                color: '#2DC4B2',
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                stat: '3',
                label: 'Host Nations',
                sub: 'USA, Canada, Mexico — one of the largest combined audiences ever',
                color: '#F5A200',
              },
            ].map(({ icon, stat, label, sub, color }) => (
              <div
                key={label}
                className="glass-card p-6 flex items-start gap-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}18`, color }}
                >
                  {icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-black" style={{ color }}>{stat}</span>
                    <span className="text-lg font-bold text-white">{label}</span>
                  </div>
                  <p className="text-sm leading-snug" style={{ color: '#838896' }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
