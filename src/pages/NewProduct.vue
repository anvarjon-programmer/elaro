<template>
    <div class="">
      <div class=" mt-[50px]">
        <h2 class="text-2xl font-bold">Yangi mahsulotlar</h2>
      </div>
      <CardProduct :products="products" />
    </div>
  </template>
  
  <script>
import CardProduct from '@/components/CardCarousel/CardProduct.vue';

  
  export default {
    components: {
      CardProduct,
    },
    data() {
      return {
        products: [
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3579/357936/203900/214332ea-ff26-48d7-b417-63974a3c0e56-medium.webp',
          title: 'LG 86UT81006LA Smart Televizori',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 901 667 so'mdan / 24 oy",
          price:"28 000 000",
          id: 3,
        },
        
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3579/357936/203900/214332ea-ff26-48d7-b417-63974a3c0e56-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3579/357936/203900/214332ea-ff26-48d7-b417-63974a3c0e56-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
          // Yana boshqa mahsulotlar...
        ],
      };
    },
  };
  </script>
  