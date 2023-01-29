<template>
    <div class="py-5">
        <div class="col-12 text-center pt-3 pb-1">
            <div class="section-title ">
                <h2 class="title text-capitalize fw-bold mt-4">Our main sponsor</h2>
            </div>
        </div>

        <div class="mb-4 pb-1">
            <carousel :itemsToShow="3.95" :wrapAround="true" :transition="3000" :autoplay="1000">
                <slide v-for="(slide, index) in homePaths" :key="index">
                    <div class="col-6">
                        <img class="carousel__item" :src="slide.path" :alt="slide.alt">
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


export default {
    name: 'BrandCarouselComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: function () {
        return {

            homePaths: [
                {
                    path: '/img/team-secret-logo.svg',
                    alt: 'team-secret-logo',

                    info: 'makeup',
                    id: 1,
                },
                {
                    path: 'img/dior.svg',
                    alt: 'dior',
                    info: 'makeup',
                    id: 2,
                },
                {
                    path: 'img/h-m.svg',
                    alt: 'h-m',
                    info: 'makeup',
                    id: 3,
                },
                {
                    path: 'img/zara.svg',
                    alt: 'zara',
                    info: 'makeup',
                    id: 4,
                },
                {
                    path: 'img/guess-2.svg',
                    alt: 'guess',
                    info: 'makeup',
                    id: 5,
                },
                {
                    path: 'img/chanel-logo.svg',
                    alt: 'chanel',
                    info: 'makeup',
                    id: 6,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

h2 {
    // font-size: $font-medium-large;
    font-size: 30px;
    font-weight: bold;
    color: $rich-green;
}
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

img {
    width: 120px;
}


</style>