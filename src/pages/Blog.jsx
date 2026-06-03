import SeoHead from '../components/SeoHead'

export default function Blog() {
  return (
    <section className="bg-white py-20">
      <SeoHead
        title="Blog"
        description="Tipy, novinky a odborné články z oblasti likvidace gastroodpadů, zpracování použitých olejů a biologického čištění odpadních vod od Green Heaven."
        path="/blog"
      />
      <div className="max-w-content mx-auto px-6 text-center">
        <div className="text-5xl mb-5">📰</div>
        <h1 className="text-4xl font-bold text-dark mb-4">Blog</h1>
        <p className="text-muted text-lg">
          Na novinky se můžete těšit.
        </p>
      </div>
    </section>
  )
}
