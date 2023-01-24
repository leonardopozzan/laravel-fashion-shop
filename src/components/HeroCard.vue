<template>
    <div class="hero-card">
        <img src="../img/makeup-products.jpg" alt="products">
        <a href="#"><button type="button">View more</button></a>
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

    img {
        width: 100%;
        height: 100%;
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