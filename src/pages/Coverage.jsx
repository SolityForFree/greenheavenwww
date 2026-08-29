import SeoHead from '../components/SeoHead'
import { czOutlinePath, mapViewBox, towns } from '../data/townsMap'

const HQ_TOWN = 'Val'

export default function Coverage() {
  const townNames = towns.map((t) => t.name)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Green Heaven s.r.o.',
    url: 'https://www.greenheaven.cz',
    areaServed: townNames.map((name) => ({ '@type': 'City', name })),
  }

  return (
    <>
      <SeoHead
        title="Oblast působení"
        description="Green Heaven zajišťuje svoz gastroodpadu, použitých potravinářských olejů a pomáhá provozům s biologickým čištěním odpadních vod ve více než 200 městech a obcích především v jižních, jihozápadních a jihovýchodních Čechách a na Vysočině."
        path="/kde-pusobime"
        jsonLd={jsonLd}
      />

      {/* Header */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-dark mb-3">Oblast působení</h1>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Zajišťujeme svoz gastroodpadu, použitých potravinářských olejů a pomáháme provozům s biologickým
            čištěním odpadních vod především v jižních, jihozápadních a jihovýchodních Čechách a na Vysočině.
            Podívejte se, zda svážíme také ve vaší obci.
          </p>
        </div>
      </section>

      {/* Map + town list */}
      <section className="bg-white py-14">
        <div className="max-w-content mx-auto px-6">
          <svg
            viewBox={mapViewBox}
            role="img"
            aria-label="Mapa měst a obcí, kde Green Heaven působí"
            className="w-full max-w-2xl mx-auto h-auto"
          >
            <path d={czOutlinePath} className="fill-green-light stroke-green-primary" strokeWidth="1.5" />
            {towns.map((t) => (
              <circle
                key={t.name}
                cx={t.x}
                cy={t.y}
                r={t.name === HQ_TOWN ? 6 : 3}
                className={
                  t.name === HQ_TOWN
                    ? 'fill-orange-cta stroke-white'
                    : 'fill-green-primary hover:fill-green-dark transition-colors'
                }
                strokeWidth={t.name === HQ_TOWN ? 1.5 : 0}
              >
                <title>{t.name === HQ_TOWN ? `${t.name} – sídlo Green Heaven` : t.name}</title>
              </circle>
            ))}
          </svg>

          <h2 className="text-2xl font-bold text-dark mt-14 mb-6 text-center">
            Města a obce, kde působíme
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {townNames.map((name) => (
              <span
                key={name}
                className="text-sm text-body border border-gray-200 rounded-full px-3 py-1"
              >
                {name}
              </span>
            ))}
          </div>

          <p className="text-muted text-sm text-center mt-8 max-w-xl mx-auto">
            Vaše obec v seznamu chybí? Ozvěte se nám – svoz běžně zajišťujeme i v okolních lokalitách.
          </p>
        </div>
      </section>
    </>
  )
}
