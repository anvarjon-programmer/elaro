<template>
  <div class="carousel-container">
    <h2 class="text-2xl text-start mb-6 font-bold">Ommabop brendlar</h2>
    
    <!-- Carousel with ref for controlling navigation -->
    <VueAIcarousel 
      ref="carousel" 
      :Property="{ID: 'One', perPage: 5, loop: true, autoplay: false}" 
    >
      <!-- Carousel Items -->
      <div v-for="(object, index) in objects" :key="index" class="carousel-item bg-red-300">
        <img :src="object.url" alt="brand logo" class="brand-logo"/>
      </div>
    </VueAIcarousel>
    
    <!-- Custom Navigation Buttons -->
    <button @click="prevSlide" class="carousel-nav prev-btn text-[5px] mt-4">
      <i class="fa-solid fa-chevron-left text-2xl"></i>
    </button>
    <button @click="nextSlide" class="carousel-nav next-btn text-[5px] mt-4">
      <i class="fa-solid fa-chevron-right text-2xl"></i>
    </button>
  </div>
</template>

<script>
import VueAIcarousel from "vue-ai-carousel";

export default {
  components: {
    VueAIcarousel,
  },
  data() {
    return {
      objects: [
        { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp' },
        { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/70/7160cc7e-711b-44bb-a6dc-77dca7ec4924.webp' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/71/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/80/dd3aeb98-802f-4ddd-9d07-c1abd4b1a482-medium.webp' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/73/e9c04fcd-5ed8-41f8-b417-a8f190a77de1.svg' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/69/6808325d-2e60-425d-9e5c-6e79cab00233.svg' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/74/c53e8986-c05a-4af7-b5a6-adafe1f04bff.webp' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/96/a9acfae1-3152-4e14-a0b1-3012477425c3.svg' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/90/21a7fcd7-6ca4-4cd3-ade4-499ad6c96660-medium.webp' },
        // { url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/75/cb377838-24b4-4c67-8efb-42f81678c320.webp' },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.next();
    },
    prevSlide() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style>
.carousel-container {
  position: relative;
  text-align: center;
  padding: 20px;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 10px; /* Smaller width for each card */
  height: 30px; /* Reduced height for each card */
  border-radius: 8px;
  overflow: hidden;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure image fits within the card */
}


.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  z-index: 1;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
