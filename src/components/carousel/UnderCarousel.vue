<template>
  <VueAIcarousel :Property="{ID: 'One',}">

<div v-for="object in objects" v-bind:key="object.id" class="roundet-lg">
  <img :src="object.url" class="h-full object-cover"/>
  <div class="absolute right-0 z-40">
          <div class="text-center rounded-md">
            <p class="font-bold text-black text-[12px]">{{ object.caption }}</p>
          </div>
        </div>
</div>

</VueAIcarousel>
</template>
<script>
import VueAIcarousel from "vue-ai-carousel"
export default {
  components:{
    VueAIcarousel,
  },
  data(){
    return{
      objects:[]
    }
  },
  mounted(){
    this.objects =[
    {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/4/aa4237cb-9bc4-4941-8535-277ca7831f48.png',
          caption: 'SmartfonlarSmartfonlar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/8/61521f46-27bb-4ba1-8fa7-34f3bc6e9530.png',
          caption: 'Havo sovutgichlarHavo sovutgichlar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/5/ade607e8-e08e-40a1-85c1-b291327fe412.png',
          caption: 'ChangyutgichlarChangyutgichlar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/7/74a09808-7198-496a-b704-158399923abd.png',
          caption: 'MuzlatgichlarMuzlatgichlar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/22/1f3896fc-fbb9-4d2f-ac2e-17df4bf4959b.png',
          caption: 'NoutbuklarNoutbuklar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/newcontent/slider/132/t3GMzHXJvMBSDiZxobHfax678PqbvGVBWuGeDUqz.webp',
          caption: 'bg-red-500',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/9/e84d9227-6eef-4f6c-94f4-a26258c5d5a1.png',
          caption: 'TelevizorlarTelevizorlar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/23/a206c805-83f1-4965-9da7-876b8124fcee.png',
          caption: 'Qahva mashinalariQahva mashinalari',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/11/b9e70df6-9f7a-49aa-a5fc-7ebd8e517ab6.png',
          caption: 'Kir yuvish mashinalari',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/10/d234e541-a133-4377-a68f-fbf28d5901b4.png',
          caption: 'Fenlar',
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/special-category/6/dd88365c-fc33-4062-a6fe-aa2e0d5b4dd8.png',
          alt: 'Image 2',
          caption: 'Planshetlar',
        },

    ]
  }
 
}
</script>
<style>
  
</style>