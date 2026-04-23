import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Telefon',
    lines: ['+420 734 464 325', 'Po-Pá 8:00 - 18:00'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'E-mail',
    lines: ['info@greenheaven.cz', 'Odpovíme do 24 hodin'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Adresa',
    lines: ['Green Heaven s.r.o.', 'Praha, Česká republika'],
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Provozní doba',
    lines: ['Pondělí - Pátek: 8:00 - 18:00', 'Sobota: 9:00 - 14:00', 'Neděle: Zavřeno'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-dark mb-3">Kontaktujte nás</h1>
          <p className="text-muted text-base">Spojte se s námi a začněte se službami nakládání s odpady</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-14">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-dark mb-2">Napište nám</h2>
              <p className="text-muted text-sm mb-6">
                Vyplňte formulář níže a my se vám ozveme co nejdříve.
              </p>
              {sent ? (
                <div className="bg-green-light border border-green-primary/20 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-bold text-dark text-lg mb-2">Zpráva odeslána!</h3>
                  <p className="text-muted text-sm">Ozveme se vám co nejdříve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Celé jméno *</label>
                      <input
                        name="name"
                        required
                        placeholder="Jan Novák"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark placeholder-subtle focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Název firmy</label>
                      <input
                        name="company"
                        placeholder="Vaše firma"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark placeholder-subtle focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jan@priklad.cz"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark placeholder-subtle focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Telefon *</label>
                      <input
                        name="phone"
                        required
                        placeholder="+420 123 456 789"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark placeholder-subtle focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">
                      Služba, o kterou máte zájem *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary bg-white"
                    >
                      <option value="">Vyberte službu...</option>
                      <option>Výkup použitých olejů</option>
                      <option>Likvidace gastro odpadu</option>
                      <option>Ekologické zpracování</option>
                      <option>Nádoby na odpad</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1.5">Zpráva</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Řekněte nám více o vašich potřebách..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-dark placeholder-subtle focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-primary text-white font-semibold py-3 rounded-lg hover:bg-green-dark transition-colors"
                  >
                    Odeslat zprávu
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:w-80 xl:w-96 flex-shrink-0">
              <h2 className="text-2xl font-bold text-dark mb-2">Kontaktní informace</h2>
              <p className="text-muted text-sm mb-6">
                Kontaktujte nás přímo nebo navštivte naši kancelář. Jsme tu pro vás!
              </p>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.title} className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100">
                    <div className="text-green-primary flex-shrink-0 mt-0.5">{c.icon}</div>
                    <div>
                      <div className="font-semibold text-dark text-sm mb-1">{c.title}</div>
                      {c.lines.map((l, i) => (
                        <div key={i} className={`text-sm ${i === 0 ? 'text-dark' : 'text-muted'}`}>
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-green-light rounded-2xl">
                <p className="font-semibold text-dark text-sm mb-1">Máte otázky?</p>
                <p className="text-muted text-sm mb-2">
                  Podívejte se na naše často kladené dotazy pro rychlé odpovědi.
                </p>
                <a href="#" className="text-green-primary text-sm font-semibold hover:underline">
                  Zobrazit FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-50 py-0">
        <div className="max-w-content mx-auto px-6 pb-14">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-muted">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Zde by se zobrazila mapa s umístěním</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
