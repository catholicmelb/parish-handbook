import CMS from 'netlify-cms-app';
import posts from '@/cms/collections/posts';

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
      }
    ]
  }
});