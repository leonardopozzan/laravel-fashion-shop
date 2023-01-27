<template>
    <header>
        <nav class="navbar p-0" ref="navbar">
            <div class="container-fluid d-flex justify-content-between h-100">
                <div class="nav-menu h-100">
                    <ul class="d-flex align-items-center h-100">
                        <li class="img-box"><router-link :to="{ name: 'home' }"><img src="../img/logo.png" alt=""></router-link></li>
                        <li class="my-dropdown-title">
                            <router-link :to="{ name: 'products' }" class="text-uppercase" :class="{'hover': makeUp}" >
                                <span>make up </span>
                                <i class="ms-1 fs-5 fa-solid fa-caret-down" :class="{'rotated': makeUp}" @click="showMakeUp()"></i> 
                            </router-link>
                            
                            <Transition>
                                <div class="my-dropdown-menu" v-if="makeUp" @mouseleave="makeUp = false">
                                    <div v-for="(item,i) in makeUpLinks" :key="i">
                                        <div class="text-uppercase">{{ item.title }}</div>
                                        <ul>
                                            <li v-for="(link,j) in item.links" :key="j">{{ link }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Transition>
                        </li>
                        <li class="my-dropdown-title">
                            <router-link :to="{ name: 'products' }" class="text-uppercase" :class="{'hover': skinCare}" >
                                <span>skin care</span>
                                <i class="ms-1 fs-5 fa-solid fa-caret-down" :class="{'rotated': skinCare}" @click="showSkinCare()"></i> 
                            </router-link>
                            
                            <Transition>
                                <div class="my-dropdown-menu width-large" v-if="skinCare" @mouseleave="skinCare = false">
                                    <div v-for="(item,i) in skinCareLinks" :key="i">
                                        <div class="text-uppercase">{{ item.title }}</div>
                                        <ul>
                                            <li v-for="(link,j) in item.links" :key="j">{{ link }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Transition>
                        </li>
                        <li class="my-dropdown-title">
                            <router-link :to="{ name: 'products' }" class="text-uppercase" :class="{'hover': sale}" >
                                <span>sale </span>
                                <i class="ms-1 fs-5 fa-solid fa-caret-down" :class="{'rotated': sale}" @click="showSale()"></i> 
                            </router-link>
                            
                            <Transition>
                                <div class="my-dropdown-menu" v-if="sale" @mouseleave="sale = false">
                                    <div v-for="(item,i) in saleLinks" :key="i">
                                        <div class="text-uppercase">{{ item.title }}</div>
                                        <ul>
                                            <li v-for="(link,j) in item.links" :key="j">{{ link }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Transition>
                        </li>
                        <!-- <li class="my-dropdown-title">
                            <router-link :to="{ name: 'products' }">skin care</router-link>
                            <div class="my-dropdown-menu">
                                <div v-for="(item,i) in skinCareLinks" :key="i">
                                    <div>{{ item.title }}</div>
                                    <ul>
                                        <li v-for="(link,j) in item.links" :key="j">{{ link }}</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="my-dropdown-title">
                            <router-link :to="{ name: 'products' }">sale</router-link>
                            <div class="my-dropdown-menu">
                                <div v-for="(item,i) in saleLinks" :key="i">
                                    <div>{{ item.title }}</div>
                                    <ul>
                                        <li v-for="(link,j) in item.links" :key="j">{{ link }}</li>
                                    </ul>
                                </div>
                            </div>
                        </li> -->
                        <li class="my-dropdown-title"><router-link :to="{ name: 'contacts' }" class="text-uppercase">contacts</router-link></li>
                        <li class="my-dropdown-title"><router-link :to="{ name: 'home' }" class="text-uppercase">About Us</router-link></li>
                    </ul>
                </div>
                <div class="socials-icon">
                    <div class="icon"><i class="fa-brands fa-instagram"></i></div>
                    <div class="icon"><i class="fa-brands fa-facebook-f"></i></div>
                    <div class="icon"><i class="fa-brands fa-pinterest-p"></i></div>
                    <div class="icon"><i class="fa-brands fa-twitter"></i></div>
                    <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                </div>
                <!-- <div class="social">
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li> 
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li> 
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>  
                        <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>  
                        <li><a href="#"><i class="fa-brands fa-periscope"></i></a></li> 
                    </ul>
                </div> -->
            </div>

        </nav>
    </header>
    <div class="overlay" v-if="sale || makeUp || skinCare" @mouseover="sale = false, makeUp = false, skinCare = false"></div>

</template>

<script>

import { store } from '../store';

export default {
    name: 'HeaderComponent',


    data() {
        return {
            sale: false,
            makeUp: false,
            skinCare: false,
            saleLinks : [
                {
                    title : 'Shop by Category',
                    links : [
                        'View All',
                        'Skin Care Sale',
                        'Make Up Sale',
                        'Hair Care Sale',
                        'Body & Wellbeing Sale',
                        'Fragrance Sale',
                        'Tools Sale',
                    ]
                },
                {
                    title : 'Shop by Category',
                    links : [
                        'Save 50%',
                        'Save 40%',
                        'Save 30%',
                        'Save 25%',
                        'Save 20%',
                    ]
                },
                {
                    title : 'Shop our Offers',
                    links : [
                        'Free Gifts',
                        'Saver Sets',
                        'Supersizes',
                    ]
                }
            ],
            skinCareLinks: [
                {
                    title : 'Cleansers, Toners & Mists',
                    links : [
                        'View All Cleansers',
                        'View All Toners',
                        'Cleansing Balms',
                        'Foaming Cleansers',
                        'Cleansing Oils',
                        'Cleansing Gels',
                        'Cream Cleansers',
                        'Hydrating Face Mists',
                        'Make Up Removers',
                        'Essence',
                    ]
                },
                {
                    title : 'Moisturisers & Serums',
                    links : [
                        'View All Moisturisers',
                        'View All Serums',
                        'SPF',
                        'Day Creams',
                        'Face Oils',
                        'Night Creams',
                        'Face Gels',
                        'Face Balms',
                        'Neck Care',
                    ]
                },
                // {
                //     title : 'Eyes & Lips',
                //     links : [
                //         'View All Eyes',
                //         'View All Lips',
                //         'Eye Creams',
                //         'Eye Masks',
                //         'Eye Treatments',
                //         'Eye Serums',
                //         'Lip Balms',
                //         'Lips Masks',
                //         'Lip Treatments',
                //         'Lip Plumpers',
                //         'Lip SPF',
                //     ]
                // },
                {
                    title : 'Masks & Exfoliators',
                    links : [
                        'View All Masks',
                        'View All Exfoliators',
                        'Sheet Masks',
                        'Overnight Masks',
                        'Clay Masks',
                        'Hydrating Face Masks',
                        'Exfoliating Face Masks',
                        'Calming Face Masks',
                        'Peels',
                        'Acid Toners',
                    ]
                }
            ],
            makeUpLinks: [
                {
                    title : 'Complexion',
                    links : [
                        'Foundation',
                        'Concealer',
                        'Primer',
                        'Tinted Moisturiser',
                        'Highlighter',
                        'Bronzer',
                        'Contouring',
                        'Face Powder',
                        'Blusher',
                        'BB & CC Cream',
                        'Make Up Removers',
                        'Setting Spray',
                    ]
                },
                {
                    title : 'Make Up Tools',
                    links : [
                        'Eyelash Curlers',
                        'Tweezers',
                        'Make Up Sponges',
                        'Make Up Bags',
                        'Make Up Storage',
                        'Make Up Tool Sets',
                        'Pencil Sharpeners',
                        'Make Up Mirrors',
                    ]
                }
            ]
        }
    },
    methods:{
        showMakeUp(){
            this.makeUp = !this.makeUp;
            this.sale = false
            this.skinCare = false
        }, showSkinCare(){
            this.skinCare = !this.skinCare;
            this.sale = false
            this.makeUp = false
        },
        showSale(){
            this.sale = !this.sale;
            this.makeUp = false
            this.skinCare = false
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 10){
                this.$refs.navbar.classList.add('backdrop-blur')
            } else {
                this.$refs.navbar.classList.remove('backdrop-blur')
            }
        })
    }


}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
@use '../assets/partials/minxins' as *;

.backdrop-blur{
    backdrop-filter: blur(10px);
}
.overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: black;
        opacity: 0.4;
        z-index: 1000;
    }
    .rotated{
        transform: rotate(-180deg);
    }
