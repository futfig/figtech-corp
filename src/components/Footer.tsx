export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: 'rgba(37,42,53,0.5)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: '#838896' }}>
        <div className="flex items-center gap-2">
          <img
            src="/brand/logo-mark-dark.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
            draggable={false}
          />
          <span>Orvka &copy; {year}</span>
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
            href="#contact"
            className="hover:text-white transition-colors duration-200 no-underline"
            style={{ color: '#838896' }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
