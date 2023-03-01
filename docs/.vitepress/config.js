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
    sidebar: {
      '/post/': sidebarGuide(),
    }
  }
})