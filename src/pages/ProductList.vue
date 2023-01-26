<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <section>
        <div class="my-container">
            <div class="d-flex justify-content-between">
                <div class="mb-4">
                    <h1 class="titolo text-uppercase">Make up</h1>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div class="carta" v-for="(product, i) in products" :key="i">
                <CardComponent :product="product" />
            </div>
            <div class="d-flex justify-content-center">
                <nav aria-label="Page navigation example d-flex justify-content-center">
                    <ul class="pagination mt-5">
                        <li class="page-item " :class="{ 'disabled': currentPage === 1 }">
                            <a class="page-link" @click="getProducts(currentPage - 1)" :disabled="currentPage === 1">Previous</a>
                        </li>
                        <li class="page-item" :class="{ 'disabled': currentPage === n }" v-for="n in lastPage">
                            <a class="page-link" @click="getProducts(n)" :disabled="currentPage === n">{{ n }}</a>
                        </li>
                        <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                            <a class="page-link" @click="getProducts(currentPage + 1)" :disabled="currentPage === lastPage">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';
export default {
    name: 'ProductList',
    components: { CardComponent },
    data() {

        return {
            store,
            products: [],
            currentPage: 1,
            lastPage: null,
            total: 0,
        }

    },


    methods: {

        getProducts(pagenum) {
            // console.log(pagenum);
            // console.log(this.currentPage);
            axios.get(`${this.store.apiUrl}/products`, {
                params: {
                    page: pagenum
                }
            }).then((response) => {
                //console.log(response.data.results);
                this.products = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
            });
        }

    },



    mounted() {

        this.getProducts(this.currentPage);

    },
    components: { CardComponent, HeroComponent }



}


</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

section {
    position: relative;
    margin-top: -70px;
    z-index: 999;
}

.my-container {
    margin: 0 auto;
    max-width: 1000px;
    padding: 24px 30px;
    background-color: white;
}

.icon {
    color: $rich-green;
}

.carta {
    margin-bottom: 30px;
}

.titolo {
    font: normal normal normal 30px/1.4em'libre baskerville', serif;
    color: $pink;
}

.page-item {
    cursor: pointer;
}

nav {
    a {
        background-color: $pink !important;
        border: 1px solid pink;
        color: white;

        &:hover {
            color: $rich-green;
        }
    }
}
</style>