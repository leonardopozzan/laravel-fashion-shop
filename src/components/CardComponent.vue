<template>
    <div class="my-card bordo">
        <div class=" divisorio">
            <div class="images">
                <img :src="`${store.imagePath}${product.image}`" class="img-fluid" alt="...">
                <div class="price">{{ product.price }}&euro;</div>
            </div>
            <div class="description">
                <div class="my-card-body">
                    <div class="my-card-info d-flex flex-column">
                        <h1 class="my-card-title mb-4">{{ product.name }}</h1>
                        <!-- <div class="details">Description:</div> -->
                        <p v-if="product.description" class="my-card-text"> {{ truncateContent(product.description) }}</p>
                    </div>
                    <div class="w-100">
                        <div class="bd"></div>
                        <div class="oltre-riga">
                            <div>Rating:{{ product.rating }} </div>
                            <div>{{ product.available ? 'Disponibile' : 'Non disponibile'  }}</div>
                            <div><i class="fa-regular fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    data() {
        return {
            store,
            contentMaxLen: 350,
        }
    },
    methods: {
        truncateContent(text) {
            if (text.length > this.contentMaxLen) {
                return text.substr(0, this.contentMaxLen) + "...";
            }
            return text;
        }
    },
    props: ['product'],
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.divisorio {
    display: flex;
    color: $rich-green;
}

.images {
    width: 40vw;
    height: 35vh;
    object-fit: cover;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }

    .price {
        font: normal normal normal 15px/35px "libre baskerville", serif;
        position: absolute;
        top: 0px;
        // right: -30px;
        background-color: $pink;
        padding: 5px 7px;
        // border-radius: 5px;
        cursor: pointer;
        transform-origin: 0 0;
        transition: transform .25s, visibility .25s ease-in;

        &:hover {
            transform: scale(1.2);
        }

    }
}

.description {
    width: 60vw;
    height: 35vh;
}

.my-card-title {
    font: normal normal normal 32px/35px "libre baskerville", serif;
    cursor: pointer;
    // margin-top: 40px;
    transition: all .25s;

    &:hover {
        color: $pink;
    }
}

.my-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;

}

.my-card-text {
    overflow-y: auto;
    font: normal normal normal 16px/20px proxima-n-w01-reg, proxima-n-w05-reg, sans-serif;
    line-height: 1.5;

    &::-webkit-scrollbar {
        display: none;
    }

    
    cursor: pointer;
    transition: all .25s;

    &:hover {
        color: $pink;
    }

}

.bordo {
    border-width: 1px;
    border-color: rgba(230, 190, 190, 0.97);
    border-style: solid;
}

.bd {
    width: 100%;
    border-width: 1px;
    border-color: $rich-green;
    border-style: solid;
    margin-bottom: 20px;
}

.oltre-riga {
    font: normal normal normal 14px/20px proxima-n-w01-reg, proxima-n-w05-reg, sans-serif;

    width: 100%;
    // height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
}

i {
    color: $pink;

    &:hover {
        color: red;
    }

    cursor: pointer;
}
</style>