<template>
  <div class="background">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img class="foodBN" src="../assets/嚴選食材BN.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "梅室 | 嚴選食材",
    login: true,
    admin: false,
  },
});
</script>

<style scoped lang="scss">
.background {
  height: 100%;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}
.foodBN {
  width: 1280px;
  margin: auto;
  border-radius: 15px;
}
</style>
