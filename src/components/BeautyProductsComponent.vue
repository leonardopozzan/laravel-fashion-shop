<template>
    <div class="beauty-container d-flex align-items-center">
        <div class="image">
            <img src="../img/test-image.jpg" alt="image-test">
        </div>
        <div class="description d-flex align-items-center justify-content-center">
            <p><span>BEAUTY</span><span>PRODUCTS</span></p>
        </div>
    </div>
    <BeautyCardComponent></BeautyCardComponent>
</template>

<script>
import BeautyCardComponent from './BeautyCardComponent.vue';


export default {
    name: "BeautyProducts",
    components: { BeautyCardComponent },


    data() {
        return {
        }
    },



}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.beauty-container {
    // height: 80vh;
    padding: 200px 30px;
    background-color: $white;
    

    .image {
        // margin-top: -280px;
        // z-index: 999;
        // height: 70%;
        width: 400px;
        height: 600px;
        border-radius: 20px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }


    .description {
        height: 100%;
        width: 75vw;
        font-size: $font-extra-large;
        font-weight: $font-w-bold;

        p {
            color: $green;

            span {
                display: block;

                &:nth-child(2) {
                    padding-left: 250px;
                }

            }

        }
    }

}
</style>