import CMS from 'netlify-cms-app'

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'leightonhughes/Vitepress-with-Decap-CMS',
      branch: 'main',
    },
    media_folder: '/docs/public/media',
    public_folder: '/media',
    collections: [
      {
        label: "Post",
        name: "posts",
        folder: "docs/post",
        create: true,
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string'
          },
          {
            label: 'Meta description',
            name: 'description',
            widget: 'string'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          }
        ]
      }
    ]
  }
});
