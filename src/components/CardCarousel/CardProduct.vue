<template>
    <div class="carousel-containe">
      <Carousel :itemsToShow="5" :mouseDrag="false" ref="carousel" :autoplay="false">
        <Slide v-for="product in products" :key="product.id">
          <div
            class="swiper-slide flex flex-col relative overflow-hidden group max-w-[250px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img class="w-full rounded-lg" :src="product.url" alt="Product Image" />
            </a>
            <div
              class="absolute top-0 -right-11 group-hover:right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button>
                <div class="flex justify-center items-center w-8 h-8 bg-white rounded-full">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </button>
              <span class="flex justify-center items-center w-8 h-8 bg-white rounded-full">
                <i class="fa-solid fa-scale-unbalanced-flip"></i>
              </span>
            </div>
            <div class="p-5">
              <p class="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                {{ product.title }}
              </p>
              <div class="rounded-2xl bg-[#f4f4f4] w-full flex items-center justify-center max-w-[200px] my-6">
                <span>{{ product.desc }}</span>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xl">{{ product.price }}</p>
                <button class="border-2 border-[#FF6600] py-[6px] px-2 rounded-lg text-[16px]">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
  
      <!-- Navigation Buttons -->
      <button @click="prev" class="carousel-button prev-button">Previous</button>
      <button @click="next" class="carousel-button next-button">Next</button>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  
  export default {
    components: {
      Carousel,
      Slide,
    },
    props: ['products'],
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
  
  <style>
  .carousel-container {
    position: relative;
    width: 100%;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  </style>
  