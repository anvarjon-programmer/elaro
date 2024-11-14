<template>
  <div>
    <router-view></router-view>
    <div class="container">
      <Hero/>
      <Brands/>
      <div>
        <HitSale/>
      </div>
       <div class="">
      <NewProduct/>
       <LogoBrand/>

       </div>      
      <div>
        <footer/>
      </div>
    </div>
  </div>
</template>
<script>
import DownloadApp from "@/components/DownloadApp.vue";
import HitSale from "@/components/hitSale/HitSale.vue";
import Hero from "./hero/Hero.vue";
import Brands from "./Brands.vue";
import NewProduct from "./NewProduct.vue";
import LogoBrand from "./LogoBrand.vue";

export default {
  components: {
        HitSale,
        Hero,
        Brands,
        NewProduct,
        LogoBrand
  },
};
</script>
<style scoped></style> 

