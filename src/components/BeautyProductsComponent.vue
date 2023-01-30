<template>
    <div class="parallax">
        <div class="beauty-container">
            <div class="description">
                <span>BEAUTY</span><span>PRODUCTS</span>
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
    width: 100%;
    margin-top: 200px;
    padding: 200px 30px;

    .description {
        font-size: $font-extra-large;
        font-weight: $font-w-bold;
        color: $white;

        span {
            display: block;
            text-align: end;

            &:nth-child(1) {
                margin-right: 360px;
            }

        }


    }

}


@media (max-width: 1200px) {
    .description {
        transform: translateX(0) !important;
    }
}



@media (max-width: 768px) {


    .parallax {
        background-position: left center;
    }


    .beauty-container {

        padding-left: 20px;

        .description {
            width: 35vw !important;
            font-size: $font-medium-large !important;
        }


    }

}


@media (max-width: 522px) {

    .beauty-container {
        padding-left: 0;
        display: none;

        .description {
            font-size: 52px !important;
            padding: 20px;
            display: none;
        }


    }

}
</style>