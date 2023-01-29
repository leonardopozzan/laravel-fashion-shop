<template>
  <HeaderComponent />
  <div>
    <router-view></router-view>
  </div>
  <BrandCarouselComponent></BrandCarouselComponent>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BrandCarouselComponent from './components/BrandCarouselComponent.vue';
import ChatComponent from './components/ChatComponent.vue';
import ScrollTopComponent from './components/ScrollTopComponent.vue';



export default {
  data() {
    return {
    }
  },

  components: { HeaderComponent, FooterComponent, ChatComponent, ScrollTopComponent }
}
</script>

<style lang="scss" scoped>



</style>