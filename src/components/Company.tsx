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
              FigTech is a technology startup building a data analytics and intelligence
              platform for international soccer fans. We are in active MVP development,
              focused on giving fans the tools to go deeper — tracking competitions,
              understanding teams and players, and predicting outcomes with the help of
              machine learning.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#838896' }}>
              Our thesis is straightforward: soccer has more engaged fans than any sport on
              earth, and none of them have a platform that takes their depth of knowledge
              seriously. Favo is built to change that. The platform improves as it grows —
              more users, more match data, and more prediction feedback means sharper
              analytics and better insight for everyone.
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
              Edison is building Favo end-to-end — backend infrastructure, web frontend,
              Android client, and product design. The platform is in active development
              with a functional application foundation already in place.
            </p>

            <div
              className="mt-5 pt-5 border-t text-sm"
              style={{ borderColor: 'rgba(37,42,53,0.5)', color: '#838896' }}
            >
              <div className="flex flex-col gap-1.5">
                <span>Backend · Kotlin / Ktor / GCP</span>
                <span>Web · React / TypeScript</span>
                <span>Mobile · Kotlin / Jetpack Compose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
