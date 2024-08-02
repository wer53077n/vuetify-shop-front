<template>
  <v-footer class="text-center d-flex flex-column" color="#971A07">
    <div class="my-4">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-2"
        variant="text"
        :href="getIconLink(icon)"
        target="_blank"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </div>

    <div class="pt-0 px-4">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
      Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider class="my-4"></v-divider>

    <div class="mb-4">
      {{ new Date().getFullYear() }} — <strong>Chia</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";

const icons = ref(["mdi-facebook", "mdi-message", "mdi-instagram"]);

const getIconLink = (icon) => {
  switch (icon) {
    case "mdi-facebook":
      return "https://www.facebook.com/umemurokapi/?locale=zh_TW";
    case "mdi-message":
      return "https://www.twitter.com";
    case "mdi-instagram":
      return "https://www.instagram.com/umemurokapi/";
    default:
      return "#";
  }
};
</script>
