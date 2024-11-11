<template>
    <div class="container">
      <!-- Sidebar Section -->
      <aside class="sidebar">
        <ul class="overflow-y-scroll">
          <li 
            v-for="(item, index) in catalogBarLink" 
            :key="index" 
            class="sidebar-item" 
            @mouseenter="setActiveItem(item)"
            @mouseleave="setActiveItem(null)"
          >
            <div class="link">
              <span class="icon-text max-w-[250px]">
                <img :src="item.icon" class="icon" />
                {{ item.name }}
              </span>
              <i class="fa-solid fa-angle-right arrow pr-3"></i>
            </div>
          </li>
        </ul>
      </aside>
  
      <!-- Content Section -->
      <main class="content">
        <p v-if="activeItem">{{ activeItem.name }}</p>
      </main>
    </div>
  </template>
  
<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components:{
        Navbar
    },
    data(){
        return{
            activeItem: null,
            catalogBarLink:[
                {
                    name:"Smartfonlar va gadjetlar",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/19/a05699c9-17b3-41fb-b5c7-5e0b52db28cd.svg",
                   path:"/smartphone"
                },
                {
                    name:"Kompyuter texnikasi",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/10/1d442a2c-9b2a-46f6-95bb-3e8b93ec8022.svg",
                   path:"/computer"
                },
                {
                    name:"Televizorlar va audiotexnikalar",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/23/3f6aef7c-53f3-426a-aac5-b2fbc19e1b57.svg",
                   path:"/television"
                },
                {
                   name:"Iqlim texnikasi",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/115/d1f614ce-a042-4671-97f5-15493b966c49.svg",
                   path:"/climate"
                },
                {
                    name:"Maishiy texnika",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/2/f21971b7-7267-451b-b498-be6f5ba2905f.svg",
                   path:"/household"
                },
                {
                    name:"Ofis jihozlari",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/32/8568525c-31e1-4784-ad5c-0b30a55adbc5.svg",
                   path:"/office"
                },
                {
                    name:"Oshxona uchun texnika",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/65/d8f550b1-5587-4949-9da5-fb528a1bee4a.svg",
                   path:"/kitchen"
                },
                {
                    name:"Uy uchun idishlar",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/240/99625898-58f9-4c52-aad7-a0e4f7ee4a20.svg",
                   path:"/home"
                },
                {
                    name:"Avtomobil uchun mahsulotlar",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/108/43509e57-a2a4-4672-b89e-9a7902aca70e.svg",
                   path:"/car"
                },
                {
                    name:"Go'zallik va salomatlik",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/28/f3f20404-6933-40ce-8aac-d0a05c48c72c.svg",
                   path:"/beauty"
                },
                {
                    name:"Sport va sevimli mashg'ulot",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/173/8689aa4d-f542-4599-a347-839d2f4649d4.svg",
                   path:"/sports"
                },
                {
                    name:"Uy va bog‘ uchun mahsulotlar",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/1799/3e20ff42-2cd4-4880-8b22-2a730893b27a.svg",
                   path:"/garden"
                },
                {
                    name:"Aktsiyadagi mahsulotlar va chegirmalar",
                   icon:"https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/205/32e61ff7-fa01-4ad9-be93-410be0463036.svg",
                   path:"/discount"
                }

            ]
        }
    },
    methods: {
    setActiveItem(item) {
      this.activeItem = item;
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}

.sidebar {
  flex: 1;
  max-width: 400px;
  padding: 1rem;
}

.sidebar-item {
  list-style: none;
  cursor: pointer;
}

.link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;
  font-size: 12px;
}

.link:hover {
  background-color: rgba(251, 193, 0, .2);
  border-radius: 8px;
}

.icon-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 24px;
  height: 24px;
}

.arrow {
  transition: transform 0.3s;
}

.link:hover .arrow {
  transform: translateX(5px);
}

.content {
  flex: 3;
  padding: 1rem;
  background-color: #ffffff;
}

.content p {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
