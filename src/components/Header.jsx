import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-content mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Green Heaven" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/o-nas"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-green-primary' : 'text-subtle hover:text-dark'}`
            }
          >
            O nás
          </NavLink>
          <NavLink
            to="/sluzby"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-green-primary' : 'text-subtle hover:text-dark'}`
            }
          >
            Služby
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-green-primary' : 'text-subtle hover:text-dark'}`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-green-primary' : 'text-subtle hover:text-dark'}`
            }
          >
            Kontakt
          </NavLink>
        </nav>

        <Link
          to="/kontakt"
          className="bg-green-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-green-dark transition-colors"
        >
          Objednat svoz
        </Link>
      </div>
    </header>
  )
}
