<template>
  <div class="background">
    <v-container class="pt-10">
      <v-row class="pa-15 mainPicture">
        <!--------------------- 主圖 --------------------------->
        <v-col cols="6">
          <v-img :src="product.image" height="500"></v-img>
        </v-col>
        <!--------------------- 品名 --------------------------->
        <v-col class="productName" cols="6">
          <v-row>
            <v-col cols="6">
              <h1>{{ product.name }}</h1>
            </v-col>
            <v-col cols="6">
              <p class="productPrice">${{ product.price }}</p>
            </v-col>
          </v-row>
          <p class="py-5">{{ product.description }}</p>
          <!--------------------- 商品資訊 --------------------------->
          <v-row>
            <v-col>
              <v-form :disabled="isSubmitting" @submit.prevent="submit">
                <v-text-field
                  type="number"
                  v-model.number="quantity.value.value"
                  :error-messages="quantity.errorMessage.value"
                ></v-text-field>
                <v-btn
                  color="#971A07"
                  type="submit"
                  prepend-icon="mdi-cart"
                  :loading="isSubmitting"
                  >加入購物車</v-btn
                >
                <!--------------------- 加入購物車按鈕 --------------------------->
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-overlay
    class="align-center justify-center text-center"
    :model-value="!product.sell"
    persistent
  >
    <h1 class="text-center text-red">已下架</h1>
    <v-btn to="/">回首頁</v-btn>
  </v-overlay>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import { useRoute, useRouter } from "vue-router";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useUserStore } from "@/stores/user";
import Footer from "@/layouts/footer.vue";

definePage({
  meta: {
    title: "梅室| 商品",
    login: false,
    admin: false,
  },
});

const { api } = useApi();
const route = useRoute();
const router = useRouter();
const createSnackbar = useSnackbar();
const user = useUserStore();

const product = ref({
  _id: "",
  name: "",
  price: 0,
  description: "",
  image: "",
  sell: true,
  category: "",
});

const load = async () => {
  try {
    const { data } = await api.get("/product/" + route.params.id);
    product.value._id = data.result._id;
    product.value.name = data.result.name;
    product.value.price = data.result.price;
    product.value.description = data.result.description;
    product.value.image = data.result.image;
    product.value.sell = data.result.sell;
    product.value.category = data.result.category;

    document.title = "梅室 | " + product.value.name;
  } catch (error) {
    console.log(error);
    createSnackbar({
      text: error?.response?.data?.message || "發生錯誤",
      snackbarProps: {
        color: "red",
      },
    });
  }
};
load();

const schema = yup.object({
  quantity: yup
    .number()
    .typeError("數量必填")
    .required("數量必填")
    .min(1, "最少為 1"),
});
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1,
  },
});
const quantity = useField("quantity");

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push("/login");
    return;
  }
  const result = await user.addCart(product.value._id, values.quantity);
  createSnackbar({
    text: result.text,
    snackbarProps: {
      color: result.color,
    },
  });
});
</script>

<style scoped lang="scss">
.background {
  height: 100%;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}
.mainPicture {
  width: 80%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  padding: auto;
  margin: auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
.productName {
  padding: 3rem;
  // background: rgba(255, 255, 255, 0.5);
}
.productName h1 {
  font-size: 2rem;
  color: #971a07;
  text-align: left;
}
.productPrice {
  font-size: 2rem;
  color: rgb(255, 84, 84);
  text-align: right;
}
</style>
