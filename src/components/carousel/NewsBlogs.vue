<template>
    <div>
        <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold">Yangiliklar va bloglar</h2>
      <a class="text-blue-600 text-[16px]" href="/">Barchasini ko'rish Xit savdo  <i class="fa-solid fa-arrow-right-long"></i></a>
    </div>

    
     <div class="flex items-center justify-between gap-4">
    <div class="max-w-sm bg-white" v-for="item in cardData" :key="item.id">
        <a href="#">
            <img class="rounded-t-lg h-[200px] w-full object-cover" :src="item.url" alt="" />
        </a>
        <div class="p-5">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">24 Avgust 2023</p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
        </div>
    </div>
</div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      cardData: [
        {
            url: 'https://mini-io-api.texnomart.uz/newcontent/image/news/bDf4SHRDKjdPY5Y69fMVTI2wiLwg2NOkIbLeJ3v7.webp',
          title: ' Uyingiz uchun konditsionerni qanday tanlash mumkin?',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: '254 620 so\'mdan / 24 oy',
          id: 2,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/image/news/bDf4SHRDKjdPY5Y69fMVTI2wiLwg2NOkIbLeJ3v7.webp',
          title: ' Uyingiz uchun konditsionerni qanday tanlash mumkin?',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: '254 620 so\'mdan / 24 oy',
          id: 3,
        },
        {
            url: 'https://mini-io-api.texnomart.uz/newcontent/image/news/bDf4SHRDKjdPY5Y69fMVTI2wiLwg2NOkIbLeJ3v7.webp',
          title: ' Uyingiz uchun konditsionerni qanday tanlash mumkin?',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: '254 620 so\'mdan / 24 oy',
          id: 4,
        },
        
        
      ],
    };
  },
}
</script>
<style>
    
</style>