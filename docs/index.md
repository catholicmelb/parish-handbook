---
title: Home
layout: home

hero:
  name:  Parish Handbook
  tagline: Lorem ipsum...
  image:
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /foreword/
---

<script setup>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>