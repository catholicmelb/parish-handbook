import { defineConfig } from 'vitepress'
import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export default defineConfig({
  base: '/',
  title: 'Parish Handbook Demo',
  lastUpdated: true,
  // locales: {
  //   root: {
  //     label: 'English',
  //     lang: 'en'
  //   },
  //   vi: {
  //     label: 'Vietnamese',
  //     lang: 'vi', // optional, will be added  as `lang` attribute on `html` tag
  //     link: '/vi', // default /fr/ -- shows on navbar translations menu, can be external
  //     themeConfig: {
  //       nav: [
  //         { text: 'Trang chủ', link: '/vi' },
  //         { text: 'Nhật ký thay đổi', link: '/vi/changelog' }
  //       ],
  //       sidebar: [
  //         { text: 'Lời tựa', link: '/vi/foreword/index.html' },
  //         {
  //           text: 'nội dung',
  //           collapsed: false,
  //           collapsible: true,
  //           // Retrieves all markdown files, 
  //           // but does not retrieve any other files in this folder.
  //           // Ignores any files with '_partial' in their name.
  //           items: SidebarBuilder.get.filesAndOrder('./docs/vi/contents', ['_partial'])
  //         },
  //       ]
  //     }
  //   },
  //   fr: {
  //     label: 'French',
  //     lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
  //     link: '/fr', // default /fr/ -- shows on navbar translations menu, can be external
  //     themeConfig: {
  //       nav: [
  //         { text: 'Maison', link: '/fr' },
  //         { text: 'Journal des modifications', link: '/fr/changelog' }
  //       ],
  //       sidebar: [
  //         { text: 'Avant-propos', link: '/fr/foreword/index.html' },
  //         {
  //           text: 'Contenu',
  //           collapsed: false,
  //           collapsible: true,
  //           // Retrieves all markdown files, 
  //           // but does not retrieve any other files in this folder.
  //           // Ignores any files with '_partial' in their name.
  //           items: SidebarBuilder.get.filesAndOrder('./docs/fr/contents', ['_partial'])
  //         },
  //       ]
  //     }
  //   }
  // },
  themeConfig: {
    repo: 'leightonhughes/VitePress-with-Decap-CMS',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    // algolia: {
    //   appId: '...',
    //   apiKey: '...',
    //   indexName: '...'
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],
    head: [
      ['script', {src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}],
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
        items: SidebarBuilder.get.filesAndOrder('./docs/contents', ['not-ready'])
      },
      {
        text: 'Appendix',
        collapsed: true,
        collapsible: true,
        items: SidebarBuilder.get.filesAndOrder('./docs/appendix', ['not-ready'])
      },
    ]
  }
})