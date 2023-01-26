<template>
    <div class="container-beauty-cards d-flex">
        <div class="card-container">
            <div class="image">
                <img src="../img/test-image.jpg" alt="">
            </div>

            <div class="shop">
                <h3 class="mb-4 text-center">Prova</h3>
                <button class="custom-btn btn-12"><span>Click!</span><span>Read
                        More</span></button>
            </div>

        </div>

        <div class="card-container">
            <div class="image">
                <img src="../img/test-image.jpg" alt="">
            </div>

            <div class="shop">
                <h3 class="mb-4 text-center">Prova</h3>
                <button class="custom-btn btn-12"><span>Click!</span><span>Read
                        More</span></button>
            </div>

        </div>

        <div class="card-container">
            <div class="image">
                <img src="../img/test-image.jpg" alt="">
            </div>

            <div class="shop">
                <h3 class="mb-4 text-center">Prova</h3>
                <button class="custom-btn btn-12"><span>Click!</span><span>Read
                        More</span></button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BeautyCard',
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.card-container {
    width: calc(100% / 3);
    height: 100vh;
    background-color: $rich-green;
    position: relative;


    &:nth-child(2) {
        background-color: $pink;
    }

    &:last-child {
        background-color: $prova-pink;
    }

    .image {
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        overflow: hidden;
    }


    .shop {
        position: absolute;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%);


        .btn-12 {
            position: relative;
            bottom: 20px;
            border: none;
            box-shadow: none;
            width: 130px;
            line-height: 42px;
            -webkit-perspective: 230px;
            perspective: 230px;
        }

        .btn-12 span {
            background: rgba(0, 172, 238, 0.1);
            background: linear-gradient(0deg, rgba(153, 153, 153, 0.3) 0%, rgba(153, 153, 153, 0.3) 100%);
            display: block;
            position: absolute;
            width: 130px;
            height: 40px;
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                7px 7px 20px 0px rgba(0, 0, 0, .1),
                4px 4px 5px 0px rgba(0, 0, 0, .1);
            border-radius: 5px;
            margin: 0;
            text-align: center;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: all .3s;
            transition: all .3s;
        }

        .btn-12 span:nth-child(1) {
            box-shadow:
                -7px -7px 20px 0px #fff9,
                -4px -4px 5px 0px #fff9,
                7px 7px 20px 0px #0002,
                4px 4px 5px 0px #0001;
            -webkit-transform: rotateX(90deg);
            -moz-transform: rotateX(90deg);
            transform: rotateX(90deg);
            -webkit-transform-origin: 50% 50% -20px;
            -moz-transform-origin: 50% 50% -20px;
            transform-origin: 50% 50% -20px;
        }

        .btn-12 span:nth-child(2) {
            -webkit-transform: rotateX(0deg);
            -moz-transform: rotateX(0deg);
            transform: rotateX(0deg);
            -webkit-transform-origin: 50% 50% -20px;
            -moz-transform-origin: 50% 50% -20px;
            transform-origin: 50% 50% -20px;
        }

        .btn-12:hover span:nth-child(1) {
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                7px 7px 20px 0px rgba(0, 0, 0, .1),
                4px 4px 5px 0px rgba(0, 0, 0, .1);
            -webkit-transform: rotateX(0deg);
            -moz-transform: rotateX(0deg);
            transform: rotateX(0deg);
        }

        .btn-12:hover span:nth-child(2) {
            box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
                7px 7px 20px 0px rgba(0, 0, 0, .1),
                4px 4px 5px 0px rgba(0, 0, 0, .1);
            color: transparent;
            -webkit-transform: rotateX(-90deg);
            -moz-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
        }

    }

}
</style>