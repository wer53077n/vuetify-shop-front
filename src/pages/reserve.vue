<template>
  <div class="background">
    <v-container>
      <!--------------------- 標題 --------------------->
      <v-row>
        <v-col cols="12">
          <v-img class="reserveBN" src="../assets/預約服務BN.jpg"></v-img>
          <!-- <h1 class="text-center">預約服務</h1>
          <br />
          <p class="text-center">
            當日新鮮食材製作的美味早午餐，讓您在悠閒的氛圍中享受健康美食。輕鬆線上預約，確保您的座位，享受無憂的用餐體驗。
          </p> -->
        </v-col>
      </v-row>
      <!--------------------- 內容表格 Form --------------------->
      <v-row justify="center" align="center">
        <v-col class="d-flex justify-center py-10">
          <v-sheet elevation="3" color="#fff" class="pa-10" :width="1280">
            <v-form @submit.prevent="submit">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="姓名"
                    v-model="userName"
                    :rules="rules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="電話" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="預約日期"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="4">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time"
                        label="預約時間"
                        prepend-icon="mdi-clock"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-model="time"
                      format="24hr"
                      @input="menu2 = false"
                    ></v-time-picker>
                  </v-menu>
                </v-col>
                <v-col cols="4">
                  <v-select
                    :items="peopleOptions"
                    label="人數"
                    required
                  ></v-select>
                </v-col>
              </v-row>
              <v-textarea label="備註"></v-textarea>
              <v-btn
                :loading="loading"
                color="#971a07"
                class="mt-2"
                text="提交"
                type="submit"
                block
              ></v-btn>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import Footer from "@/layouts/footer.vue";

const date = ref("");
const time = ref("");
const menu1 = ref(false);
const menu2 = ref(false);
const peopleOptions = ["1", "2", "3", "4", "5", "6", "7"];
const loading = ref(false);
const userName = ref("");
const timeout = ref(null);

const rules = [(value) => checkApi(value)];

const submit = async (event) => {
  loading.value = true;

  // 模擬表單提交
  setTimeout(() => {
    loading.value = false;
    alert(
      JSON.stringify(
        { userName: userName.value, date: date.value, time: time.value },
        null,
        2
      )
    );
  }, 1000);
};

const checkApi = async (userName) => {
  return new Promise((resolve) => {
    clearTimeout(timeout.value);

    timeout.value = setTimeout(() => {
      if (!userName) return resolve("Please enter a user name.");
      if (userName === "johnleider")
        return resolve("User name already taken. Please try another one.");

      return resolve(true);
    }, 800);
  });
};

definePage({
  meta: {
    title: "梅室 | 預約服務",
    login: false,
    admin: false,
  },
});
</script>

<style scoped>
.background {
  height: 100%;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}

h1,
p {
  color: #971a07;
}
.reserveBN {
  width: 1280px;
  margin: auto;
  border-radius: 15px;
}
</style>
