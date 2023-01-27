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


export default {
  data() {
    return {
      title: "Hello world!",
    };
  },
  components: { HeaderComponent, FooterComponent, BrandCarouselComponent }
}
</script>

<style lang="scss" scoped>

</style>