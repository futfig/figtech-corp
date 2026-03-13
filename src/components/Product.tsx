import { Target, GitBranch, BarChart3, RefreshCw, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'Bracket Creation',
    description:
      'Build full tournament brackets from group stage through the final. Favo structures the decision-making process so every pick reflects real tournament logic.',
    color: '#F5A200',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Scenario Analysis',
    description:
      'Explore how different group-stage outcomes ripple through the knockout rounds. Model alternative paths and understand which bracket configurations are most defensible.',
    color: '#2DC4B2',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Outcome Simulation',
    description:
      'Simulate tournament progressions against multiple team configurations. Favo helps bracket managers see the downstream impact of each pick before committing.',
    color: '#F5A200',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Live Tournament Tracking',
    description:
      'As official match data is ingested, brackets update in real time. Fans can revisit decisions, track scoring, and stay engaged across the full 6-week tournament window.',
    color: '#2DC4B2',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'League & Group Play',
    description:
      'Create private leagues and compete with friends, colleagues, or communities. Leaderboards and scoring are calculated automatically as the tournament progresses.',
    color: '#F5A200',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Multi-locale Support',
    description:
      'Favo is built for a global audience. The platform supports English, Spanish, French, and Portuguese — reflecting the host nations and the World Cup\'s international reach.',
    color: '#2DC4B2',
  },
]

export function Product() {
  return (
    <section id="product" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">The Platform</span>
          <h2
            className="font-black tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            More than a bracket form.
            <br />
            <span className="text-gradient">A full engagement platform.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#838896' }}>
            Favo is designed around a simple insight: fans don't lose interest after they submit
            a bracket — they lose interest when the platform stops responding to the tournament.
            We keep them engaged throughout.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, description, color }) => (
            <div key={title} className="glass-card p-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, color }}
              >
                {icon}
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#838896' }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform callout */}
        <div
          className="glass-card mt-10 p-8 text-center"
          style={{ borderColor: 'rgba(245,162,0,0.15)' }}
        >
          <p className="text-base font-medium" style={{ color: '#D8DAE5' }}>
            Favo is available as a{' '}
            <span className="text-gold font-bold">web application</span> and a{' '}
            <span className="text-gold font-bold">native Android app</span>, built on a shared
            backend infrastructure deployed on{' '}
            <span className="text-teal font-bold">Google Cloud Platform</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
