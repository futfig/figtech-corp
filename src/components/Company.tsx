import { Building2, Code } from 'lucide-react'

export function Company() {
  return (
    <section id="company" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block">The Company</span>
          <h2
            className="font-black tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Built with focus,{' '}
            <span className="text-gradient">shipped with intent.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-7">
            <h3 className="text-xl font-bold text-white mb-4">FigTech LLC</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#838896' }}>
              Orvka is a product of FigTech LLC, a Minnesota limited liability company.
              FigTech LLC develops and operates Orvka at orvka.com and in the Orvka apps.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#838896' }}>
              Orvka is a soccer prediction platform, live at orvka.com, with tournament
              tracking, scenario analysis, and prediction tools for major international
              competitions.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Our thesis is focused: serious soccer fans have few products built specifically
              to help them understand tournament paths, model outcomes, and engage analytically
              with the competitions they care about most. Orvka is that product. We are
              starting with a clear, launchable scope and building from there.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { icon: <Building2 className="w-4 h-4" />, text: 'FigTech LLC · Minnesota, USA' },
                { icon: <Code className="w-4 h-4" />, text: 'Pre-funded · MVP Stage' },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-2" style={{ color: '#838896' }}>
                  <span style={{ color: '#2DC4B2' }}>{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
