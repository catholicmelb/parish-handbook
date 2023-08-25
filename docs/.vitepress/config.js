import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

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
    repo: 'leightonhughes/VitePress-with-Decap-CMS',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],
    outline: [2, 3],
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      capitalizeFirst: true,
      // scanStartPath: null,
      // resolvePath: null,
      rootGroupText: '',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // collapsed: false,
      // collapseDepth: 2,
      // sortMenusByName: true,
      // sortMenusOrderByDescending: false,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      excludeFiles: ['changelog.md'],
      excludeFolders: ['vi', 'fr'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // useIndexFileForFolderMenuInfo: false,
      // folderLinkNotIncludesFileName: false
    })
  },
})
