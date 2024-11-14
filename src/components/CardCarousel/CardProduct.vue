<template>
  <div class="carousel-container mt-10">
    <Carousel
      :itemsToShow="5"
      :mouseDrag="false"
      ref="carousel"
      :autoplay="false"
      :breakpoints="{
        350: { itemsToShow: 1 },
        400: { itemsToShow: 1 },
        500: { itemsToShow: 2 },
        640: { itemsToShow: 3 },
        768: { itemsToShow: 3 },
        1024: { itemsToShow: 4 },
        1280: { itemsToShow: 5 },
      }"
    >
      <Slide v-for="product in products" :key="product.id" class="[400px]">
        <div
          class="w-full md:swiper-slide flex flex-col overflow-hidden group max-w-[250px] h-[400px] rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white p-1"
        >
          <a href="#" class="relative h-[220px]">
            <img
              class="w-full h-full py-5 object-cover bg-center m-auto rounded-[35px] hover:shadow-sm"
              :src="product.url"
              alt="Product Image"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#F4F4F4] via-transparent to-[#F4F4F4] opacity-50 rounded-lg"
            ></div>
          </a>

          <div
            class="absolute top-0 -right-11 group-hover:right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button>
              <div
                class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
              >
                <i class="fa-regular fa-heart"></i>
              </div>
            </button>
            <span
              class="flex justify-center items-center w-8 h-8 bg-white rounded-full"
            >
              <i class="fa-solid fa-scale-unbalanced-flip"></i>
            </span>
          </div>
          <div class="p-3 flex flex-col justify-between h-[600px]">
            <p
              class="h-[50px] text-start text-[17px] text-gray-700 dark:text-gray-400"
            >
              {{ product.title }}
            </p>
            <div
              class="rounded-2xl bg-[#f4f4f4] w-full flex items-center justify-center max-w-[200px]"
            >
              <span>{{ product.desc }} </span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 w-full">
                <p class="text-[18px] font-bold">{{ product.price }}</p>
                <span class="text-[15px]">so'm</span>
              </div>
              <button
                class="border-2 border-[#FF6600] w-[45px] h-[35px] flex items-center justify-center rounded-lg text-[18px]"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="hidden md:block">
      <button @click="prev" class="carousel-button prev-button shadow-lg">
        <i class="fa-solid fa-angle-left text-2xl"></i>
      </button>
      <button @click="next" class="carousel-button next-button shadow-lg">
        <i class="fa-solid fa-angle-right text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
  },
  props: ["products"],
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style scoped>
.carousel-button {
  position: absolute;
  margin-top: -240px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  background-color: red;
  border-radius: 50%;
  background: transparent;
  background: white;
}

.prev-button {
  left: 80px;
}

.next-button {
  right: 70px;
  z-index: 100;
}
</style>
