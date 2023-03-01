import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Vitepress with Decap CMS',
  lastUpdated: true,
  themeConfig: {
    repo: 'leightonhughes/VitePress-with-Decap-CMS',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ]
  }
})