<template>
    <div>
        <div class="hero container-fluid text-center p-0" :class="{ 'nav-height': !isVisible }">
            <div class="overlay"></div>
            <img src="../img/sfondo2-vale.jpg" alt="hero">
            <h1 class="mt-5">Boolucci Makeup</h1>
            <div class="card-position" v-if="isVisible">
                <HeroCard></HeroCard>
            </div>
        </div>
    </div>
</template>

<script>
import HeroCard from './HeroCard.vue';


export default {
    name: "HeroComponent",
    components: { HeroCard },

    data() {
        return {

        }
    },
    props: {
        isVisible: Boolean,
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.hero {
    position: relative;
    color: $lightpink;
    height: 75vh;

    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: black;
        opacity: 0.4;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    h1 {
        position: absolute;
        top: 1.8rem;
        left: 50%;
        transform: translate(-50%);
    }

    .card-position {
        width: 40%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}
</style>