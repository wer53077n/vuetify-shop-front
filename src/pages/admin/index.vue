<template>
  <div class="background">
    <v-container class="h-100">
      <v-row class="h-100">
        <v-col cols="12">
          <h1 class="text-center">請選擇管理項目</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "梅室 | 管理",
    login: true,
    admin: true,
  },
});
</script>

<style scoped lang="scss">
.background {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
