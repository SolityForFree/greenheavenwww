import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Green Heaven'
const BASE_URL = 'https://www.greenheaven.cz'
const DEFAULT_IMAGE = `${BASE_URL}/favicon_green.png`

export default function SeoHead({ title, description, path = '', jsonLd = null }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Likvidace gastroodpadů a čištění odpadních vod`
  const canonical = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="cs_CZ" />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
