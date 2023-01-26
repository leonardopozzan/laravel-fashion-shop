<template>
    <footer>
        <div class="footer-container container-sm py-5 d-flex align-items-center justify-content-between">

        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

footer {
    background-color: $white;
    border: 1px solid red;


    .footer-container {
        height: 60vh;
    }


    form {

        width: 30%;
        height: 100%;

    }


    .follow {
        height: 100%;
    }


}
</style>