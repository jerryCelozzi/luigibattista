import Link from 'next/link'

const links = [
  { href: '#esperienze', label: 'Esperienze' },
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/8 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <span className="font-display font-bold text-white">
            Luigi <span className="text-gradient-gold">Battista</span>
          </span>
        </div>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm text-white/35">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Luigi Battista. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
