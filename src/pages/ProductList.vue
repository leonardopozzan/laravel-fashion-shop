<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <section>
        <div class="my-container">
            <h1 class="titolo">Make up</h1>
            <div class="carta" v-for="(product, i) in products" :key="i">
                <CardComponent :product="product" />
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination mt-5">
                <li class="page-item " :class="{ 'disabled': currentPage === 1 }"><a class="page-link"
                        @click="getProducts(currentPage - 1)" :disabled="currentPage === 1">Previous</a></li>
                <li class="page-item" :class="{ 'disabled': currentPage === n }" v-for="n in lastPage"><a
                        class="page-link" @click="getProducts(n)" :disabled="currentPage === n">{{ n }}</a></li>
                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }"><a class="page-link"
                        @click="getProducts(currentPage + 1)" :disabled="currentPage === lastPage">Next</a></li>
            </ul>
        </nav>
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
            axios.get(`${this.store.apiUrl}/products`, {
                params: {
                    page: pagenum,
                    typeFilter: 8,
                    brandFilter : '',
                    categoryFilter : ''
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

        this.getProducts();

    },
    components: { CardComponent, HeroComponent }



}


</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;


section {
    position: relative;
    margin-top: -200px;
    z-index: 999;
}

.my-container {
    margin: 0 auto;
    max-width: 1000px;
    // background-color: $background;
    padding: 24px 58px;

    // background-color: rgb(206, 99, 179);

}

.carta {
    margin-bottom: 30px;
}

.titolo {
    margin-bottom: 20px;
    color: $pink;
}

.page-item {
    cursor: pointer;
}
</style>