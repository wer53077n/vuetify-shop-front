<template>
  <v-container>
    <v-card class="pa-3">
      <v-img :src="image" center width="350"></v-img>
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
  </v-container>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useSnackbar } from "vuetify-use-dialog";
import { ref } from "vue";

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

const addCart = async () => {
  if (!user.isLogin) {
    router.push("/login");
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
  padding: 16px;
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
</style>
