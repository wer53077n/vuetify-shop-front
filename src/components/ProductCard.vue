<template>
  <v-container>
    <v-card class="pa-3">
      <v-img
        :src="image"
        center
        width="350"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out v-card--reveal"
            style="height: 100%; background-color: #971a07"
          ></div> </v-expand-transition
      ></v-img>
      <v-row>
        <v-col>
          <v-card-title>
            <router-link :to="'/products/' + _id">{{ name }}</router-link>
          </v-card-title>
        </v-col>
        <v-col>
          <v-card-subtitle>${{ price }}</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text>
        {{ description }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="#971A07"
          prepend-icon="mdi-cart"
          @click="addCart"
          :loading="loading"
          >加入購物車</v-btn
        >
      </v-card-actions>
    </v-card>
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
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import { useRouter } from "vue-router";
import Login from "@/pages/login.vue"; // 引入Login.vue
import Register from "@/pages/register.vue"; // 引入Register.vue

const user = useUserStore();
const router = useRouter();
const createSnackbar = useSnackbar();

const props = defineProps([
  "_id",
  "category",
  "description",
  "image",
  "name",
  "price",
  "sell",
]);

const loading = ref(false);
const isHovering = ref(false);
const dialog = ref(false);
const dialogType = ref("login"); // 用於跟踪打開的對話框類型

const addCart = async () => {
  if (!user.isLogin) {
    dialogType.value = "login";
    dialog.value = true;
    return;
  }
  loading.value = true;
  const result = await user.addCart(props._id, 1);
  createSnackbar({
    text: result.text,
    snackbarProps: {
      color: result.color,
    },
  });
  loading.value = false;
};
</script>

<style scoped lang="scss">
.v-card-title {
  text-align: left;
  margin: auto;
  padding: 13px;
  text-decoration: none;
  router-link {
    text-decoration: none;
    color: #971a07;
    font-size: 20px;
  }
}

.v-card-subtitle {
  text-align: right;
  margin: 1rem auto;
  color: red;
  font-size: 1.3rem;
}
.v-card-text {
  font-size: 1rem;
  padding: 0;
  margin: 1rem;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.4;
  position: absolute;
  width: 100%;
}
</style>
