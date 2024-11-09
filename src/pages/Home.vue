<template>
    <div class="mb-[35px] z-50">
        <Navbar/>
    </div>
     <div class="flex flex-col gap-28">
        <div class="container pb-10 mt-6 mb-11">
        <Carousel/>
    </div>
    <div class="container  pt-20 mt-[35px]">
        <UnderCarousel/>
    </div>
      <div class="container">
        <CardCarousel/>
      </div>
     </div>

    
</template>
<script>
import CardCarousel from '@/components/CardCarousel.vue';
import Navbar from '@/components/Navbar.vue';
import Carousel from '@/components/carousel/Carousel.vue';
import UnderCarousel from '@/components/carousel/UnderCarousel.vue';
import Slick from 'vue-slick';

export default{
    components:{Navbar,Carousel,Slick,UnderCarousel,CardCarousel},
    
}

</script>
<style lang="">
    
</style>