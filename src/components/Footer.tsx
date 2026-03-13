export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: 'rgba(37,42,53,0.5)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: '#838896' }}>
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded flex items-center justify-center font-black text-xs"
            style={{ background: 'linear-gradient(135deg, #F5A200 0%, #2DC4B2 100%)', color: '#0B0C0F' }}
          >
            F
          </div>
          <span>FigTech LLC &copy; {year}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">Minnesota, USA</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-200 no-underline"
            style={{ color: '#838896' }}
          >
            Privacy Policy
          </a>
          <a
            href="mailto:figtech10@gmail.com"
            className="hover:text-white transition-colors duration-200 no-underline"
            style={{ color: '#838896' }}
          >
            figtech10@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
