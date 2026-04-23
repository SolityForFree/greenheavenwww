import { Link } from 'react-router-dom'
import heroBg from '../assets/images/hero-barrel.png'
import oilImg from '../assets/images/service-oil.png'
import gastroImg from '../assets/images/service-gastro.png'

const stats = [
  { value: '500+', label: 'Spokojených klientů' },
  { value: '2M+', label: 'Litrů recyklovaného oleje' },
  { value: '1000+', label: 'Tun zpracovaného odpadu' },
]

const steps = [
  {
    num: '1',
    title: 'Kontaktujte nás',
    desc: 'Zavolejte nám nebo vyplňte kontaktní formulář pro sjednání svozu.',
  },
  {
    num: '2',
    title: 'Dodáme nádoby',
    desc: 'Poskytneme vám vhodné nádoby pro sběr odpadu.',
  },
  {
    num: '3',
    title: 'Pravidelný svoz',
    desc: 'Pravidelně svážíme váš odpad a ekologicky ho zpracováváme.',
  },
]

const contactCards = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Telefon',
    primary: '+420 603 217 594',
    secondary: 'Po-Pá 8:00 - 18:00',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'E-mail',
    primary: 'info@greenheaven.cz',
    secondary: 'Odpovíme do 24 hodin',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Provozní doba',
    primary: 'Pondělí - Pátek: 8:00 - 18:00',
    secondary: 'Sobota - Neděle: Zavřeno',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-light">
        <div className="max-w-content mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-5">
              Ekologické čištění provozu
            </h1>
            <p className="text-body text-base leading-relaxed mb-8">
              Postaráme se o Váš použitý olej, tuky i gastroodpad s ohledem na životní prostředí
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="bg-orange-cta text-orange-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Objednat svoz
              </Link>
              <Link
                to="/sluzby"
                className="border border-green-primary text-green-primary font-semibold px-6 py-3 rounded-lg hover:bg-green-primary hover:text-white transition-colors"
              >
                Naše služby
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={heroBg}
              alt="Ekologické zpracování oleje"
              className="max-h-80 object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-lime">
        <div className="max-w-content mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 mb-4">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-5xl font-bold text-white">{s.value}</div>
                <div className="text-white text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white font-medium mt-2">
            Se svozem i zpracováním vám rádi pomůžeme
          </p>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">Služby, které vám usnadní třídění</h2>
            <p className="text-muted text-base">Protože víme, že vám na životním prostředí záleží stejně jako nám</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Oil card */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={oilImg} alt="Výkup olejů" className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🛢️</span>
                  <h3 className="text-lg font-bold text-dark">Výkup olejů</h3>
                </div>
                <p className="text-body text-sm mb-4">
                  Sběr a výkup použitých olejů z restaurací a gastronomických provozů
                </p>
                <Link
                  to="/sluzby"
                  className="inline-flex items-center gap-1 bg-orange-cta text-orange-text text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Objednat svoz oleje →
                </Link>
              </div>
            </div>
            {/* Gastro card */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={gastroImg} alt="Gastroodpad" className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">♻️</span>
                  <h3 className="text-lg font-bold text-dark">Gastroodpad</h3>
                </div>
                <p className="text-body text-sm mb-4">
                  Ekologická likvidace a zpracování gastroodpadu z kuchyní a restaurací
                </p>
                <Link
                  to="/sluzby"
                  className="inline-flex items-center gap-1 border border-green-primary text-green-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-primary hover:text-white transition-colors"
                >
                  Objednat svoz →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 border-t border-gray-50">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">Jak na to</h2>
            <p className="text-muted text-base">Jednoduché kroky k zahájení třídění</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-primary py-14">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Ozvěte se nám</h2>
            <p className="text-white/80 text-base">Jednoduché kroky k zahájení třídění</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {contactCards.map((c) => (
              <div key={c.title} className="bg-white/10 rounded-2xl p-6 flex items-start gap-4">
                <div className="text-white mt-0.5 flex-shrink-0">{c.icon}</div>
                <div>
                  <div className="text-white font-semibold mb-1">{c.title}</div>
                  <div className="text-white text-sm font-medium">{c.primary}</div>
                  <div className="text-white/70 text-xs mt-0.5">{c.secondary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
