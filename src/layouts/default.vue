<template>
  <!-- 手機板側欄 -->
  <v-navigation-drawer v-if="mobile" v-model="drawer">
    <v-list nav>
      <template v-for="item in navItems" :key="item.to">
        <v-list-item
          :prepend-icon="item.icon"
          :to="item.to"
          :title="item.title"
          v-if="item.show"
        >
          <template #append>
            <v-badge
              color="error"
              :content="user.cart"
              v-if="item.to === '/cart' && user.cart > 0"
              inline
            ></v-badge>
          </template>
        </v-list-item>
      </template>
      <v-list-item
        prepend-icon="mdi-account-arrow-right"
        v-if="user.isLogin"
        title="登出"
        @click="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- 導覽列 -->
  <v-app-bar image="../assets/umemuro-background.jpg" :elevation="0">
    <v-container class="d-flex justify-center">
      <!-- 標題 -->
      <!-- <v-btn to="/" :active="false" class="nav-title">Umemuro</v-btn> -->
      <template v-if="mobile">
        <!-- 手機板漢堡按鈕 -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </template>
      <template v-else>
        <!-- 電腦版選單 -->
        <div class="d-flex justify-center align-center">
          <template v-for="item in navItems" :key="item.to">
            <router-link :to="item.to" v-if="item.show">
              <v-img></v-img>
              <v-btn :prepend-icon="item.icon" class="nav-link" text-center>
                {{ item.title }}
                <v-badge
                  color="red"
                  :content="user.cart"
                  v-if="item.to === '/cart' && user.cart > 0"
                  floating
                ></v-badge>
              </v-btn>
            </router-link>
          </template>
          <v-btn
            prepend-icon="mdi-account-arrow-right"
            v-if="user.isLogin"
            @click="logout"
            class="nav-link"
          >
            登出
          </v-btn>
          <v-btn
            v-if="!user.isLogin"
            @click="openDialog('register')"
            class="nav-link"
          >
            註冊
          </v-btn>
          <v-btn
            v-if="!user.isLogin"
            @click="openDialog('login')"
            class="nav-link"
          >
            登入
          </v-btn>
        </div>
      </template>
    </v-container>
  </v-app-bar>
  <!-- 登入對話框 -->
  <v-dialog v-model="dialog" max-width="400px">
    <v-card v-if="dialogType === 'register'">
      <v-card-title class="headline"></v-card-title>
      <v-card-text>
        <Register @close-dialog="dialog = false" />
      </v-card-text>
    </v-card>
    <v-card v-if="dialogType === 'login'">
      <v-card-title class="headline"></v-card-title>
      <v-btn
        class="text-right"
        icon="mdi-close"
        variant="text"
        @close-dialog="dialog = false"
      ></v-btn>
      <v-card-text>
        <Login @close-dialog="dialog = false" />
      </v-card-text>
    </v-card>
  </v-dialog>
  <!-- 主要內容 -->
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import Login from "@/pages/login.vue"; // 引入Login.vue
import Register from "@/pages/register.vue"; // 引入Register.vue

const { mobile } = useDisplay();
const user = useUserStore();
const createSnackbar = useSnackbar();

const drawer = ref(false);
const dialog = ref(false);
const dialogType = ref("login"); // 用於跟踪打開的對話框類型

// 導覽列
const navItems = computed(() => {
  return [
    // {
    //   to: "/",
    //   title: "最新消息",
    //   icon: null,
    //   show: user.isLogin,
    // },
    {
      to: "/",
      title: "嚴選食材",
      icon: null,
      show: user.isLogin,
    },
    {
      to: "/",
      title: "好料菜單",
      icon: null,
      show: user.isLogin,
    },
    {
      to: "/",
      title: "梅室在哪",
      icon: null,
      show: user.isLogin,
    },
    {
      to: "/shop",
      title: "梅室周邊",
      icon: null,
      show: user.isLogin,
    },
    {
      to: "/reserve",
      title: "預約服務",
      icon: null,
      show: user.isLogin,
    },
    {
      to: "/cart",
      icon: "mdi-cart",
      show: user.isLogin,
    },
    {
      to: "/admin",
      title: "管理",
      icon: null,
      show: user.isLogin && user.isAdmin,
    },
    // {
    //   to: "/register",
    //   title: "註冊",
    //   icon: null,
    //   show: !user.isLogin,
    // },
    // {
    //   to: "/login",
    //   title: "登入",
    //   icon: null,
    //   show: !user.isLogin,
    // },
  ];
});

const logout = async () => {
  await user.logout();
  createSnackbar({
    text: "登出成功",
    snackbarProps: {
      color: "green",
    },
  });
};

const openDialog = (type) => {
  dialogType.value = type;
  dialog.value = true;
};
</script>

<style scoped>
.nav-title {
  color: #971a07; /* 修改這裡的顏色 */
  font-size: 20px; /* 可根據需要調整字體大小 */
}

.nav-link {
  color: #971a07; /* 修改這裡的顏色 */
  font-weight: bold;
  background-color: none;
  box-shadow: none;
}

.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}
</style>
