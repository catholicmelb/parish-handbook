import { defineConfig } from 'vitepress'
import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

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
        text: 'Contents',
        collapsible: true,
        // Retrieves all markdown files, 
        // but does not retrieve any other files in this folder.
        // Ignores any files with '_partial' in their name.
        items: SidebarBuilder.get.filesAndOrder('./docs/contents', ['_partial'])
      },
    ]
  }
})