<template>
    <div class="hero-card">
        <div class="overlay"></div>
        <video src="video\pexels-thirdman-8056845.mp4" autoplay muted loop class="w-100"></video>
        <router-link :to="{ name: 'products' }"><button type="button">View more</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'HeroCard',
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.hero-card {
    width: 100%;
    position: relative;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        opacity: 0;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    button {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        border: 0px;
        background-color: $pink;
        color: $rich-green;
        padding: 12px 26px;
        transition: all 0.2s ease-out;

        &:hover {
            background-color: $rich-green;
            color: $pink;
        }
    }
}
</style>