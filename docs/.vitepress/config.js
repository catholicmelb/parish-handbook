import { defineConfig } from 'vitepress'
import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export default defineConfig({
  base: '/',
  title: 'Parish Handbook Demo',
  lastUpdated: true,
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
      {
        // text: 'Contents',
        // collapsed: false,
        // collapsible: true,
        // Retrieves all markdown files, 
        // but does not retrieve any other files in this folder.
        // Ignores any files with '_partial' in their name.
        items: SidebarBuilder.get.filesAndOrder('./docs/forward', ['_partial'])
      },
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