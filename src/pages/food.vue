<template>
  <div id="background">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img class="foodBN" src="../assets/嚴選食材BN.jpg"></v-img>
        </v-col>
      </v-row>

      <v-row class="R1">
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_生菜.png"></v-img>
        </v-col>
        <v-col class="text" cols="6">
          <h1>玉美嚴選</h1>
          <p>
            生產過程每個環節皆採用最高安全與鮮度標準，採收前30天全面不施化學植物保護劑，徹底執行GAP的安全採收期，系統管理紀錄追溯
          </p>
        </v-col>
      </v-row>

      <v-row class="R2">
        <v-col class="text" cols="6">
          <h1>臺灣究好豬</h1>
          <p>
            產銷履歷牧場，可追溯來源，全程冷鏈，維持肉品的鮮度與品質
            全台第一家取得「雙潔淨標章」的豬肉調理食品
          </p>
        </v-col>
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_肉.png"></v-img>
        </v-col>
      </v-row>

      <v-row class="R3">
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_蛋.png"></v-img>
        </v-col>
        <v-col class="text" cols="6">
          <h1>育承養生雞蛋</h1>
          <p>
            天然養生蛋，無藥物殘留，無抗生素<br />
            飼料中添加α胡蘿蔔素、綠茶、葉黃素... 天然飼料配方
          </p>
        </v-col>
      </v-row>

      <v-row class="R4">
        <v-col class="text" cols="6">
          <h1>光泉鮮乳</h1>
          <p>
            有CAS、TQF、鮮乳標章，三大重要的品質驗證標章，嚴選國內最專業的酪農戶合作，來源安心有保障
            成分無調整，100%純天然原始風味
          </p>
        </v-col>
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_牛奶.png"></v-img>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_白飯.png"></v-img>
        </v-col>
        <v-col class="text" cols="6">
          <h1>台灣花蓮契作壽司米</h1>
          <p>
            堅持友善農耕，導入產銷履歷契作 詳實記錄栽種生產過程，保護環境
            食安把關，吃有身分證的米最安心
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text" cols="6">
          <h1>豆漿農</h1>
          <p>
            只用基本的天然食材，不需要化學添加物也可以煮出好味道。不含防腐劑、增稠劑、消泡劑等化學添加劑
          </p>
        </v-col>
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_豆漿.png"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_橄欖油.png"></v-img>
        </v-col>
        <v-col class="text" cols="6">
          <h1>義大利橄欖油</h1>
          <p>
            天然果實以冷壓方式榨取100%天然純淨的橄欖油，保存完整的天然營養素，不含添加物、鹽份，零膽固醇
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text" cols="6">
          <h1>自製優格</h1>
          <p>
            活菌數多，成分單純，無添加物，熱量低，可加強蛋白質的吸收，提高鈣的吸收率，含大量益生菌，能促進腸胃蠕動，幫助消化，順暢排便
          </p>
        </v-col>
        <v-col cols="6">
          <v-img src="../assets/嚴選食材區塊_優格.png"></v-img>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
  <Footer></Footer>
</template>

<script setup>
// ------------------GSAP-----------------------
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // 註冊GSAP套件

import Footer from "@/layouts/footer.vue";

definePage({
  meta: {
    title: "梅室 | 嚴選食材",
    login: true,
    admin: true,
  },
});

onMounted(() => {
  // 為每個 <v-row> 單獨設定動畫和 ScrollTrigger
  const rowR1 = document.querySelector(".R1");
  gsap.fromTo(
    rowR1,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: rowR1,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    }
  );

  const rowR2 = document.querySelector(".R2");
  gsap.fromTo(
    rowR2,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: rowR2,
        start: "bottom top",
        end: "bottom center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    }
  );
  onMounted(() => {
    const rowR3 = document.querySelector(".R3");
    if (rowR3) {
      // 確保元素存在
      gsap.fromTo(
        rowR3,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: rowR3,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    }
  });
});
</script>

<style scoped lang="scss">
template {
  height: 100%;
}
#background {
  height: 100%;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.v-container {
  width: 1280px;
}

.foodBN {
  width: 1280px;
  margin: auto;
  border-radius: 15px;
}

.text {
  color: #971a07;
  text-align: center;
  margin: auto;
  h1 {
    margin-bottom: 1rem;
  }

  p {
    width: 400px;
    margin: auto;
    font-size: 22px;
    font-weight: bold;
  }
}
.v-row {
  margin-bottom: -50px;
}
</style>
