const stack = [
  { name: 'Kotlin / Ktor', role: 'Backend API & auth services', tier: 'Backend' },
  { name: 'PostgreSQL 16', role: 'Relational data store with Flyway migrations', tier: 'Backend' },
  { name: 'GCP App Engine', role: 'Backend deployment & auto-scaling', tier: 'Infrastructure' },
  { name: 'React 18 / TypeScript', role: 'Web frontend — Vite, Tailwind, shadcn/ui', tier: 'Web' },
  { name: 'Kotlin / Jetpack Compose', role: 'Native Android application', tier: 'Mobile' },
  { name: 'JWT Auth', role: 'Access & refresh token authentication flow', tier: 'Security' },
]

const tierColor: Record<string, string> = {
  Backend: '#F5A200',
  Infrastructure: '#2DC4B2',
  Web: '#F5A200',
  Mobile: '#2DC4B2',
  Security: '#F5A200',
}

export function Technology() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <span className="section-label mb-4 block">Infrastructure</span>
            <h2
              className="font-black tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
            >
              Built on{' '}
              <span className="text-gradient">production-grade</span>{' '}
              cloud infrastructure from day one.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#838896' }}>
              FigTech's backend is deployed on Google Cloud Platform and designed around
              a multi-platform client model. The backend serves both the web and Android
              clients from a single Ktor REST API, with shared authentication and a
              structured data ingestion pipeline for official tournament data.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#838896' }}>
              The architecture is designed to scale with the platform — built for real
              load without over-engineering for hypothetical future demand.
              This is intentional: the MVP validates engagement and retention before the
              platform expands.
            </p>
          </div>

          {/* Right: stack list */}
          <div className="glass-card p-6 divide-y divide-border">
            {stack.map(({ name, role, tier }) => (
              <div key={name} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: tierColor[tier] ?? '#838896' }}
                />
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#838896' }}>
                    {role}
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{
                    background: `${tierColor[tier] ?? '#838896'}18`,
                    color: tierColor[tier] ?? '#838896',
                    border: `1px solid ${tierColor[tier] ?? '#838896'}30`,
                  }}
                >
                  {tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