.navbar {
    transition: 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: $white;
    z-index: 1100;
    .socials-icon {
        display: flex;
        .icon{
            padding: 1.5rem 1rem;
            &:hover{
                    color: $rich-green;
                    background-color: $white;
                }
        }
            i {
                font-weight: $font-w-medium;
                font-size: $font-medium-large;
                cursor: pointer;
                
            }
        }

    .nav-menu {

        ul {
            .img-box{
                width: 60px;
            }
            li:not(:first-child) {
                a{
                    padding: 1.5rem 0.6rem;
                    transition: 0.5s;
                    &.hover {
                        background-color: $white;
                        color: $rich-green;
                    }
                    &:hover {
                        background-color: $white;
                        color: $rich-green;
                    }
                }
            }
        }
        
        .my-dropdown-title{
            i{
                transition: transform 0.5s;
            }
            position: relative;
            & > a{
                font-weight: bold;
            }
            .my-dropdown-menu{
                display: flex;
                position: absolute;
                width: 430px;
                top: 47.5px;
                left: 0;
                background-color: $white;
                color: $rich-green;
                &.width-large{
                width: 750px;
                }
                & > *{
                    padding: 1rem;
                    & *{
                        padding: 0.3rem;
                        cursor: pointer;
                        & li:hover{
                            background-color: rgba($color: #000000, $alpha: 0.3);
                        }
                    }
                }
            }
        }
    }
    .social{
            @include dflex();
            img:hover{
                filter: brightness(0) invert(1);
                cursor: pointer;
            }
            ul{
                position: relative;
                display: flex;
                li{
                    position: relative;
                    margin: 0 0.5rem;
                    cursor: pointer;
                    a{
                        font-size: 2.5em;
                        // color: #222;
                        color: $pink;
                    }
                    &::before{
                        font-family: "FontAwesome";
                        font: var(--fa-font-brands);
                        position: absolute;
                        top: 8px; left: 0;
                        font-size: 2.5em;
                        height: 0;
                        overflow: hidden;
                        transition: 0.5s ease-in-out;
                    }
                    &:first-child::before{
                        content: '\f09a';
                        color: #001eb4;
                        border-bottom: 4px solid #001eb4;
                    }
                    &:nth-child(2)::before{
                        content: "\f099";
                        color: #1DA1F2;
                        border-bottom: 4px solid #1DA1F2;
                    }
                    &:nth-child(3)::before{
                        content: "\f167";
                        color: red;
                        border-bottom: 4px solid red;
                    }
                    &:nth-child(4)::before{
                        content: "\f0d2";
                        background-image: linear-gradient(45deg,#f09433 0%, #e6883c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        border-bottom: 4px solid #dc2743;
                    }
                    &:nth-child(5)::before{
                        content: "\f3da";
                        color: white;
                        border-bottom: 4px solid white;
                    }
                    &:hover::before{
                        height: 100%;
                    }
                }
            }
        }

}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>