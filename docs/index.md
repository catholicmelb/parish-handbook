---
layout: home
title: Introduction
date: 2023-03-02T09:10:19.017Z
order: "1"
description: Introduction

hero:
  name: The Parish
  text: Handbook
  tagline: ‘But everything should be done in a fitting and orderly way.’ (1 Corinthians 14:40)
  actions:
    - theme: brand
      text: What is the Handbook?
      link: /introduction/what-is-the-handbook
    - theme: alt
      text: Getting Started
      link: /introduction/getting-started
  image:
    src: /
    alt: CAM Graphic

features:
  - icon: ⚡️
    title: Browse parish documentation fast
    details: Lightning fast search and easy access to the information you need.
  - icon: 📝
    title: A ‘living’ document
    details: There will be amendments, additions and changes as the occasion demands and will be version controlled.
  - icon: 🙋🏻‍♂️
    title: Support and help
    details: If you have any questions or need help, please contact the Archdiocese <a href="mailto:communications@cam.org.au">Communications Office.</a>
  - icon: 🙋🏻‍♂️
    title: Support and help
    details: If you have any questions or need help, please contact the Archdiocese <a href="mailto:communications@cam.org.au">Communications Office.</a>
  - icon: 🙋🏻‍♂️
    title: Support and help
    details: If you have any questions or need help, please contact the Archdiocese <a href="mailto:communications@cam.org.au">Communications Office.</a>
  - icon: 🙋🏻‍♂️
    title: Melbourne Catholic
    details: Up to date Archdiocesan news and resources.

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>

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
