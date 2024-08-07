<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">登入</h1>
      </v-col>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            label="帳號"
            minlength="4"
            maxlength="20"
            counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="密碼"
            minlength="4"
            maxlength="20"
            counter
            type="password"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          ></v-text-field>
          <v-row>
            <v-col class="py-8">
              <v-btn
                type="submit"
                color="#971A07"
                :loading="isSubmitting"
                elevation="0"
                @click="$emit('close-dialog')"
                >登入</v-btn
              >
              <v-btn
                type="button"
                color="gray"
                class="ms-5"
                @click="$emit('close-dialog')"
                >取消</v-btn
              >
              <!-- 註冊按鈕 -->
              <v-btn
                type="button"
                class="novip ml-5"
                @click="openDialog('register')"
                elevation="0"
              >
                還不是梅室會員
              </v-btn>
            </v-col>
          </v-row>
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
          </v-dialog>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import validator from "validator";
import { definePage } from "vue-router/auto";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import Register from "@/pages/register.vue"; // 引入Register.vue

definePage({
  meta: {
    title: "梅室 | 登入",
    login: false,
    admin: false,
  },
});

const router = useRouter();
const user = useUserStore();
const createSnackbar = useSnackbar();

const dialog = ref(false);
const dialogType = ref("register"); // 用於跟踪打開的對話框類型

const schema = yup.object({
  account: yup
    .string()
    .required("使用者帳號必填")
    .min(4, "使用者帳號長度不符")
    .max(20, "使用者帳號長度不符")
    .test(
      // .test(自訂驗證名稱, 錯誤訊息, 驗證 function)
      "isAlphanumeric",
      "使用者帳號格式錯誤",
      (value) => {
        return validator.isAlphanumeric(value);
      }
    ),
  password: yup
    .string()
    .required("使用者密碼必填")
    .min(4, "使用者密碼長度不符")
    .max(20, "使用者密碼長度不符"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});
const account = useField("account");
const password = useField("password");

const submit = handleSubmit(async (values, { emit }) => {
  const result = await user.login(values);
  if (result === "登入成功") {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: "green",
      },
    });
    router.push("/");
    emit("close-dialog");
  } else {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: "red",
      },
    });
  }
});

const openDialog = (type) => {
  dialogType.value = type;
  dialog.value = true;
};
</script>

<style scoped lang="scss">
.novip {
  color: #971a07;
}
</style>
