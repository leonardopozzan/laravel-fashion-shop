<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <section class="container py-4">
        <router-link :to="{ name: 'products'}"><h4 class="backwards"><i class="fa-solid fa-circle-arrow-left fs-6"></i> Prodotti</h4></router-link>
        <div v-if="products" class=" d-flex justify-content-center mt-5">
            <div class="single-card row">
                <div class="img-box col-lg-6 col-md-6 col-sm-12">
                    <div class="d-flex">
                        <img v-if="products.image" :src="`${store.imagePath}${products.image}`" class="card-img-top single-img" alt="...">
                        <img v-else src="https://picsum.photos/1200/600?random=1" class="card-img-top single-img">
                    </div>
                    <div class="price">{{ products.price }}&euro;</div>
                </div>
                <div class="single-info d-flex flex-column justify-content-around col-lg-6 col-md-6 col-sm-12">
                    <div class="first-info">
                        <h1 class="text-capitalize mb-4 title">{{ products.name }}</h1>
                        <div class="description mb-4">
                            <p v-if="products.description" class="m-0">{{ products.description }}</p>
                        </div>
                    </div>
                    <div class="second-info">
                        <div class="row text-capitalize justify-content-around mb-4">
                            <div class="col-lg-3 col-md-3 col-3">
                                <div class="mb-2 fw-bold">Tipo:</div>
                                {{ products.type.name }}
                            </div>
                            <div class="col-lg-3 col-md-3 col-3">
                                <div class="mb-2 fw-bold">Categoria:</div>
                                {{ products.category.name }}
                            </div>
                            <div class="col-lg-3 col-md-3 col-3">
                                <div class="mb-2 fw-bold">Brand:</div>
                                {{ products.brand.name }}
                            </div>
                        </div>
                        <div class="bd"></div>
                        <div class="my-4">
                            <div class="row justify-content-around">
                                <div class="col-lg-3 col-md-3 col-3"><span class="fw-bold">Rating:</span> {{ products.rating }} </div>
                                <div class="fw-bold col-lg-3 col-md-3 col-3">{{ products.available ? 'Disponibile' : 'Non disponibile' }}</div>
                                <div class="col-lg-3 col-md-3 col-3"><i class="fa-regular fa-heart"></i></div>
                            </div>
                        </div>
                        <div class="bd"></div>
                        <div class="mt-4">
                            <div class="row justify-content-around">
                                <div class="fw-bold mb-2 col-lg-1 col-md-12 col-1">Tags:</div>
                                <div class="col-lg-9 col-md-12 col-9" v-if="products.tags && products.tags.length > 0">
                                    <div class="row">
                                        <div v-for="(tag, index) in products.tags" class="col-lg-5 col-md-5 col-sm-4 col-4" :key="index">{{ tag.name }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import HeroComponent from '../components/HeroComponent.vue';

    export default {
        name: 'SinglePage',
        components: {
            HeroComponent
        },
        data() {
            return {
                store,
                products: null,
                tags: []
            }
        },

        methods: {
            getProduct() {
                axios.get(`${this.store.apiUrl}/products/${this.$route.params.slug}`).then((response) => {
                    if (response.data.success) {
                        this.products = response.data.results;
                        this.tags = response.data.tags;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                });
            },
        },
        mounted() {
            this.getProduct();

        }

    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.backwards {
    font: normal normal normal 20px/35px "libre baskerville", serif;
    cursor: pointer;
    transform-origin: 0;
    transition: all .55s;

    &:hover {
        color: $pink;
        transform: scale(1.3);
    }
}

.single-card {
    width: 1300px;
    color: $rich-green;
    border-width: 1px;
    border-color: rgba(230, 190, 190, 0.97);
    border-style: solid;

    .img-box {
        position: relative;
        padding: 0;

        img {
            // width: 400px;
            height: auto;
        }

        .price {
            font: normal normal normal 20px/35px "libre baskerville", serif;
            position: absolute;
            top: 0px;
            background-color: $pink;
            padding: 17px;
            // cursor: pointer;
            transform-origin: 0 0;
            // transition: transform .55s, visibility .55s ease-in;
            transition: all .55s;
            cursor: pointer;
    
            &:hover {
                background-color: $rich-green;
                color: $pink;
                transform: scale(1.3);
            }
        }
    }
    
    .single-info {
        padding: 20px 30px;

        .title {
            font: normal normal normal 32px/35px "libre baskerville", serif;
        }
        
        .first-info {
            margin-top: 30px;
            font: normal normal normal 16px/20px proxima-n-w01-reg, proxima-n-w05-reg, sans-serif;
        }
    
        .second-info {
            font: normal normal normal 14px/20px proxima-n-w01-reg, proxima-n-w05-reg, sans-serif;
            margin-bottom: 30px;
        }
    
        .bd {
            width: 100%;
            border-width: 1px;
            border-color: $rich-green;
            border-style: solid;
            margin-bottom: 20px;
        }
    
        i {
            color: $pink;
            transition: all .25s;
    
            &:hover {
                color: red;
                transform: scale(1.4);
            }
    
            cursor: pointer;
        }
    
    }
}

@media screen and (min-width: 500.98px) and (max-width: 768px) {
    .single-card {

        .img-box {
            margin-bottom: 20px;
        }

        .single-info {
            justify-content: space-between !important;
            gap: 15px;

            .first-info {
                margin-top: 0;
            }

            .second-info {
                margin-bottom: 0;
            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .single-card {

        .img-box {
            margin-bottom: 20px;
        }

        .single-info {
            gap: 9px;

            .first-info {
                margin-top: 0;
            }

            .second-info {
                margin-bottom: 0;
            }
        }
    }
}
</style>