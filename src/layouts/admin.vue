<template>
  <div class="background">
    <v-container>
      <v-navigation-drawer permanent class="pa-5 background">
        <v-img src="../assets/umeguro_logo.png" class="pa-10"></v-img>
        <v-list>
          <v-list-item
            :prepend-avatar="avatar"
            :title="user.account"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list class="tttt">
          <v-list-item
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :title="item.text"
            :prepend-icon="item.icon"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const user = useUserStore();

const navItems = [
  {
    to: "/admin/products",
    text: "商品管理",
    icon: "mdi-shopping",
  },
  { to: "/admin/orders", text: "訂單管理", icon: "mdi-list-box" },
  // { to: "/admin/reserve", text: "預約管理", icon: "mdi-bookmark-multiple" },
  { to: "/", text: "回首頁", icon: "mdi-home" },
];

const avatar = computed(() => {
  return `https://api.multiavatar.com/${user.account}.png`;
});
</script>

<style scoped lang="scss">
.background {
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}
.v-list-item {
  position: relative;
  bottom: 0;
  color: #971a07;
}
</style>
