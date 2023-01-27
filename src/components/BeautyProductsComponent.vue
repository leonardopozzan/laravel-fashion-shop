<template>
    <div class="parallax">
        <div class="beauty-container d-flex align-items-center justify-content-end">
            <div class="description d-flex align-items-center justify-content-end">
                <p><span>BEAUTY</span><span>PRODUCTS</span></p>
            </div>
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

.parallax {
    background-image: url("img/deh.jpg");

    height: 100%;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.beauty-container {
    // height: 80vh;
    margin-top: 200px;
    padding: 200px 30px;
    

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
            color: $white;

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