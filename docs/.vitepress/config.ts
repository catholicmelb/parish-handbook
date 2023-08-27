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
    ]
  ],
  themeConfig: {
    repo: 'catholicmelb/parish-handbook',
    docsDir: 'docs',
    base: "/contents/",
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/CatholicArchdioceseofMelbourne' },
      { icon: 'instagram', link: 'https://www.instagram.com/melbournecatholic/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@archmelb/streams' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/catholic-archdiocese-of-melbourne/' },
    ],
    footer: {
      message: '© Melbourne Catholic 2023',
      copyright: 'Development by <a href="https://leightonhughes.co" target="_blank">Leighton Hughes</a>'
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' },
    ],
    outline: [2, 3],
    // sidebar: [
    //   {
    //     text: 'Guide',
    //     collapsed: false,
    //     items: [
    //       { text: 'Introduction', link: '/' },
    //       { text: 'Getting Started', link: '/' },
    //     ]
    //   }
    // ]
    // sidebar: generateSidebar({
    //   documentRootPath: 'docs',
    //   capitalizeFirst: true,
    //   // scanStartPath: null,
    //   // resolvePath: '/docs/contents/',
    //   rootGroupText: 'Contents',
    //   // rootGroupLink: 'https://github.com/jooy2',
    //   // rootGroupCollapsed: false,
    //   // useTitleFromFileHeading: true,
    //   useTitleFromFrontmatter: true,
    //   // hyphenToSpace: true,
    //   // underscoreToSpace: true,
    //   collapsed: false,
    //   // collapseDepth: 0,
    //   // sortMenusByName: true,
    //   // sortMenusOrderByDescending: false,
    //   // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
    //   excludeFiles: ['changelog.md'],
    //   // excludeFolders: ['vi', 'fr'],
    //   // includeDotFiles: false,
    //   // includeRootIndexFile: false,
    //   // includeFolderIndexFile: false,
    //   // includeEmptyFolder: false,
    //   // convertSameNameSubFileToGroupIndexPage: false,
    //   // useIndexFileForFolderMenuInfo: false,
    //   // folderLinkNotIncludesFileName: false
    // })
    // sidebar: getSidebar({
    //   contentRoot: '/',
    //   contentDirs: ['docs/contents'],
    //   collapsible: true,
    //   collapsed: false,
    // })
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: SidebarBuilder.get.filesAndOrder('./docs/introduction')
      },
      {
        text: 'Contents',
        collapsed: false,
        items: SidebarBuilder.get.filesAndOrder('./docs/contents')
      },
      {
        items: SidebarBuilder.get.filesAndOrder('./docs/pages')
      },
    ]
  },
})
