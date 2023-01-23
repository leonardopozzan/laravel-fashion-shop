<template>
    <HeroComponent :isVisible="true"></HeroComponent>
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import HeroCard from '../components/HeroCard.vue';

export default {
    name: "HomePage",
    components: { HeroComponent }
}
</script>

<style lang="scss" scoped>

</style>