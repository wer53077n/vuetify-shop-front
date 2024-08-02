<template>
  <div class="background">
    <div class="fixed text-center">
      <transition name="slide-fade">
        <v-card
          v-show="isVisible"
          color="#971a07"
          rounded="2"
          class="pa-5 relative"
        >
          <v-btn
            variant="tonal"
            size="x-small"
            icon="mdi-close"
            class="close-btn"
            @click="hideCard"
          ></v-btn>
          <v-card-title class="cardTitle pt-10">最新消息</v-card-title>
          <v-card-text class="cardText pt-5">
            營業時間調整公告<br />
            8/20(二)
            <br />12:00~19:00
          </v-card-text>
          <v-card-actions class="newsBtn"> </v-card-actions>
        </v-card>
      </transition>
    </div>
    <v-container>
      <!--------------------------- Title的大LOGO --------------------------->
      <v-row justify="center" align="center">
        <v-col cols="12" class="d-flex justify-center py-10">
          <v-img src="../assets/umeguro_logo.png" height="500"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!--------------------------- 輪播圖 --------------------------->
    <div class="swiper-container">
      <!-- https://codesandbox.io/p/devbox/swiper-vue-scrollbar-l3898n?file=%2Fsrc%2FApp.vue%3A15%2C12 -->
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper py-15"
      >
        <swiper-slide v-for="(images, index) in images" :key="index" cover>
          <v-img :src="images" height="600" cover></v-img>
        </swiper-slide>
      </swiper>
    </div>
    <!--------------------------- 嚴選食材 --------------------------->
    <div class="food">
      <v-row justify="center" align="center">
        <v-col cols="12" class="d-flex justify-center">
          <div class="foodText">
            <h1 class="ma-5">闆娘嚴選食材</h1>
            <p>
              細心選用優質與營養食材，每一口都是精挑細選的美味。
              <br />
              梅室早午餐，呈現給您獨一無二的風味體驗。
            </p>
            <v-btn
              class="ma-5"
              rounded="xl"
              size="large"
              color="#971a07"
              variant="flat"
              >《 前往嚴選 》</v-btn
            >
          </div>
          <v-img class="foodBg" src="../assets/foodline.png"></v-img>
        </v-col>
      </v-row>
    </div>
    <!--------------------------- 菜單 --------------------------->
    <div class="swiper-container">
      <swiper
        :slidesPerView="1"
        :centeredSlides="false"
        :slidesPerGroupSkip="1"
        :grabCursor="true"
        :keyboard="{
          enabled: true,
        }"
        :breakpoints="{
          '1000': {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }"
        :scrollbar="true"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="SwiperMenu my-10"
      >
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-004.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-005.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-006.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-007.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-008.jpg"
            class="swiper-image"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://cdn.magloft.com/github/swiper/images/page-009.jpg"
            class="swiper-image"
        /></swiper-slide>
      </swiper>
    </div>
    <!--------------------------- 地圖 --------------------------->
    <v-container>
      <v-row class="py-10">
        <v-col cols="5" class="map">
          <h2>梅室在哪</h2>
          <br />
          <p>242新北市新莊區中華路二段284號</p>
          <p>02 2994 0557</p>
          <br />
          <v-btn rounded="xl" size="x-large" color="#971a07" variant="outlined"
            >GOOGLE MAP 》</v-btn
          >
        </v-col>
        <v-col cols="7">
          <v-img class="mapImg" src="../assets/map.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { definePage } from "vue-router/auto";
import Footer from "@/layouts/footer.vue";

// swiper套件，最新消息、菜單 輪播圖 -----------------------------------------------------------------

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import required modules
import image1 from "@/assets/LINE_ALBUM_ByNikon_5.jpg";
import image2 from "@/assets/LINE_ALBUM_ByNikon_3.jpg";
import image3 from "@/assets/LINE_ALBUM_ByNikon_4.jpg";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

definePage({
  meta: {
    title: "梅室 Umemuro",
    login: false,
    admin: false,
  },
});

const images = ref([
  image1,
  image2,
  image3,
  // 添加更多圖片路徑
]);
const modules = [Autoplay, Pagination, Navigation, Scrollbar, Keyboard];

const isVisible = ref(true);

const hideCard = () => {
  isVisible.value = false;
};
</script>

<style scoped lang="scss">
.background {
  height: 100%;
  background-image: url("@/assets/umemuro-background.jpg");
  background-size: cover;
  background-position: center;
}

/* ----------------- 最新消息 float ----------------- */
.fixed {
  width: 250px;
  padding: 10px;
  position: fixed;
  top: 20%;
  left: 0;
  transform: translate(-5%);
  z-index: 2;
}

.relative {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(-50%);
  opacity: 0;
}

.cardTitle {
  font-size: 30px;
  font-weight: bold;
}
.cardText {
  font-size: 18px;
  display: flex;
}

/* ----------------- 輪播圖們 ----------------- */
.swiper-container {
  max-width: 1280px; /* 設置 Swiper 容器的最大寬度 */
  margin: auto; /* 讓 Swiper 居中顯示 */
}

.mySwiper {
  /* 調整 Swiper 的樣式 */
  height: 800px; /* 設置 Swiper 容器的高度 */
}
.SwiperMenu {
  height: 1000px;
}

.swiper-image {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

/* ----------------- 嚴選食材 ----------------- */

.food {
  position: relative;
}

.foodBg {
  width: 100%;
  height: auto;
}

.foodText {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #971a07;

  p {
    font-size: 20px;
    font-weight: 600;
  }
}

/* ----------------- 地圖 ----------------- */
.map {
  /* display: flex; */
  text-align: center;
  margin: auto;
  color: #971a07;
}

.mapImg {
  width: 700px;
  right: 1rem;
}
</style>
