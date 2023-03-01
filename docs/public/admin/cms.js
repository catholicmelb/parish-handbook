import CMS from 'netlify-cms-app';

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      branch: 'main',
      repo: 'leightonhughes/Vitepress-with-Decap-CMS'
    },
    media_folder: '/docs/public/media',
    public_folder: '/media',
    collections: [
      {
        name: "post",
        label: "Post",
        folder: "docs/post"
        fields: [
          {
            label: "Title",
            name: "title",
            widget: "string",
          },
          {
            label: "Meta Description",
            name: "description",
            widget: "string",
          },
          {
            label: "Body",
            name: "body",
            widget: "markdown",
          },
        ],
      },
  },
});