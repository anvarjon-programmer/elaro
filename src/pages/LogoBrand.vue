<template>
    <div class="carousel-container mt-10">
      <Carousel
        :itemsToShow="5"
        :mouseDrag="false"
        ref="carousel"
        :autoplay="false"
        :breakpoints="{
          400: { itemsToShow: 1 },
          500: { itemsToShow: 3 },
          768: { itemsToShow: 4 },
          1024: { itemsToShow: 6 },
          1280: { itemsToShow: 7 },
        }"
      >
        <Slide  v-for="(product,index) in logoData" :key="index" class="">
          <div
            class="swiper-slide flex flex-col overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white p-1"
          >
            <a href="#" class="relative max-w-[200px]">
              <img
                class="w-full h-full py-5 object-cover bg-center m-auto rounded-[35px] hover:shadow-sm"
                :src="product.url"
                alt="Product Image"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#F4F4F4] via-transparent to-[#F4F4F4] opacity-50 rounded-lg"
              ></div>
            </a>
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
    data(){
        return{
            logoData:[
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
                {
                    url:"https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp"
                },
            ]
        }
    },
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
    margin-top: -100px;
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
  