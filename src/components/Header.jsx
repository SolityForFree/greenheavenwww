import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const navLinks = [
  { to: '/o-nas', label: 'O nás' },
  { to: '/sluzby', label: 'Služby' },
  { to: '/blog', label: 'Blog' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-content mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Green Heaven" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-green-primary' : 'text-subtle hover:text-dark'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="bg-green-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-green-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Objednat svoz
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-green-primary bg-green-light' : 'text-body hover:text-dark hover:bg-gray-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
