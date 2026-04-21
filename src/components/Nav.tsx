export function Nav() {
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <img
            src="/brand/logo-mark-dark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            draggable={false}
          />
          <span className="font-bold text-white text-base tracking-tight font-brand">Orvka</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Product', href: '#product' },
            { label: 'Company', href: '#company' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[#838896] hover:text-white transition-colors duration-200 no-underline"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="btn-primary text-sm py-2 px-5">
          Request Early Access
        </a>
      </div>
    </nav>
  )
}
