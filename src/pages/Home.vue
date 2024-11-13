<template>
  <div>
    <router-view></router-view>
    <div class="flex flex-col gap-28">
      <div class="container">
        <HitSale/>
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

export default {
  components: {
        HitSale
  },
};
</script>
<style scoped></style> 

