<template>
  <div id="background">
    <v-img
      class="FL foodLine1"
      src="../assets/線條_1.png"
      data-aos="fade-left"
    ></v-img>
    <v-img
      class="FL foodLine2"
      src="../assets/線條_2.png"
      data-aos="fade-right"
    ></v-img>
    <v-img
      class="FL foodLine3"
      src="../assets/線條_3.png"
      data-aos="fade-left"
    ></v-img>
    <v-img
      class="FL foodLine4"
      src="../assets/線條_4.png"
      data-aos="fade-right"
    ></v-img>
    <v-img
      class="FL foodLine5"
      src="../assets/線條_5.png"
      data-aos="fade-left"
    ></v-img>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img class="foodBN" src="../assets/嚴選食材BN.jpg"></v-img>
        </v-col>
      </v-row>

      <v-row class="R1">
        <v-col cols="6" class="left">
          <v-img src="../assets/嚴選食材區塊_生菜.png"></v-img>
        </v-col>
        <v-col class="text right" cols="5">
          <h1>玉美嚴選</h1>
          <p>
            生產過程每個環節皆採用最高安全與鮮度標準，採收前30天全面不施化學植物保護劑，徹底執行GAP的安全採收期，系統管理紀錄追溯
          </p>
        </v-col>
      </v-row>

      <v-row class="R2">
        <v-col class="text left" cols="5">
          <h1>臺灣究好豬</h1>
          <p>
            產銷履歷牧場，可追溯來源，全程冷鏈，維持肉品的鮮度與品質
            全台第一家取得「雙潔淨標章」的豬肉調理食品
          </p>
        </v-col>
        <v-col cols="6" class="right">
          <v-img src="../assets/嚴選食材區塊_肉.png"></v-img>
        </v-col>
      </v-row>

      <v-row class="R3">
        <v-col cols="6" class="left">
          <v-img src="../assets/嚴選食材區塊_蛋.png"></v-img>
        </v-col>
        <v-col class="text right" cols="5">
          <h1>育承養生雞蛋</h1>
          <p>
            天然養生蛋，無藥物殘留，無抗生素<br />
            飼料中添加α胡蘿蔔素、綠茶、葉黃素... 天然飼料配方
          </p>
        </v-col>
      </v-row>

      <v-row class="R4">
        <v-col class="text left" cols="5">
          <h1>光泉鮮乳</h1>
          <p>
            有CAS、TQF、鮮乳標章，三大重要的品質驗證標章，嚴選國內最專業的酪農戶合作，來源安心有保障
            成分無調整，100%純天然原始風味
          </p>
        </v-col>
        <v-col cols="6" class="right">
          <v-img src="../assets/嚴選食材區塊_牛奶.png"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" class="left">
          <v-img src="../assets/嚴選食材區塊_白飯.png"></v-img>
        </v-col>
        <v-col class="text right" cols="5">
          <h1>台灣花蓮契作壽司米</h1>
          <p>
            堅持友善農耕，導入產銷履歷契作 詳實記錄栽種生產過程，保護環境
            食安把關，吃有身分證的米最安心
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text left" cols="5">
          <h1>豆漿農</h1>
          <p>
            只用基本的天然食材，不需要化學添加物也可以煮出好味道。不含防腐劑、增稠劑、消泡劑等化學添加劑
          </p>
        </v-col>
        <v-col cols="6" class="right">
          <v-img src="../assets/嚴選食材區塊_豆漿.png"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" class="left">
          <v-img src="../assets/嚴選食材區塊_橄欖油.png"></v-img>
        </v-col>
        <v-col class="text right" cols="5">
          <h1>義大利橄欖油</h1>
          <p>
            天然果實以冷壓方式榨取100%天然純淨的橄欖油，保存完整的天然營養素，不含添加物、鹽份，零膽固醇
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text left" cols="5">
          <h1>自製優格</h1>
          <p>
            活菌數多，成分單純，無添加物，熱量低，可加強蛋白質的吸收，提高鈣的吸收率，含大量益生菌，能促進腸胃蠕動，幫助消化，順暢排便
          </p>
        </v-col>
        <v-col cols="6" class="right">
          <v-img src="../assets/嚴選食材區塊_優格.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <Footer></Footer>
</template>

<script setup>
// ------------aos--------------------------------
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css"; // 引入 AOS 的樣式
// ------------------GSAP-----------------------
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // 註冊GSAP套件

import Footer from "@/layouts/footer.vue";

definePage({
  meta: {
    title: "梅室 | 嚴選食材",
    login: false,
    admin: false,
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
  // 第二列R2的動畫---------------------------------
  // const rowR2 = document.querySelector(".R2");
  // gsap.fromTo(
  //   rowR2,
  //   { y: 100, opacity: 0 },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: rowR2,
  //       start: "bottom 10%",
  //       end: "bottom center",
  //       toggleActions: "play none none reverse",
  //       // markers: true,
  //     },
  //   }
  // );

  // 第三列R3的動畫-------------目前無效中--------------------
  AOS.init({
    // 全局設置動畫的持續時間
    duration: 1500, // 動畫持續時間，單位為毫秒

    // 動畫的延遲時間
    delay: 100, // 延遲時間，單位為毫秒

    // 動畫的觸發點，基於元素在 viewport 中的位置
    offset: 200, // 觸發動畫的偏移量，單位為像素

    // 控制動畫重複觸發
    once: false, // 是否只觸發一次動畫（false 為重複觸發）

    // 動畫的起始點（0-1），表示動畫在滾動到視口的何處開始
    anchorPlacement: "top-bottom", // 例如 'top-center', 'bottom-bottom', 'top-bottom' 等

    // 當滾動到某個位置後是否啟用動畫
    disable: function () {
      // 比如在某個 breakpoint 之後禁用動畫
      return window.innerWidth < 768; // 在小於 768px 的寬度時禁用 AOS
    },
  });
});
</script>

<style scoped lang="scss">
template {
  height: 100%;
  position: relative;
}
#background {
  height: 100%;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
  z-index: 0;
}
// FoodLine們
.FL {
  width: 450px;
  position: absolute;
}
// 玉米番茄
.foodLine1 {
  top: 105rem;
  right: -3rem;
}
//大頭菜
.foodLine2 {
  // width: 500px;
  top: 160rem;
  rotate: -9deg;
}
//洋蔥
.foodLine3 {
  // width: 350px;
  top: 258rem;
  right: 4rem;
  rotate: -10deg;
}
//水果
.foodLine4 {
  width: 550px;
  bottom: 15rem;
  left: 5rem;
  rotate: -10deg;
}
//蔥
.foodLine5 {
  width: 400px;
  bottom: 78rem;
  right: 8rem;
  rotate: 15deg;
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

// 調整位置
.v-row {
  margin-bottom: -50px;
}
.left {
  margin-left: 3rem;
}
.right {
  margin-right: 3rem;
}
</style>
