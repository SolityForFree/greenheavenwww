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

          {post.image && (
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full rounded-2xl object-cover mb-10"
            />
          )}

          <div className="space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-body text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
