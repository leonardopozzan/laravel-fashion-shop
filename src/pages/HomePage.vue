<template>
    <HeroComponent :isVisible="true"></HeroComponent>
    <CarouselComponent></CarouselComponent>
    <BeautyProductsComponent></BeautyProductsComponent>


</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import BeautyProductsComponent from '../components/BeautyProductsComponent.vue';
import CarouselComponent from '../components/CarouselComponent.vue';

export default {
    name: "HomePage",
    components: { HeroComponent, BeautyProductsComponent, CarouselComponent , },
}

</script>

<style lang="scss" scoped>

</style>