import { Link } from 'react-router-dom'
import heroBg from '../assets/images/hero-food.png'
import oilImg from '../assets/images/service-oil.png'
import gastroImg from '../assets/images/service-gastro.png'
import cleanOil from '../assets/images/cleaning.jpg'

const serviceCards = [
  {
    // img: cleanOil,
    imgAlt: 'Biologické čištění odpadních vod',
    emoji: '💧',
    tag: 'Voda',
    title: 'Biologické čištění odpadních vod',
    desc: 'BČOV pro školy, školní jídelny, obce, průmysl, ale i rodinné domy či chalupy. Biologické čištění odpadních vod pomocí enzymů a servis lapačů tuků.',
    cta: 'Zjistit více',
  },
  {
    // img: gastroImg,
    imgAlt: 'Svoz gastroodpadů',
    emoji: '♻️',
    tag: 'Gastroodpady',
    title: 'Gastroodpady & použité oleje',
    desc: 'Zajišťujeme likvidaci gastroodpadu a použitých olejů. Svozové plány, pronájem nádob, legislativní dokumentace.',
    cta: 'Zjistit více',
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
              Komplexní péče o odpadní vody a likvidaci bio a gastro odpadů
            </h1>
            <p className="text-body text-base leading-relaxed mb-8">
              Pomáháme potravinářským provozům, jídelnám i městským ČOV plnit emisní limity a legislativní standardy pomocí moderních technologií a mikrobiologických kultur.
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
                className="border border-green-primary text-green-primary font-semibold px-6 py-3 rounded-lg hover:bg-green-primary hover:text-white transition-colors"
              >
                Nezávazná konzultace
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

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">Služby, které vám usnadní třídění</h2>
            <p className="text-muted text-base">Protože víme, že vám na životním prostředí záleží stejně jako nám</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </section>

    </>
  )
}
