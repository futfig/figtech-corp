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

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Company card */}
          <div className="glass-card p-7 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">FigTech</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#838896' }}>
              FigTech is a technology startup building a soccer intelligence platform,
              starting with tournament tracking, scenario analysis, and prediction tools
              for major international competitions. We are in active MVP development with
              a functional application foundation already in place.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Our thesis is focused: serious soccer fans have no product that helps them
              understand tournament paths, model outcomes, and engage analytically with
              the competitions they care about most. Favo is that product. We are starting
              with a clear, launchable scope and building from there.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { icon: <Building2 className="w-4 h-4" />, text: 'FigTech' },
                { icon: <Code className="w-4 h-4" />, text: 'Pre-funded · MVP Stage' },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-2" style={{ color: '#838896' }}>
                  <span style={{ color: '#2DC4B2' }}>{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div className="glass-card p-7">
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #F5A200 0%, #2DC4B2 100%)', color: '#0B0C0F' }}
              >
                EF
              </div>
              <div>
                <div className="font-bold text-white">Edison Figueroa</div>
                <div className="text-sm" style={{ color: '#838896' }}>
                  Founder &amp; Builder, FigTech
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#838896' }}>
              Edison is building Favo end-to-end — product, design, and engineering.
              A functional application foundation is already in place, with backend
              services live on Google Cloud Platform.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
