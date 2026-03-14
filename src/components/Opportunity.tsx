import { Globe, Zap, TrendingUp } from 'lucide-react'

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
              International soccer has{' '}
              <span className="text-gradient">3.5 billion fans.</span>{' '}
              Most platforms still only show them the score.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Soccer is the world's sport. Across Europe, South America, Africa, and Asia,
              hundreds of millions of fans follow clubs, competitions, and players with genuine
              depth of knowledge — and genuine hunger to engage beyond a live score feed.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              The tools that exist today were built for casual consumption: scores, tables, news.
              No platform takes the deep fan seriously as someone who wants to understand outcomes,
              model scenarios, and track the sport with real analytical rigor.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#D8DAE5' }}>
              Favo is built for that fan.{' '}
              <span className="text-gold font-semibold">And the more fans use it, the smarter it gets.</span>
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: <Globe className="w-5 h-5" />,
                stat: '3.5B',
                label: 'Global Fans',
                sub: 'Soccer is the most followed sport on the planet',
                color: '#F5A200',
              },
              {
                icon: <Zap className="w-5 h-5" />,
                stat: '500+',
                label: 'Competitions Worldwide',
                sub: 'Top-tier leagues, cups, and international tournaments across every continent',
                color: '#2DC4B2',
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                stat: '↑',
                label: 'Gets better over time',
                sub: 'Every match, prediction, and user interaction makes the platform sharper',
                color: '#F5A200',
              },
            ].map(({ icon, stat, label, sub, color }) => (
              <div key={label} className="glass-card p-6 flex items-start gap-5">
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
