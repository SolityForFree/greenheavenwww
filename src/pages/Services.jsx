import { Link } from 'react-router-dom'
import oilImg from '../assets/images/service-oil.png'
import gastroImg from '../assets/images/service-gastro.png'

const oilFeatures = [
  // { title: 'Bezplatné nádoby', desc: 'Poskytujeme vhodné skladovací nádoby bez poplatků' },
  { title: 'Pravidelný svoz', desc: 'Plánované svozy na základě vašich potřeb' },
  { title: 'Férová kompenzace', desc: 'Vykupujeme váš použitý olej za konkurenční ceny' },
  { title: 'Dokumentace', desc: 'Kompletní dokumentace a certifikáty souladu' },
]

const oilTypes = [
  { title: 'Fritovací oleje', desc: 'Použitý olej z fritéz a smažení' },
  { title: 'Rostlinné oleje', desc: 'Všechny typy rostlinných jedlých olejů' },
  { title: 'Živočišné tuky', desc: 'Ztavené tuky z vaření' },
]

const gastroFeatures = [
  { title: 'Kompletní vybavení', desc: 'Nádoby, pytle a veškeré potřebné sběrné materiály' },
  { title: 'Hygienické služby', desc: 'Čisté a bez zápachu nakládání s odpady' },
  { title: 'Flexibilní harmonogram', desc: 'Frekvence svozů přizpůsobená vašemu objemu' },
  { title: 'Ekologické zpracování', desc: 'Přeměněn na bioplyn a obnovitelnou energii' },
]

const gastroTypes = [
  { title: 'Zbytky jídla', desc: 'Zbylé jídlo z přípravy a talířů' },
  { title: 'Ovoce a zelenina', desc: 'Slupky, jádřince a prošlé produkty' },
  { title: 'Prošlé produkty', desc: 'Potraviny a ingredience po datu použitelnosti' },
  { title: 'Kávová sedlina', desc: 'Použitá kávová sedlina a čajové sáčky' },
]

const benefits = [
  { title: 'Ochrana životního prostředí', desc: 'Správná likvidace zabraňuje znečištění a přeměňuje odpad na čistou energii' },
  { title: 'Dodržování předpisů', desc: 'Splňte všechny zákonné požadavky pro nakládání s odpady a jejich likvidaci' },
  { title: 'Nákladově efektivní', desc: 'Konkurenční ceny bez skrytých poplatků nebo překvapivých nákladů' },
  { title: 'Pohodlné služby', desc: 'Pravidelné svozy znamenají, že se nemusíte obávat hromadění odpadu' },
  { title: 'Profesionální podpora', desc: 'Přátelský tým připravený pomoci s jakýmikoli dotazy nebo speciálními požadavky' },
  { title: 'Certifikát udržitelnosti', desc: 'Dokumentace dokazující váš závazek k environmentální odpovědnosti' },
]

export default function Services() {
  return (
    <>
      {/* Oil collection */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">
                Výkup použitých olejů
              </span>
              <h1 className="text-3xl font-bold text-dark mt-2 mb-4">
                Sběr a výkup použitých jedlých olejů
              </h1>
              <p className="text-body text-base leading-relaxed mb-6">
                Poskytujeme komplexní služby pro sběr a výkup použitých jedlých olejů z restaurací,
                hotelů, stravovacích zařízení a provozoven veřejného stravování.
              </p>
              <ul className="space-y-3 mb-8">
                {oilFeatures.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-light flex items-center justify-center">
                      <svg width="12" height="12" fill="none" stroke="#09772C" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-dark text-sm">{f.title}</span>
                      <span className="text-muted text-sm"> — {f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="inline-block bg-orange-cta text-orange-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Objednat svoz oleje
              </Link>
            </div>
            <div className="flex-1">
              <img src={oilImg} alt="Výkup olejů" className="w-full rounded-2xl object-cover max-h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* What oils */}
      {/* <section className="bg-green-light py-14">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Jaké oleje přijímáme?</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {oilTypes.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-dark mb-2">{t.title}</h3>
                <p className="text-muted text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gastro waste */}
      <section className="bg-green-primary py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img src={gastroImg} alt="Gastroodpad" className="w-full rounded-2xl object-cover max-h-96" />
            </div>
            <div className="flex-1">
              <span className="text-lime text-sm font-semibold uppercase tracking-wider">
                Nakládání s gastroodpadem
              </span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                Ekologická likvidace gastroodpadu
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Profesionální sběr a zpracování gastroodpadu z kuchyní, restaurací, hotelů, škol a
                stravovacích zařízení. Veškerý odpad je zpracován v naší bioplynové stanici a přeměněn
                na obnovitelnou energii.
              </p>
              <ul className="space-y-3 mb-8">
                {gastroFeatures.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-white text-sm">{f.title}</span>
                      <span className="text-white/70 text-sm"> — {f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="inline-block bg-lime text-dark font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Objednat svoz gastroodpadu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What gastro */}
      {/* <section className="bg-white py-14">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Jaký gastroodpad přijímáme?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gastroTypes.map((t) => (
              <div key={t.title} className="border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-dark mb-2">{t.title}</h3>
                <p className="text-muted text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="bg-green-light py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">Výhody našich služeb</h2>
            <p className="text-muted text-base">Proč si podniky vybírají Green Heaven</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-green-light flex items-center justify-center mb-3">
                  <svg width="16" height="16" fill="none" stroke="#09772C" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">{b.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-primary py-14">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ozvěte se nám</h2>
          <p className="text-white/80 mb-6">Jednoduché kroky k zahájení třídění</p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+420 603 217 594</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">info@greenheaven.cz</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
