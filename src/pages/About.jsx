import logo from '../assets/images/logo.svg'

const values = [
  {
    icon: '🌱',
    title: 'Poslání',
    desc: 'Zavázáni ochraně životního prostředí prostřednictvím udržitelných praktik',
  },
  {
    icon: '💚',
    title: 'Vášeň',
    desc: 'Hluboce nám záleží na planetě a naší komunitě',
  },
  {
    icon: '🤝',
    title: 'Spolehlivost',
    desc: 'Konzistentní služby, na které se můžete vždy spolehnout',
  },
  {
    icon: '⭐',
    title: 'Orientace na zákazníka',
    desc: 'Vaše spokojenost a úspěch jsou našimi hlavními prioritami',
  },
]

const features = [
  {
    title: 'Profesionální služby',
    desc: 'Náš zkušený tým zajišťuje včasné svozy a správné zacházení se všemi materiály',
  },
  {
    title: 'Ekologické zpracování',
    desc: 'Nejmodernější bioplynová stanice přeměňuje odpad na čistou energii',
  },
  {
    title: 'Konkurenční ceny',
    desc: 'Férové ceny s transparentní fakturací a žádnými skrytými poplatky',
  },
  {
    title: 'Flexibilní plánování',
    desc: 'Harmonogramy svozů přizpůsobené potřebám a provozu vašeho podniku',
  },
  {
    title: 'Komplexní řešení',
    desc: 'Poskytujeme nádoby, pytle a veškeré potřebné vybavení',
  },
  {
    title: 'Certifikované a v souladu s předpisy',
    desc: 'Plně licencováni a v souladu se všemi ekologickými předpisy',
  },
]

export default function About() {
  return (
    <>
      {/* Story section */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 flex items-center justify-center bg-green-light rounded-2xl p-16">
              <img
                src={logo}
                alt="Green Heaven"
                className="w-full max-w-xs"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-dark mb-5">Náš příběh</h1>
              <p className="text-body text-base leading-relaxed mb-4">
                Green Heaven byla založena s jednoduchou, ale silnou vizí: učinit nakládání s odpady
                dostupným, efektivním a šetrným k životnímu prostředí pro podniky v celé České republice.
              </p>
              <p className="text-body text-base leading-relaxed mb-4">
                Specializujeme se na sběr a ekologické zpracování použitých jedlých olejů a gastroodpadu
                z restaurací, stravovacích zařízení a provozoven veřejného stravování. Naše pokročilá
                bioplynová stanice přeměňuje odpad na obnovitelnou energii a uzavírá tak cyklus
                udržitelnosti.
              </p>
              <p className="text-body text-base leading-relaxed">
                Dnes obsluhujeme stovky klientů, kteří nám důvěřují v zodpovědném nakládání s jejich
                odpady, s vědomím, že každý litr oleje a každý kilogram gastroodpadu je přeměněn na
                čistou energii, která zásobuje komunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {/* <section className="bg-green-light py-14">
        <div className="max-w-content mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-dark mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why choose us */}
      {/* <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">Proč si vybrat Green Heaven?</h2>
            <p className="text-muted text-base">Nakládání s odpady děláme jednoduše a efektivně</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-green-light flex items-center justify-center mb-3">
                  <svg width="16" height="16" fill="none" stroke="#09772C" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}
