<template>
    <HeroComponent :isVisible="true"></HeroComponent>
    <BeautyProductsComponent></BeautyProductsComponent>
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import HeroCard from '../components/HeroCard.vue';
import BeautyProductsComponent from '../components/BeautyProductsComponent.vue';

export default {
    name: "HomePage",
    components: { HeroComponent, BeautyProductsComponent },
}

</script>

<style lang="scss" scoped>

</style>