import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Green Heaven s.r.o.',
  url: 'https://www.greenheaven.cz',
  telephone: '+420720871930',
  email: 'info@greenheaven.cz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hamr 34',
    addressLocality: 'Val',
    postalCode: '391 81',
    addressCountry: 'CZ',
  },
  description: 'Likvidace gastroodpadů, výkup použitých olejů a biologické čištění odpadních vod pro potravinářské provozy, jídelny a obce.',
  areaServed: [
    'Jihočeský kraj',
    'Plzeňský kraj',
    'Kraj Vysočina',
    'Jihomoravský kraj',
  ],
}
import heroBg from '../assets/images/hero-food.png'
import heroLoadingImg from '../assets/images/hero-loading.jpg'
import oilImg from '../assets/images/service-oil.png'
import gastroImg from '../assets/images/service-gastro.png'
import cleanOil from '../assets/images/cleaning.jpg'
import frontCarImg from '../assets/images/front_car_barrels_kitchen.jpg'

const serviceCards = [
  {
    // img: gastroImg,
    imgAlt: 'Svoz gastroodpadů',
    emoji: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    tag: 'Gastroodpady',
    title: 'Gastroodpady & použité oleje',
    desc: 'Zajišťujeme likvidaci gastroodpadu a použitých olejů. Svozové plány, pronájem nádob, legislativní dokumentace.',
    cta: 'Zjistit více',
  },
  {
    // img: cleanOil,
    imgAlt: 'Biologické čištění odpadních vod',
    emoji: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 5 10 5 14a7 7 0 0014 0c0-4-7-12-7-12z" />
      </svg>
    ),
    tag: 'Voda',
    title: 'Biologické čištění odpadních vod',
    desc: 'BČOV pro školy, školní jídelny, obce, průmysl, ale i rodinné domy či chalupy. Biologické čištění odpadních vod pomocí enzymů a servis lapačů tuků.',
    cta: 'Zjistit více',
  },
]

export default function Home() {
  return (
    <>
      <SeoHead
        description="Likvidace gastroodpadů, výkup použitých olejů a biologické čištění odpadních vod v jižních, jihozápadních a jihovýchodních Čechách. Pomáháme restauracím, jídelnám i obcím plnit emisní limity."
        path="/"
        jsonLd={localBusinessSchema}
      />
      {/* Hero */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0 lg:left-[30%]">
          <img
            src={heroLoadingImg}
            alt="Pracovník Green Heaven nakládá sudy s bio a gastro odpadem do vozu"
            className="w-full h-full object-cover object-[42%_center] lg:object-[center_30%]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 via-45% to-transparent to-75% lg:bg-gradient-to-r lg:from-dark lg:via-dark/40 lg:via-20% lg:to-transparent lg:to-40%" />
        </div>
        <div className="relative max-w-content mx-auto px-6 min-h-[40rem] md:min-h-[46rem] flex items-end pt-72 pb-12 lg:min-h-[36rem] lg:items-center lg:py-24">
          <div className="max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Likvidace bio a gastro odpadů a komplexní péče o odpadní vody
            </h1>
            <p className="text-white/90 text-base leading-relaxed mb-8">
              Zajišťujeme svoz a likvidaci gastroodpadů a použitých olejů pro restaurace, jídelny i potravinářské provozy. Postaráme se také o čištění odpadních vod a servis lapačů tuků.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/sluzby"
                className="bg-orange-cta text-orange-text font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Naše služby
              </Link>
              <Link
                to="/kontakt"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-dark transition-colors"
              >
                Nezávazná konzultace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">Služby, které vám usnadní třídění</h2>
            <p className="text-muted text-base">Protože víme, že vám na životním prostředí záleží stejně jako nám</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {serviceCards.map((card) => (
              <div key={card.tag} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                {/* <img src={card.img} alt={card.imgAlt} className="w-full h-52 object-cover" /> */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-primary bg-green-50 px-3 py-1 rounded-full mb-4 w-fit">
                    <span>{card.emoji}</span>
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-dark mb-3">{card.title}</h3>
                  <p className="text-body text-sm leading-relaxed mb-5 flex-1">{card.desc}</p>
                  <Link
                    to="/sluzby"
                    className="inline-flex items-center gap-1 bg-orange-cta text-orange-text text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity w-fit"
                  >
                    {card.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <img
            src={frontCarImg}
            alt="Vozidla a vybavení Green Heaven pro svoz gastroodpadů"
            className="w-full rounded-2xl object-cover max-h-72 mb-10"
          />
        </div>
      </section>

      {/* Coverage area */}
      <section className="bg-green-light py-14">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-dark mb-3">Oblast působení</h2>
          <p className="text-body text-base max-w-xl mx-auto mb-10">
            Poskytujeme služby v jižních, jihozápadních a jihovýchodních Čechách.
            Neváhejte nás kontaktovat — rádi probereme možnosti i pro vaši lokalitu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                region: 'Jižní Čechy',
                cities: 'České Budějovice, Tábor, Písek, Strakonice, Třeboň, Jindřichův Hradec, Prachatice, Český Krumlov',
              },
              {
                region: 'Jihozápadní Čechy',
                cities: 'Plzeň, Klatovy, Domažlice, Sušice',
              },
              {
                region: 'Jihovýchodní Čechy',
                cities: 'Jihlava, Třebíč, Pelhřimov',
              },
            ].map(({ region, cities }) => (
              <div key={region} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-dark mb-2">{region}</h3>
                <p className="text-sm text-muted leading-relaxed">{cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
