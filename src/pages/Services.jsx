import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import oilImg from '../assets/images/service-oil.png'
import gastroImg from '../assets/images/gastroodpad_1_small.jpg'

const benefits = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Průchodnost potrubí',
    desc: 'Konec ucpávání tuky, škroby a cukry.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Bezstarostný servis',
    desc: 'Zdarma zapůjčíme a nastavíme automatické dávkovací zařízení (peristaltické čerpadlo).',
  },
  // {
  //   icon: (
  //     <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  //     </svg>
  //   ),
  //   title: 'Legislativní klid',
  //   desc: 'Garance dodržení emisních limitů dle kanalizačního řádu a norem ČR/EU.',
  // },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Intenzifikace ČOV',
    desc: 'Zlepšení parametrů městských a domovních čističek (nitrifikace).',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Analýzy a vzorkování',
    desc: 'Odběry v akreditovaných laboratořích pro kontrolu emisních limitů.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Biologické čištění odpadních vod',
    desc: 'Veškerý odpad zpracováváme v souladu s platnou legislativou ČR a EU.',
  },
]

const gastroItems = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), title: 'Svozové plány', desc: 'Harmonogram přizpůsobený vašemu provozu.'
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ), title: 'Pronájem nádob', desc: 'Vhodné nádoby zdarma k zapůjčení.'
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ), title: 'Legislativní dokumentace', desc: 'Kompletní doklady o likvidaci pro audit.'
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ), title: 'Ekologická likvidace', desc: 'Zpracování gastroodpadu i použitých olejů.'
  },
]

export default function Services() {
  return (
    <>
      <SeoHead
        title="Služby"
        description="Svoz gastroodpadů, výkup použitých olejů, BČOV a servis lapačů tuků v jižních, jihozápadních a jihovýchodních Čechách. Řešení pro restaurace, jídelny, školy i průmyslové provozy."
        path="/sluzby"
      />
      {/* Page header */}
      <section className="bg-green-light py-14">
        <div className="max-w-content mx-auto px-6 text-center">
          <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">Naše služby</span>
          <h1 className="text-4xl font-bold text-dark mt-2 mb-4">
            Komplexní péče o odpadní vody a gastro odpady
          </h1>
          <p className="text-body text-base max-w-2xl mx-auto leading-relaxed">
            Moderní technologie a mikrobiologické kultury pro potravinářské provozy, jídelny i městské ČOV.
          </p>
        </div>
      </section>

      {/* Gastro section */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">
                Gastroodpady & oleje
              </span>
              <h2 className="text-3xl font-bold text-dark mt-2 mb-4">
                Likvidace gastroodpadu a použitých olejů
              </h2>
              <p className="text-body text-base leading-relaxed mb-8">
                Zajišťujeme komplexní likvidaci gastroodpadu a použitých olejů z restaurací, jídelen,
                hotelů i průmyslových provozů — vše v souladu s platnou legislativou.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {gastroItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100">
                    <div className="text-green-primary flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-dark text-sm mb-0.5">{item.title}</div>
                      <div className="text-muted text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/kontakt"
                className="inline-block bg-orange-cta text-orange-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Objednat svoz
              </Link>
            </div>
            <div className="flex-1">
              <img src={gastroImg} alt="Gastroodpad a použité oleje" className="w-full rounded-2xl object-cover max-h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* BILIKUK section */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">
                Mikrobiologické čištění
              </span>
              <h2 className="text-3xl font-bold text-dark mt-2 mb-2">
                Bioenzymatický přípravek
              </h2>
              <p className="text-green-primary font-semibold text-sm mb-4">Inteligentní síla přírody</p>
              <p className="text-body text-base leading-relaxed mb-8">
                Naše živá bakteriální suspense je vyvinuta tak, aby přežila i v agresivním prostředí —
                čisticí prostředky, vysoké teploty nevadí. Přípravek cíleně rozkládá tuky, škroby
                a cukry přímo v potrubí a lapačích tuků.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3 p-4 rounded-xl bg-green-light">
                    <div className="text-green-primary flex-shrink-0 mt-0.5">{b.icon}</div>
                    <div>
                      <div className="font-semibold text-dark text-sm mb-0.5">{b.title}</div>
                      <div className="text-muted text-xs leading-relaxed">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/kontakt"
                className="inline-block bg-orange-cta text-orange-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Nezávazná konzultace
              </Link>
            </div>
            <div className="flex-1">
              <img src={oilImg} alt="Biologické čištění odpadních vod" className="w-full rounded-2xl object-cover max-h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Legislative section */}
      <section className="bg-green-primary py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <span className="text-lime text-sm font-semibold uppercase tracking-wider">
              Legislativa & analýzy
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">
              Legislativní klid a odborné analýzy
            </h2>

            <div className="space-y-5">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-white mb-1">Plnění nařízení vlády č. 401/2015 Sb.</div>
                    <div className="text-white/75 text-sm leading-relaxed">
                      Ukazatele a hodnoty přípustného znečištění povrchových vod a odpadních vod,
                      náležitosti povolení k vypouštění odpadních vod do vod povrchových a do kanalizací
                      a o citlivých oblastech.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-white mb-1">Intenzifikace ČOV</div>
                    <div className="text-white/75 text-sm leading-relaxed">
                      Zlepšení parametrů městských a domovních čističek — nitrifikace a optimalizace
                      biologických procesů.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="font-semibold text-white mb-1">Analýzy a vzorkování</div>
                    <div className="text-white/75 text-sm leading-relaxed">
                      Odběry vzorků v akreditovaných laboratořích pro průběžnou kontrolu emisních limitů.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-light py-14">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-3">Máte zájem o naše služby?</h2>
          <p className="text-muted text-base mb-6">Kontaktujte nás pro nezávaznou konzultaci.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/kontakt"
              className="bg-orange-cta text-orange-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Nezávazná konzultace
            </Link>
            <Link
              to="/kontakt"
              className="border border-green-primary text-green-primary font-semibold px-6 py-3 rounded-lg hover:bg-green-primary hover:text-white transition-colors"
            >
              +420 720 871 930
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
