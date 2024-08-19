<template>
  <div class="background">
    <v-container>
      <v-col cols="12">
        <h1 class="text-center pa-5">預約查詢</h1>
      </v-col>

      <v-sheet rounded>
        <v-row justify="center" align="center" class="text-center">
          <v-col cols="10" class="d-flex justify-center pa-10 text-center">
            <v-data-table :items="items" :headers="headers" class="text-center">
              <template #[`item.cart`]="data">
                <ul>
                  <li v-for="item in data.item.cart" :key="item._id">
                    {{ item.p_id.name }} * {{ item.quantity }}
                  </li>
                </ul>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import { useApi } from "@/composables/axios";
import { useSnackbar } from "vuetify-use-dialog";

definePage({
  meta: {
    title: "梅室 | 預約查詢",
    login: true,
    admin: false,
  },
});

const { apiAuth } = useApi();
const createSnackbar = useSnackbar();

const items = ref([]);
const headers = [
  { title: "編號", key: "_id" },
  {
    title: "日期",
    key: "createdAt",
    value: (item) => new Date(item.createdAt).toLocaleString(),
  },
  { title: "商品", key: "cart", sortable: false },
  {
    title: "金額",
    key: "price",
    value: (item) => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.p_id.price;
      }, 0);
    },
  },
];

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get("/order");
    items.value.push(...data.result);
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
loadItems();
</script>

<style scoped lang="scss">
.background {
  height: 100vh;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}
h1 {
  color: #971a07;
}
</style>
