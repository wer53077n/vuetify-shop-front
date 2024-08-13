<template>
  <div class="background">
    <v-container>
      <!-- Banner -->
      <v-row>
        <v-col cols="12">
          <v-img class="shopBN" src="../assets/週邊BN.jpg"></v-img>
        </v-col>
      </v-row>

      <v-row class="row">
        <v-col cols="3" v-for="product in products" :key="product._id">
          <ProductCard v-bind="product"></ProductCard>
        </v-col>

        <v-col class="shopBox" cols="10">
          <v-pagination
            v-model="page"
            :length="pages"
            rounded="circle"
            @update:model-value="loadProducts"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";
import ProductCard from "@/components/ProductCard.vue";
import Footer from "@/layouts/footer.vue";

definePage({
  meta: {
    title: "梅室 Umemuro|Shop",
    login: false,
    admin: false,
  },
});

const { api } = useApi();
const createSnackbar = useSnackbar();

const page = ref(1);
const pages = ref(1);
const ITEMS_PER_PAGE = 20;

const products = ref([]);
const loadProducts = async () => {
  try {
    const { data } = await api.get("/product", {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value,
      },
    });
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE);
    products.value.splice(0, products.value.length, ...data.result.data);
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
loadProducts();
</script>

<style scoped>
.background {
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}

.shopBN {
  width: 1280px;
  margin: auto;
  border-radius: 15px;
}
.row {
  margin: auto;
  width: 1320px;
}
.shopBox {
  width: 1280px;
}
</style>
