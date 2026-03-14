import { BookOpen, Target, BarChart3, GitBranch, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Team & Player Intelligence',
    description:
      'Deep profiles, historical performance, head-to-head records, and trends across leagues and competitions worldwide. Know your team beyond the scoreboard.',
    color: '#F5A200',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Outcome Prediction',
    description:
      'ML-powered tools that help fans understand and predict match results before they happen. The more the platform learns, the sharper the predictions.',
    color: '#2DC4B2',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Competition Tracking',
    description:
      'Follow your favorite competitions in real time — from group stage to final. Standings, fixtures, and results updated as matches unfold.',
    color: '#F5A200',
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: 'Scenario Analysis',
    description:
      'Model what different results mean for your team\'s path through a competition. Understand how one match changes everything that follows.',
    color: '#2DC4B2',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Community & Prediction Leagues',
    description:
      'Create private leagues with friends, compare predictions, and see how your read on the game stacks up against the community.',
    color: '#F5A200',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Built for a Global Audience',
    description:
      'Full support for English, Spanish, French, and Portuguese — designed from the ground up for international soccer\'s global fan base.',
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
            More than a stats app.
            <br />
            <span className="text-gradient">A platform that helps you think about the game.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#838896' }}>
            Most soccer platforms show you what happened. Favo helps you understand why —
            and what's likely to happen next. It learns from every match, every user, and
            every prediction to get sharper over time.
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
