<template>
    <HeroComponent :isVisible="true"></HeroComponent>
    <CarouselComponent></CarouselComponent>
    <BeautyProductsComponent></BeautyProductsComponent>
    <ChatComponent />
    <ScrollTopComponent />
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import BeautyProductsComponent from '../components/BeautyProductsComponent.vue';
import CarouselComponent from '../components/CarouselComponent.vue';
import ChatComponent from '../components/ChatComponent.vue';
import ScrollTopComponent from '../components/ScrollTopComponent.vue';

export default {
    name: "HomePage",
    components: { HeroComponent, BeautyProductsComponent, CarouselComponent, ChatComponent, ScrollTopComponent },
}

</script>

<style lang="scss" scoped>

</style>