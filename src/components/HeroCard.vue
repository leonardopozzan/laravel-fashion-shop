<template>
    <div class="hero-card">
        <div class="overlay"></div>
        <img src="../img/main-image.jpg" alt="products">
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
        color: $green;
        padding: 12px 26px;
        transition: all 0.2s ease-out;

        &:hover {
            background-color: $green;
            color: $pink;
        }
    }
}
</style>