import { Link, useParams, Navigate } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'
import SeoHead from '../components/SeoHead'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <SeoHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <article className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-green-primary font-medium hover:underline mb-8"
          >
            ← Zpět na blog
          </Link>

          <p className="text-sm text-muted mb-3">{formatDate(post.date)}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-8">
            {post.title}
          </h1>

          <div className="space-y-5">
            {post.content.map((block, i) => {
              if (typeof block === 'string') {
                return (
                  <p key={i} className="text-body text-base leading-relaxed">
                    {block}
                  </p>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-body text-base">
                        <span className="text-green-primary font-bold mt-0.5">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="border-l-4 border-green-primary pl-5 py-1 my-2">
                    <p className="text-body text-base leading-relaxed italic">{block.text}</p>
                  </blockquote>
                )
              }
              if (block.type === 'cta') {
                return (
                  <div key={i} className="pt-2">
                    <Link
                      to={block.href}
                      className="inline-flex items-center gap-2 bg-green-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-dark transition-colors"
                    >
                      {block.label}
                    </Link>
                  </div>
                )
              }
              return null
            })}
          </div>

          {post.image && (
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full rounded-2xl object-cover mt-10"
            />
          )}
        </div>
      </article>
    </>
  )
}
