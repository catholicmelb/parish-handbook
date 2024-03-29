---
layout: home
title: Home
date: 2023-03-02T09:10:19.017Z
order: "1"
description: The Parish Administration Handbook
hero:
  text: The Parish Administration Handbook
  tagline: ‘But everything should be done in a fitting and orderly way.’ (1
    Corinthians 14:40)
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/getting-started
  image:
    src: /img/cam-logo.png
    alt: CAM Graphic
features:
  - icon: ⚡️
    title: Browse parish documentation fast
    details: Lightning fast search and easy access to the information your parish needs.
  - icon: 📝
    title: A ‘living’ document
    details: There will be amendments, additions and changes as the occasion demands
      and will be version controlled.
  - icon: 🙋🏻‍♂️
    title: Support and help
    details: If you have any questions or need help, please email
      <a href="mailto:handbook@cam.org.au">handbook@cam.org.au</a>.
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
