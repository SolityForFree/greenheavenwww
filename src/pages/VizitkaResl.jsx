import { Link } from 'react-router-dom'
import SeoHead from '../components/SeoHead'
import vizitkaImg from '../assets/images/vizitka-resl.png'

export default function VizitkaResl() {
  return (
    <>
      <SeoHead
        title="Miroslav Rešl — vizitka"
        description="Digitální vizitka Miroslav Rešl, obchodní zástupce Green Heaven."
        path="/vizitka-resl"
      />
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <img
            src={vizitkaImg}
            alt="Vizitka Miroslav Rešl, obchodní zástupce Green Heaven"
            className="w-full rounded-2xl shadow-md mb-8"
          />
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-green-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-dark transition-colors"
          >
            www.greenheaven.cz
          </Link>
        </div>
      </section>
    </>
  )
}
