<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold">Xit savdo</h2>
            <a class="text-blue-600 text-[16px]" href="/">Barchasini ko'rishXit savdo  <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div class="grid grid-cols-5 gap-6">
        <div v-for="item in cardData" :key="item.id"
            class="relative overflow-hidden group   max-w-[300px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
        >
            <a href="#">
            <img
                class="w-full rounded-lg"
                :src="item.url"
                alt=""
            />
            </a>
            <div className="absolute top-0 -right-11 group-hover:right-3 p-2 flex flex-col items-center justify-center gap-y-2  opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full">
                <i class="fa-regular fa-heart"></i>
            </div>
          </button>
          <span class="flex justify-center items-center w-8 h-8 bg-white rounded-full">
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </span>
          <!-- <Link className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"><BsEyeFill/></Link> -->
        </div>
            <div class="p-5">
            <p class="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                {{ item.title }}
            </p>
            <div
                class="rounded-2xl bg-[#f4f4f4] w-full flex items-center justify-center max-w-[200px] my-6"
            >
                <span>{{ item.desc }}</span>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-xl">2 435 000 so'm</p>
                <button
                class="border-2 border-[#FF6600] py-[6px] px-2 rounded-lg text-[16px]"
                >
                <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            cardData:[]
        }
    },
    mounted(){
        this.cardData=[
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3572/357273/198559/fef772b0-41e7-4ce0-9fd5-b6e27b17e35f-medium.webp',
          title: "Kir yuvish mashinasi Haier HW60-BP10919B",
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc:"254 620 so'mdan / 24 oy",
          id:2
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3572/357273/198559/fef772b0-41e7-4ce0-9fd5-b6e27b17e35f-medium.webp',
          title: "Kir yuvish mashinasi Haier HW60-BP10919B",
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc:"254 620 so'mdan / 24 oy",
          id:3
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3572/357273/198559/fef772b0-41e7-4ce0-9fd5-b6e27b17e35f-medium.webp',
          title: "Kir yuvish mashinasi Haier HW60-BP10919B",
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc:"254 620 so'mdan / 24 oy",
          id:4
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3572/357273/198559/fef772b0-41e7-4ce0-9fd5-b6e27b17e35f-medium.webp',
          title: "Kir yuvish mashinasi Haier HW60-BP10919B",
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc:"254 620 so'mdan / 24 oy",
          id:5
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/3572/357273/198559/fef772b0-41e7-4ce0-9fd5-b6e27b17e35f-medium.webp',
          title: "Kir yuvish mashinasi Haier HW60-BP10919B",
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc:"254 620 so'mdan / 24 oy",
          id:6
        },
        ]
    }
  };
  </script>
  
  <style></style>
  