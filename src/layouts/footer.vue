<template>
  <v-footer class="text-center d-flex flex-column" color="#971A07">
    <v-divider class="my-4"></v-divider>
    <v-row class="d-flex align-content-between">
      <v-col cols="7">
        <a href="../pages/index.vue">
          <v-img src="../assets/梅室umeguro_logo guide-18.png"></v-img
        ></a>
        <h2>早午餐、咖啡、點心</h2>
      </v-col>
      <v-col cols="5" class="pt-0 px-4">
        <h2>營業時間</h2>
        <p>週二至週六 10:00~19:00</p>
        <p class="small">(Last Order 18:30)</p>
        <br />
        <p>週日 10:00~17:00</p>
        <p class="small">(Last Order 16:30)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
      </v-col>
    </v-row>
    <div class="my-4"></div>
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

<style scoped lang="scss">
.small {
  font-size: 15px;
}
</style>
