<template>
    <div class="my-card bordo">
        <div class=" divisorio">
            <div class="images">
                <img :src="`${store.imagePath}${product.image}`" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="description">
                <div class="my-card-body">
                    <h1 class="my-card-title">{{ product.name }}</h1>
                    <div class="details">Description:</div>
                    <p class="my-card-text"> {{
                        truncateContent(product.description )
                    }}</p>
                    <div class="oltre-riga">
                        <div class="rating">Rating:{{ product.rating }} </div>
                        <div><i class="fa-regular fa-heart"></i></div>
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
}

.images {
    width: 40vw;
    height: 35vh;
    object-fit: cover;

    // box-shadow: 0px 0px 30px 8px  rgb(70, 66, 66);
    img {
        width: 100%;
        height: 100%;
    }
}

.description {

    width: 60vw;
    height: 35vh;
}

.my-card-title {
    cursor: pointer;
    padding-top: 10px;

    &:hover {
        color: $pink;

    }
}

.my-card-body {
    height: 100%;
    color: $green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.my-card-text {
    height: 30vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    margin-top: 10px;
    margin-left: 30px;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        color: $pink;

    }

    border-bottom: 1px solid black;
}

.bordo {
    // border: 1px solid lightpink;
    padding: 6px;
    border-radius: 11px;
    background: #e0e0e0;
    box-shadow: 31px 20px 20px #bebebe,
        -10px -31px 100px #ffffffa6;

}

.oltre-riga {

    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-left: 50px;
    margin-right: 50px;


}

.details {
    &:hover {
        color: $pink;
    }

    cursor: pointer;
}

.rating {
    &:hover {
        color: $pink;
    }

    cursor: pointer;
}

i {
    color: $pink;

    &:hover {
        color: red;
    }

    cursor: pointer;
}
</style>