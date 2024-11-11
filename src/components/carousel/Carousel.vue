<template>
  <div class="relative flex items-center space-x-4 overflow-hidden rounded-[20px] z-10 mt-14">
    <div class="hidden md:block">
      <button
      @click="previousSlideWithReset"
      class="slider-button left-5 z-10 hidden md:block"
    >
      <i class="fa-solid fa-angle-left"></i>
    </button>
    </div>
    
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative w-full flex-shrink-0"
      >
        <img :src="image.url" :alt="image.alt" class="w-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center right-[950px] top-[250px]">
          <div class=" p-4 text-center rounded-md right-10 bg-white">
            <p class="text-xl font-bold text-black">{{ image.caption }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block">
      <button
      @click="nextSlideWithReset"
      class="slider-button right-5 hidden"
    >
      <i class="fa-solid fa-angle-right"></i>
    </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      currentSlide: 0,
      autoSlideInterval: null,
    };
  },
  mounted() {
    this.loadImages();
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    loadImages() {
      this.images = [
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/145/CD53qbPaHq1WHFPb8UwhLN5vztH73sXcWIdMv8xj.webp',
          alt: 'Image 1',
          caption: 'Yangi ta‘mni kashf eting!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          alt: 'Image 2',
          caption: 'Tefal yangiliklarini kutib oling!',
        },
        
      ];
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    previousSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
    resetAutoSlide() {
      this.stopAutoSlide();
      this.startAutoSlide();
    },
    nextSlideWithReset() {
      this.nextSlide();
      this.resetAutoSlide();
    },
    previousSlideWithReset() {
      this.previousSlide();
      this.resetAutoSlide();
    },
  },
};
</script>

<style scoped>
.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.slider-button:hover {
  background-color: #f1c40f;
  transform: translateY(-50%) scale(1.1);
}
</style>
