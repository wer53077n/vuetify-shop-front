<template>
  <!-- 手機板側欄 -->
  <v-navigation-drawer v-if="mobile" v-model="drawer">
    <v-list nav>
      <template v-for="item in navItems" :key="item.to">
        <v-list-item :to="item.to">
          <template #prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
          <template v-for="item in navItems" :key="item.to" tag="v-btn">
            <router-link :to="item.to">
              <v-btn :prepend-icon="item.icon" class="nav-link" text-center>
                {{ item.title }}
                <!-- 購物車的通知點點 -->
                <v-badge
                  color="red"
                  :content="user.cart"
                  v-if="item.to === '/cart'"
                  floating
                ></v-badge>
              </v-btn>
            </router-link>
          </template>
          <!-- 會員登入選單 -->
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn
                v-if="user.isLogin"
                color="#971a07"
                v-bind="props"
                class="nav-link"
              >
                會員中心
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="item in navItemMeun" :key="item.to">
                <router-link :to="item.to">
                  <v-btn class="nav-link" text-center>
                    <template #prepend>
                      <v-icon>{{ item.icon }}</v-icon>
                    </template>
                    {{ item.title }}
                  </v-btn>
                </router-link>
              </v-list-item>
              <v-btn
                prepend-icon="mdi-account-arrow-right"
                v-if="user.isLogin"
                @click="logout"
                class="nav-link"
              >
                登出
              </v-btn>
            </v-list>
          </v-menu>
          <v-btn
            v-if="!user.isLogin"
            @click="openDialog('login')"
            class="nav-link"
          >
            登入/註冊
          </v-btn>
        </div>
      </template>
    </v-container>
  </v-app-bar>
  <!-- 登入對話框 -->
  <v-dialog v-model="dialog" max-width="400px">
    <v-card v-if="dialogType === 'register'">
      <v-card-title class="headline"></v-card-title>
      <v-btn
        class="text-right ml-3"
        icon="mdi-close"
        variant="text"
        @click="dialog = false"
      ></v-btn>
      <v-card-text>
        <Register @close-dialog="dialog = false" />
      </v-card-text>
    </v-card>
    <v-card v-if="dialogType === 'login'">
      <v-card-title class="headline"></v-card-title>
      <v-btn
        class="text-right ml-3"
        icon="mdi-close"
        variant="text"
        @click="dialog = false"
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
    {
      to: "/#food",
      title: "嚴選食材",
      icon: null,
      show: true,
    },
    {
      to: "/#menu",
      title: "好料菜單",
      icon: null,
      show: true,
    },
    {
      to: "/#map",
      title: "梅室在哪",
      icon: null,
      show: true,
    },
    {
      to: "/reserve",
      title: "預約服務",
      icon: null,
      show: true,
    },
    {
      to: "/shop",
      title: "梅室週邊",
      icon: null,
      show: true,
    },
    {
      to: "/cart",
      icon: "mdi-cart",
      show: true,
    },
  ];
});

const navItemMeun = computed(() => {
  return [
    {
      to: "/admin",
      title: "管理者系統",
      icon: "mdi-account-cog",
      show: !user.isAdmin,
    },
    {
      to: "/orders",
      title: "訂單查詢",
      icon: "mdi-list-box",
      show: true,
    },
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
/* ------------------- 手機導覽列 -------------------- */
.v-navigation-drawer {
  background-image: url(../assets/umemuro-background.jpg);
  font-size: 30px;
  color: #971a07;
}
</style>
