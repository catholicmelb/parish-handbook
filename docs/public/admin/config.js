import CMS from 'netlify-cms-app';

CMS.init({
    config: {
        load_config_file: false,
        backend: {
          name: 'git',
          branch: 'main',
          repo: 'leightonhughes/Vitepress-with-Decap-CMS'
        },
    }
});