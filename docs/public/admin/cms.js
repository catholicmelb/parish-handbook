import { useEffect } from "react";
import CMS from "netlify-cms-app";
import React from "react";

const Preview = (props) => {
  const entry = props.entry;
  const title = entry.getIn(["data", "title"]) || "";

  // return (
  //     {props.widgetFor("title")}
  //     {props.widgetFor("body")}
  // );
};

const Admin = () => {
  useEffect(() => {
    CMS.init(
      {
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
      }
    );
    CMS.registerPreviewTemplate("blog", Preview);
  }, []);
};

export default Admin;