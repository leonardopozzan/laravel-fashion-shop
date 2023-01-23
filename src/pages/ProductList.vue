<template>
    <div>
        <ul>
            <li v-for="(product, i) in products" :key="i">{{ product.name }}</li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ProductList',


    data() {

        return {

            products: [],
            currentPage: 1,

        }

    },


    methods: {

        getProducts() {

            const data = {
                params: { 'page': this.currentPage }
            }
            axios.get(`${store.apiUrl}/products`, data).then((response) => {
                console.log(response.data.results)
                // console.log(response.data.results);
                this.products = response.data.results.data;

            })
        }

    },



    mounted() {

        this.getProducts();

    },




}


</script>

<style lang="scss" scoped>

</style>