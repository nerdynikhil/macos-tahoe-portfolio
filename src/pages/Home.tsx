import SEO from '../components/SEO'
import Desktop from '../components/macos/Desktop'
import { config } from '../config'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: config.name,
  alternateName: config.username,
  url: config.siteUrl,
  image: `${config.siteUrl}${config.profileImage}`,
  sameAs: Object.values(config.social),
  jobTitle: config.title,
  description: config.bio,
}

export default function Home() {
  return (
    <>
      <SEO
        title={config.siteTitle}
        description={config.siteDescription}
        url={config.siteUrl}
        jsonLd={personJsonLd}
      />
      <Desktop />
    </>
  )
}
