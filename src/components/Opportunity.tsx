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
              Billions of soccer fans.{' '}
              <span className="text-gradient">Most products still stop at scores, tables, and news.</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Soccer is the world's most followed sport, and major international tournaments
              are its highest-engagement moments. Fans follow every match, track bracket paths,
              and argue about scenarios — but the tools available to them were built for casual
              consumption, not serious engagement.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Serious fans want to understand tournament paths, likely outcomes, and how one
              match reshapes the entire competition. Most products still focus on scores, tables, and news rather than helping fans analyze tournament paths and likely outcomes.
              That is the gap Orvka is built to fill — starting with major international tournaments.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#D8DAE5' }}>
              Orvka is built for that fan, with models and analysis that can improve over time as more match and prediction data becomes available.
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
                stat: '#1',
                label: 'Clear First Wedge',
                sub: 'Tournament engagement, scenario analysis, and prediction — not everything at once',
                color: '#2DC4B2',
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                stat: '↑',
                label: 'Gets better over time',
                sub: 'Match and prediction data help refine the platform over time',
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
