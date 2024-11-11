<template>

    <router-view></router-view>
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

      <div class="container">
        <TestCarousel/>
      </div>
      <div class="container">
        <LogoCarousel/>
      </div>

      <div class="container">
        <Collection/>
      </div>

      <div class="container">
        <NewsBlogs/>
      </div>
      <div class="container hidden md:block">
        <DownloadApp/>
      </div>

      <div class="container">
        <PayInstallment/>
      </div>

      <div>
        <Footer/>
      </div>
     </div>

    
</template>
<script>
import CardCarousel from '@/components/CardCarousel.vue';
import DownloadApp from '@/components/DownloadApp.vue';
import Navbar from '@/components/Navbar.vue';
import PayInstallment from '@/components/PayInstallment.vue';
import Carousel from '@/components/carousel/Carousel.vue';
import Collection from '@/components/carousel/Collection.vue';
import LogoCarousel from '@/components/carousel/LogoCarousel.vue';
import NewsBlogs from '@/components/carousel/NewsBlogs.vue';
import TestCarousel from '@/components/carousel/TestCarousel.vue';
import UnderCarousel from '@/components/carousel/UnderCarousel.vue';
import Slick from 'vue-slick';

export default{
    components:{Navbar,
      Carousel,
      Slick,
      UnderCarousel,
      CardCarousel,
      TestCarousel,
      LogoCarousel,
      Collection,
      NewsBlogs,
      DownloadApp,
      PayInstallment,
    },
}

</script>
<style lang="">
    
</style>