<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <section>
        <div class="my-container">
            <div class="d-flex justify-content-between align-items-center my-nav">
                <div>
                    <h1 :class="{ hide: !isHidden }" class="titolo text-uppercase m-0">Make up</h1>
                </div>
                <div class="mb-4 row" :class="{ hide: isHidden }">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12"  id="type">
                        <label for="type">Tipo</label>
                        <select name="type" id="type-select" v-model="typeFilter">
                            <option value="" selected>--Please choose an option--</option>
                            <option v-for="(type, index) in types" :value="type.id" :key="index">{{ type.name }}</option>
                        </select>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12" id="category">
                        <label for="category">Categoria</label>
                        <select name="category" id="category-select" v-model="categoryFilter">
                            <option value="" selected>--Please choose an option--</option>
                            <option v-for="(category, index) in categories" :value="category.id" :key="index">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12" id="brand">
                        <label for="brand">Brand</label>
                        <select name="brand" id="brand-select" v-model="brandFilter">
                            <option value="" selected>--Please choose an option--</option>
                            <option v-for="(brand, index) in brands" :value="brand.id" :key="index">{{ brand.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="icon">
                    <i @click="getProducts(1)" :class="{ hide: isHidden }" class="fa-solid fa-magnifying-glass me-3"></i>
                    <i @click="isHidden = !isHidden" class="fa-solid fa-filter"></i>
                </div>
            </div>
            <div v-if="!products.length" class="no-card">
                <div class="no-result"></div>
            </div>
            <div v-else>
                <div class="carta" v-for="(product, i) in products" :key="i">
                    <CardComponent :product="product" />
                </div>
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

    <ChatComponent />
    <ScrollTopComponent />
</template>

<script>

import axios from 'axios';
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';
import ChatComponent from '../components/ChatComponent.vue';
import ScrollTopComponent from '../components/ScrollTopComponent.vue';
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
            isHidden: true,
            types: [],
            categories: [],
            brands: [],
            typeFilter: '',
            categoryFilter: '',
            brandFilter: '',
        }

    },


    methods: {

        getProducts(pagenum) {
            // console.log(pagenum);
            // console.log(this.currentPage);
            const data = {params: {
                    page: pagenum,
                    typeFilter: this.typeFilter,
                    categoryFilter: this.categoryFilter,
                    brandFilter: this.brandFilter
                }
            }
            axios.get(`${this.store.apiUrl}/products`, data).then((response) => {
                //console.log(response.data.results);
                this.products = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
            });
        },

        getProperties() {
            axios.get(`${this.store.apiUrl}/properties`).then((response) => {
                this.types = response.data.types;
                this.categories = response.data.categories;
                this.brands = response.data.brands;

            });
        }
    },



    mounted() {
        this.getProducts(this.currentPage);
        this.getProperties();
    },
    components: { CardComponent, HeroComponent, ChatComponent, ScrollTopComponent }



}


</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

#type,
#category,
#brand {
    display: flex;
    flex-flow: column;
}

.hide {
    display: none !important;
}

section {
    position: relative;
    z-index: 999;
}

.my-container {
    margin: 0 auto;
    max-width: 1000px;
    background-color: white;

    .my-nav {
        padding: 50px 20px;
        position: relative;
        background-color: white;
        height: 95px;
        top: -80px;
        margin-bottom: -50px;
    }

    select {
        background-color: $pink;
        border: 0;
        padding: 5px;
    }
}

.icon {
    cursor: pointer;
    color: $rich-green;
    font-size: 20px;
}

.no-card {
    padding: 0 20px;
    height: 350px;

    .no-result {
        width: 100%;
        height: 100%;
        background-image: url('https://lh3.googleusercontent.com/gPT2FaMFekwkQwicxgr0UAS5Y5Ux22OOaWGvlIu3MXq_tVvINXIl8xe05CIyJmfG6BC7vAr8Aw=w328-h348-no');
        background-repeat: no-repeat;
        background-size: 200px;
        background-position: 50% 40%;
        position: relative;

        &::after {
            content: 'No... no... no...';
            font-size: 2rem;
            font-family: Sans-serif;
            font-weight: bold;
            color: #575757;
            position: absolute;
            width: 100%;
            bottom: 10%;
            text-align: center;
        }
    }
}

.carta {
    margin-bottom: 30px;
    padding: 0 20px;
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

@media screen and (max-width: 575.98px) {
    .my-container {
    
        .my-nav {
            height: 250px;
            margin-bottom: -80px;
        }

        .icon {
            margin-left: 20px;
        }
    }
}

@media screen and (max-width: 576px) {
    .my-container {
        .icon {
            margin-left: 20px;
        }
    }
}

@media screen and (max-width: 768px) {
    .my-container {
        .icon {
            margin-left: 20px;
        }
    }
}
</style>