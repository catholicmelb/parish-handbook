import { defineConfig } from 'vitepress'
import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export default defineConfig({
  base: '/',
  title: 'Parish Handbook Demo',
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr/guide' // default /fr/ -- shows on navbar translations menu, can be external
    }
  },
  themeConfig: {
    repo: 'leightonhughes/VitePress-with-Decap-CMS',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: [
      { text: 'Foreword', link: '/foreword/index.html' },
      {
        text: 'Contents',
        collapsed: false,
        collapsible: true,
        // Retrieves all markdown files, 
        // but does not retrieve any other files in this folder.
        // Ignores any files with '_partial' in their name.
        items: SidebarBuilder.get.filesAndOrder('./docs/contents', ['_partial'])
      },
      {
        text: 'Appendix',
        collapsed: true,
        collapsible: true,
        items: SidebarBuilder.get.filesAndOrder('./docs/appendix', ['_partial'])
      },
    ]
  }
})