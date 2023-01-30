<template>
    <div class="cards-container d-flex flex-wrap" id="container-media">
        <div class="col-md-4 col-sm-12 col-12 single-card-container">
            <div class="image-card">
                <img src="\img\open-uri20180708-4-4bvqii.jpg" alt="">
            </div>
            <div class="mt-4">
                <h4>No Filter Foundation</h4>
            </div>
            <button class="custom-btn btn-12 mt-5"><span>Click me!</span><span>Read More</span></button>
        </div>
        <div class="col-md-4 col-sm-12 col-12 single-card-container">
            <div class="image-card">
                <img src="\img\open-uri20180708-4-13okqci.jpg" alt="">
            </div>
            <div class="mt-4">
                <h4>Lippie Pencil</h4>
            </div>
            <button class="custom-btn btn-12 mt-5"><span>Click me!</span><span>Read More</span></button>
        </div>
        <div class="col-md-4 col-sm-12 col-12 single-card-container">
            <div class="image-card">
                <img src="\img\open-uri20180630-4-1bl3btv.jpg" alt="">
            </div>
            <div class="mt-4">
                <h4>Bronzer - loose</h4>
            </div>
            <button class="custom-btn btn-12 mt-5"><span>Click me!</span><span>Read More</span></button>
        </div>
    </div>

</template>

<script>

export default {
    name: 'BeautyCardComponent',
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;


.cards-container {
    display: flex;
    min-height: 70vh;

    .single-card-container {
        background-color: $rich-green;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;

        &:nth-child(2) {
            background-color: $pink;
        }

        &:last-child {
            background-color: $prova-pink;
        }

        .image-card {
            // width: 45%;
            // height: 50%;
            // min-height: 120px;
            max-width: 250px;
            aspect-ratio: 1/1;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: fill;
                transition: 1.2s;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                }
            }

        }

        div h4 {
            color: $white;
            text-align: center;
        }

        .btn-12 {
            position: relative;
            bottom: 20px;
            border: none;
            box-shadow: none;
            width: 130px;
            line-height: 42px;
            -webkit-perspective: 230px;
            perspective: 230px;
            color: $white;
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
            // border-radius: 5px;
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

    @media (max-width: 768px) {
        .single-card-container {
            padding: 42px !important;
        }

    }
}
</style>