<template>
    <section>
        <div class="my-container">
            <h1 class="titolo">Make up</h1> 
            <div class="carta" v-for="(product, i) in products" :key="i">
                <CardComponent :product="product" />
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';
export default {
    name: 'ProductList',
    components: { CardComponent },
    data() {

        return {
            store,
            products: [],
           
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
    components: { CardComponent }



}


</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
.my-container{
    margin: 0 auto;
    max-width: 1000px;
    
    // background-color: rgb(206, 99, 179);

}
.carta{
    margin-bottom: 30px;
}
.titolo{
    margin-bottom: 20px;
    color: $pink;
}
</style>