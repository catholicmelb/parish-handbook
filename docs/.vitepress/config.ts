import { defineConfig } from 'vitepress';
import { SidebarBuilder } from '@stuyk/vitepress-sidebar-builder';

export default defineConfig({
  base: '/',
  title: 'Parish Handbook',
  lastUpdated: true,
  head: [
    [
      'script',
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7ND32MWZ66',
      },
    ],
    [
      'script',
      {
        defer: '',
        'data-domain': 'handbook.melbournecatholic.org',
        src: 'https://analytics.leightonhughes.co.nz/js/script.js',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-7ND32MWZ66');",
    ],
  ],
  themeConfig: {
    repo: 'catholicmelb/parish-handbook',
    docsDir: 'docs',
    base: "/contents/",
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/CatholicArchdioceseofMelbourne' },
      { icon: 'instagram', link: 'https://www.instagram.com/melbournecatholic/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@archmelb/streams' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/catholic-archdiocese-of-melbourne/' },
    ],
    footer: {
      message: '© Catholic Archdiocese of Melbourne 2023',
      copyright: 'Development by <a href="https://leightonhughes.co" target="_blank">Leighton Hughes</a>'
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/introduction/getting-started' }
    ],
    outline: {
      label: "In this Chapter",
      level: [2, 3]
    },
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: SidebarBuilder.get.filesAndOrder('./docs/introduction')
      },
      {
        text: 'Chapters',
        collapsed: false,
        items: SidebarBuilder.get.filesAndOrder('./docs/contents')
      },
      {
        items: SidebarBuilder.get.filesAndOrder('./docs/pages', ['handbook-formatting'])
      },
    ]
  },
})
