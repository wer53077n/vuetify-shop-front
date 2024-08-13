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
    <div id="food">
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
                @click="goToFood"
                >《 前往嚴選 》</v-btn
              >
            </div>
            <v-img class="foodBg" src="../assets/foodline.png"></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
    <!--------------------------- 菜單 --------------------------->
    <div id="menu">
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
              src="../assets/images/2024內頁_封面_01.jpg"
              class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="../assets/images/2024內頁_封面_02.jpg"
              class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_10.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_1.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_2.png" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_3.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_4.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_5.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_6.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_7.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_8.jpg" class="swiper-image"
          /></swiper-slide>
          <swiper-slide
            ><img src="../assets/images/2024內頁_9.jpg" class="swiper-image"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
    <!--------------------------- 地圖 --------------------------->
    <v-container class="mapContainer">
      <v-row class="py-10">
        <v-col cols="5" class="map">
          <div id="map">
            <h1>梅室在哪</h1>
            <br />
            <p>新北市新莊區中華路二段284號</p>
            <p>02 2994 0557</p>
            <br />
            <v-btn
              rounded="xl"
              size="x-large"
              color="#971a07"
              variant="outlined"
            >
              <a
                href="https://maps.app.goo.gl/bct2W2qBXNPTyTRW7"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none; color: inherit"
              >
                GOOGLE MAP 》</a
              ></v-btn
            >
            <br />
            <v-btn
              to="/reserve"
              rounded="xl"
              size="x-large"
              color="#971a07"
              variant="flat"
              class="ma-5"
            >
              前往預約
            </v-btn>
          </div>
        </v-col>
        <v-col cols="7">
          <v-img class="mapImg" src="../assets/map.png"></v-img>
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
// swiper套件，最新消息、菜單 輪播圖 ---------------------------------------------
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import image1 from "@/assets/LINE_ALBUM_ByNikon_5.jpg";
import image2 from "@/assets/LINE_ALBUM_ByNikon_3.jpg";
import image3 from "@/assets/LINE_ALBUM_ByNikon_4.jpg";
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

const images = ref([image1, image2, image3]);
const modules = [Autoplay, Pagination, Navigation, Scrollbar, Keyboard];

const isVisible = ref(true);

const hideCard = () => {
  isVisible.value = false;
};

const router = useRouter();

const goToFood = () => {
  router.push("/food");
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
  height: 100%; /* 設置 Swiper 容器的高度 */
}
.SwiperMenu {
  width: 90%;
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
.mapContainer {
  width: 1280px;
}
.map {
  /* display: flex; */
  text-align: center;
  margin: auto;
  color: #971a07;
}

.map p {
  font-size: 20px;
  font-weight: 600;
  line-height: 2.5rem;
}

.mapImg {
  width: 700px;
  right: 1rem;
}
</style>
