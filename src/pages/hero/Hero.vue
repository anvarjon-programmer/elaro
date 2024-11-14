<template>
    <div class=" carousel-container mt-5 mb-10 md:">
      <Carousel
        :itemsToShow="1"
        :mouseDrag="false"
        :autoplay="true" 
        :autoplaySpeed="5000" 

      ref="carousel"
      >
        <Slide  class="h-full">
          <div>
            <img class="w-full rounded-[30px]" src="https://mini-io-api.texnomart.uz/newcontent/slider/338/a8A2KSBfLXpYBPvyOvW1ebYk74MO2gEpptLYKtV1.webp" alt="">
          </div>
        </Slide>
       
      </Carousel>
      <div class="hidden md:block">
        <div class=" flex items-center justify-between -translate-y-[200px]">
        <button @click="prev1" class="carousel-button prev-button shadow-lg">
          <i class="fa-solid fa-angle-left text-2xl"></i>
        </button>
      <button @click="next1" class="carousel-button next-button shadow-lg ml-11">
        <i class="fa-solid fa-angle-right text-2xl"></i>
      </button>
      </div>
      </div>
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
      prev1() {
        this.$refs.carousel.prev();
      },
      next1() {
        this.$refs.carousel.next();
      },
    },
  };
  </script>
  
  <style scoped>
  /* .carousel-container {
    position: relative;
    width: 100%;
  }
   */
  .carousel-button {
    /* position: absolute; */
    /* top: 85%; */
    border: none;
    padding: 8px 16px;
    /* top: 400px; */
    cursor: pointer;
    background-color:  red; 
    border-radius: 50%;
    background: transparent;
    background: white;
  }
  
  .prev-button {
    left: 60px;
  }
  
  .next-button {
    right: 60px;
    z-index: 100;
  }
  </style>
  