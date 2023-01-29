<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <section v-if="product" class="p-4 d-flex justify-content-center mt-5">
        <div class="single-card row">
            <div class="img-box col-lg-6 col-md-6 col-sm-12">
                <img v-if="product.image" :src="`${store.imagePath}${product.image}`" class="card-img-top single-img" alt="...">
                <img v-else src="https://picsum.photos/1200/600?random=1" class="card-img-top single-img">
                <div class="price">{{ product.price }}&euro;</div>
            </div>
            <div class="single-info d-flex flex-column justify-content-around col-lg-6 col-md-6 col-sm-12">
                <div class="first-info">
                    <h1 class="text-capitalize mb-4 title">{{ product.name }}</h1>
                    <div class="description">
                        <p v-if="product.description" class="m-0">{{ product.description }}</p>
                    </div>
                </div>
                <div class="second-info">
                    <div class="d-flex justify-content-around text-capitalize mb-4">
                        <div class="d-flex flex-column">
                            <div class="mb-2">Tipo:</div>
                            {{ product.type.name }}
                        </div>
                        <div class="d-flex flex-column">
                            <div class="mb-2">Categoria:</div>
                            {{ product.category.name }}
                        </div>
                        <div class="d-flex flex-column">
                            <div class="mb-2">Brand:</div>
                            {{ product.brand.name }}
                        </div>
                    </div>
                    <div class="bd"></div>
                    <div class="mt-4">
                        <div class="d-flex justify-content-around">
                            <div>Rating:{{ product.rating }} </div>
                            <div>{{ product.available ? 'Disponibile' : 'Non disponibile' }}</div>
                            <div><i class="fa-regular fa-heart"></i></div>
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
                product: null
            }
        },

        methods: {
            getProduct() {
                axios.get(`${this.store.apiUrl}/products/${this.$route.params.slug}`).then((response) => {
                    if (response.data.success) {
                        this.product = response.data.results;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                });
            },
            truncateContent(text) {
                if (text.length > this.contentMaxLen) {
                    return text.substr(0, this.contentMaxLen) + "...";
                }
                return text;
            }
        },
        mounted() {
            this.getProduct();
        }

    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.single-card {
    width: 1100px;
    color: $rich-green;
    border-width: 1px;
    border-color: rgba(230, 190, 190, 0.97);
    border-style: solid;

    .img-box {
        position: relative;
        padding: 0;
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