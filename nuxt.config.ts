// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5000
  },
  ssr: true,
  app: {
    head: {
      title: 'Henry Okonkwo — Senior Software Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Henry Okonkwo — Senior Software Engineer based in Berlin. Building WalletGate, Docgate, and Sprevia. 7 years shipping full-stack, native, and AI-powered products.' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'author', content: 'Henry Okonkwo' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Henry Okonkwo — Senior Software Engineer' },
        { property: 'og:description', content: 'Senior Software Engineer based in Berlin. Building WalletGate, Docgate, and Sprevia.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://chuka.io' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Henry Okonkwo' },
        { property: 'og:image', content: 'https://chuka.io/hero.gif' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Henry Okonkwo — Senior Software Engineer' },
        { name: 'twitter:description', content: 'Senior Software Engineer based in Berlin. Building WalletGate, Docgate, and Sprevia.' },
        { name: 'twitter:image', content: 'https://chuka.io/hero.gif' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Henry Okonkwo',
            jobTitle: 'Senior Software Engineer',
            url: 'https://chuka.io',
            sameAs: [
              'https://github.com/chokonaira',
              'https://linkedin.com/in/henry-okonkwo',
              'https://chuka.blog'
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Berlin',
              addressCountry: 'DE'
            },
            knowsAbout: ['Full Stack Development', 'Native Apps', 'AI/ML', 'TypeScript', 'Vue.js', 'React', 'Node.js']
          })
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://chuka.io' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
