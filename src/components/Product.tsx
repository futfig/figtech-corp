import { BookOpen, Target, BarChart3, GitBranch, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Tournament Intelligence',
    description:
      'Deep team profiles, historical tournament performance, head-to-head records, and match trends — all in the context of how competitions actually unfold.',
    color: '#F5A200',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Outcome Prediction',
    description:
      'Data-driven tools that help fans understand and predict match results before they happen. As more tournament and user prediction data is incorporated, the platform can refine its models over time.',
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
    title: 'Multi-language Support',
    description:
      'English, Spanish, French, and Portuguese — built for fans who follow international tournaments regardless of where they watch from.',
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
            <span className="text-gradient">A platform that helps fans analyze tournament paths, model scenarios, and make better predictions.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#838896' }}>
            Most soccer platforms show you what happened. Orvka helps you understand why —
            and what's likely to happen next in the tournament. The initial focus is
            tournament engagement, scenario analysis, and prediction.
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

      </div>
    </section>
  )
}
