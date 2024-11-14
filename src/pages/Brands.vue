<template>
  <div class="carousel-container">
    <Carousel
      :itemsToShow="7"
      :mouseDrag="false"
      ref="carousel"
      :autoplay="false"
      :breakpoints="{
        400: { itemsToShow: 2 },
        500: { itemsToShow: 4 },
        640: { itemsToShow: 5 },
        768: { itemsToShow: 6 },
        1024: { itemsToShow: 7 },
        1280: { itemsToShow: 7 },
      }"
      class="flex items-center gap-6"
    >
      <Slide class="" v-for="(item,index) in brandProducts" :key="index">
        <div
          class="swiper-slide flex flex-col overflow-hidden group   rounded-lg px-2">
          <a href="#" class="relative h-[130px]">
            <img
              class="w-full h-full  object-cover bg-center m-auto rounded-[26px]"
              :src="item.url"
              alt="Product Image"
            />
          </a>
          <p class="absolute top-3 text-[13px] left-[28px]">{{ item.title }}</p>
        </div>
      </Slide>
    </Carousel>
    <div class="">
      <button @click="prev" class="carousel-button prev-button shadow-lg">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </button>
      <button @click="next" class="carousel-button next-button shadow-lg">
        <i class="fa-solid fa-angle-right text-xl"></i>
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
      brandProducts:[
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/4/aa4237cb-9bc4-4941-8535-277ca7831f48.png",
          title:"Smartfonlar"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/8/61521f46-27bb-4ba1-8fa7-34f3bc6e9530.png",
          title:"Havo sovutgichlar"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/5/ade607e8-e08e-40a1-85c1-b291327fe412.png",
          title:"Changyutgich"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/7/74a09808-7198-496a-b704-158399923abd.png",
          title:"Muzlatgich"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/22/1f3896fc-fbb9-4d2f-ac2e-17df4bf4959b.png",
          title:"Noutbuklar"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/9/e84d9227-6eef-4f6c-94f4-a26258c5d5a1.png",
          title:"Televizor"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/23/a206c805-83f1-4965-9da7-876b8124fcee.png",
          title:"Qahva mashinalari"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/11/b9e70df6-9f7a-49aa-a5fc-7ebd8e517ab6.png",
          title:"Kir yuvish mashinalari"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/10/d234e541-a133-4377-a68f-fbf28d5901b4.png",
          title:"Fenlar"
        },
        {
          url:"https://mini-io-api.texnomart.uz/catalog/special-category/6/dd88365c-fc33-4062-a6fe-aa2e0d5b4dd8.png",
          title:"Planshetlar"
        },
      ]
    }
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
/* .carousel-container {
    position: relative;
    width: 100%;
  }
   */
.carousel-button {
  position: absolute;
   transform: translateY(-190%); 
  border: none;
  padding: 5px 12px;
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
