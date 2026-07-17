import { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import SeoHead from '../components/SeoHead'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function PostImage({ src, alt }) {
  const [isVertical, setIsVertical] = useState(false)

  return (
    <div className="w-full h-48 flex items-center justify-center bg-gray-50">
      <img
        src={src}
        alt={alt}
        onLoad={(e) => setIsVertical(e.target.naturalHeight > e.target.naturalWidth)}
        className={
          isVertical
            ? 'h-full w-auto max-w-[55%] object-contain'
            : 'w-full h-full object-cover'
        }
      />
    </div>
  )
}

export default function Blog() {
  return (
    <section className="bg-white py-16">
      <SeoHead
        title="Blog"
        description="Tipy, novinky a odborné články z oblasti likvidace gastroodpadů, zpracování použitých olejů a biologického čištění odpadních vod od Green Heaven."
        path="/blog"
      />
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-3">Blog</h1>
          <p className="text-muted text-base">Novinky a tipy z oblasti ekologického zpracování odpadu</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted">Na novinky se můžete těšit.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {post.image && <PostImage src={post.image} alt={post.imageAlt} />}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-muted mb-2">{formatDate(post.date)}</p>
                  <h2 className="text-base font-bold text-dark leading-snug mb-2 group-hover:text-green-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-body leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-medium text-green-primary">
                    Číst dál →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
