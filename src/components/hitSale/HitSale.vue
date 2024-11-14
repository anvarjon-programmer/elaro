<template>
    <div class="">
      <div class="flex items-center justify-between mt-[50px]">
        <h2 class="text-2xl font-bold">Xit savdo</h2>
        <a href="#" class=" text-blue-800">
          Barchasini ko'rishXit savdo
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <CardProduct :products="products" />
    </div>
  </template>
  
  <script>
  import CardProduct from '../CardCarousel/CardProduct.vue';
  
  export default {
    components: {
      CardProduct,
    },
    data() {
      return {
        products: [
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Kir yuvish mashinasi Haier HW60-BP10919B',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: '254 620 so\'mdan / 24 oy',
          price:"10 599 000",
          id: 4,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
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
  