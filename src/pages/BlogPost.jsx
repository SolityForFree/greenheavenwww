import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
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
  const [post, setPost] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(`/posts.php?slug=${encodeURIComponent(slug)}`)
      .then((res) => {
        if (res.status === 404) return Promise.reject(new Error('not-found'))
        if (!res.ok) return Promise.reject(new Error('request-failed'))
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setPost(data)
      })
      .catch((err) => {
        if (cancelled) return
        if (err.message === 'not-found') setNotFound(true)
        else setError(true)
      })
    return () => { cancelled = true }
  }, [slug])

  if (notFound) return <Navigate to="/blog" replace />

  if (error) {
    return (
      <article className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-center text-muted">Příspěvek se nepodařilo načíst. Zkuste to prosím později.</p>
        </div>
      </article>
    )
  }

  if (post === null) {
    return (
      <article className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-center text-muted">Načítání…</p>
        </div>
      </article>
    )
  }

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

          <div className="rich-content" dangerouslySetInnerHTML={{ __html: post.content }} />

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
