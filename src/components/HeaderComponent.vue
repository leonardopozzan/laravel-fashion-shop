<template>
    <header>
        <nav class="my-navbar d-lg-flex justify-content-between align-items-center" ref="navbar" :class="{'my-sidebar' : sidebar}">
            <div class="img-box d-lg-none ms-3" :class="{'d-none' : sidebar}">
                <router-link :to="{ name: 'home' }"><img src="../img/logo.png" alt=""></router-link>
            </div>
            <button @click="showSidebar()" :class="{'d-none' : sidebar}" class="d-lg-none me-3">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="nav-menu d-lg-block" :class="{'d-none' : !sidebar}">
                <ul class="d-lg-flex align-items-center">
                    <li class="img-box ms-lg-3"><router-link :to="{ name: 'home' }"><img src="../img/logo.png" alt=""></router-link></li>
                    <li class="close-sidebar d-lg-none" @click="hideSidebar()"><i class="fa-solid fa-xmark"></i></li>
                    <li class="my-dropdown-title">
                        <router-link :to="{ name: 'products' }" class="text-uppercase" :class="{'hover': makeUp}" >
                            <span>make up </span>
                            <i class="ms-1 fs-5 fa-solid fa-caret-down" :class="{'rotated': makeUp}" @click.prevent="showMakeUp()"></i> 
                            <i class="ms-1 fs-5 fa-solid fa-caret-right d-none" :class="{'rotated': makeUp}" @click.prevent="showMakeUp()"></i>
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
                            <i class="ms-1 fs-5 fa-solid fa-caret-down" :class="{'rotated': skinCare}" @click.prevent="showSkinCare()"></i> 
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
                            <i class="ms-1 fs-5 fa-solid fa-caret-down" :class="{'rotated': sale}" @click.prevent="showSale()"></i> 
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
                    <li class="my-dropdown-title"><router-link :to="{ name: 'contacts' }" class="text-uppercase">contacts</router-link></li>
                    <li class="my-dropdown-title"><router-link :to="{ name: 'home' }" class="text-uppercase">About Us</router-link></li>
                </ul>
            </div>
            <div :class="{'d-none' : !sidebar}" class="d-lg-block me-lg-3">
                <div class="socials-icon d-flex flex-column flex-lg-row">
                    <div class="icon"><i class="fa-brands fa-instagram"></i></div>
                    <div class="icon"><i class="fa-brands fa-facebook-f"></i></div>
                    <div class="icon"><i class="fa-brands fa-pinterest-p"></i></div>
                    <div class="icon"><i class="fa-brands fa-twitter"></i></div>
                    <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                </div>
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
        </nav>
    </header>
    <div class="overlay" v-if="sale || makeUp || skinCare" @mouseover="sale = false, makeUp = false, skinCare = false" @click="hideSidebar()"></div>

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
            sidebar : false,
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
        },
        showSidebar(){
            this.sidebar = true
        },
        hideSidebar(){
            this.sidebar = false
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
        transform: rotate(-90deg);

    }
.my-navbar {
    transition: 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: $rich-green;
    z-index: 1100;
    display: flex;
    button{
        border: 0;
        background-color: $white;
        color: $rich-green;
        padding: 0.5rem;
        border-radius: 0.4rem;
        &:hover{
            background-color: $pink;
        }
    }
    &.my-sidebar{
        height: 100vh;
        background-color: $white;
        display: block;
        width: max-content;
    }
    .socials-icon {
        display: flex;
        .icon{
            padding: 0.5rem 1rem;
            &:hover{
                    color: $pink;
                    background-color: $white;
                }
        }
            i {
                font-weight: $font-w-medium;
                font-size: $font-medium-plus;
                cursor: pointer;
                
            }
        }

        .img-box{
                width: 60px;
            }
    .nav-menu {

        ul {
            .close-sidebar{
                position: absolute;
                top: -15px;
                right: 10px;
                font-size: 30px;
                font-weight: bold;
                cursor: pointer;
            }
            
            li:not(:first-child) {
                padding: 1.5rem 0.6rem;
                a{
                    padding: 1.5rem 0.6rem;
                    transition: 0.5s;
                    &.hover {
                        color: $pink;
                    }
                    &:hover {
                        color: $pink;
                    }
                }
            }
        }
        
        .my-dropdown-title{
            i{
                transition: transform 0.5s;
            }
            & > a{
                font-weight: bold;
            }
            .my-dropdown-menu{
                position: absolute;
                top: 0;
                left: 139px;
                background-color: $white;
                color: $rich-green;
                width: 250px;
                height: 100vh;
                overflow: auto;
                &::-webkit-scrollbar {
                    display: none;
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
    // .social{
    //         @include dflex();
    //         img:hover{
    //             filter: brightness(0) invert(1);
    //             cursor: pointer;
    //         }
    //         ul{
    //             position: relative;
    //             display: flex;
    //             li{
    //                 position: relative;
    //                 margin: 0 0.5rem;
    //                 cursor: pointer;
    //                 a{
    //                     font-size: 2.5em;
    //                     // color: #222;
    //                     color: $pink;
    //                 }
    //                 &::before{
    //                     font-family: "FontAwesome";
    //                     font: var(--fa-font-brands);
    //                     position: absolute;
    //                     top: 8px; left: 0;
    //                     font-size: 2.5em;
    //                     height: 0;
    //                     overflow: hidden;
    //                     transition: 0.5s ease-in-out;
    //                 }
    //                 &:first-child::before{
    //                     content: '\f09a';
    //                     color: #001eb4;
    //                     border-bottom: 4px solid #001eb4;
    //                 }
    //                 &:nth-child(2)::before{
    //                     content: "\f099";
    //                     color: #1DA1F2;
    //                     border-bottom: 4px solid #1DA1F2;
    //                 }
    //                 &:nth-child(3)::before{
    //                     content: "\f167";
    //                     color: red;
    //                     border-bottom: 4px solid red;
    //                 }
    //                 &:nth-child(4)::before{
    //                     content: "\f0d2";
    //                     background-image: linear-gradient(45deg,#f09433 0%, #e6883c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    //                     -webkit-background-clip: text;
    //                     -webkit-text-fill-color: transparent;
    //                     border-bottom: 4px solid #dc2743;
    //                 }
    //                 &:nth-child(5)::before{
    //                     content: "\f3da";
    //                     color: white;
    //                     border-bottom: 4px solid white;
    //                 }
    //                 &:hover::before{
    //                     height: 100%;
    //                 }
    //             }
    //         }
    //     }

}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (min-width: 992px) {
    .rotated{
        transform: rotate(-180deg);
    }
    .my-navbar {
    .socials-icon {
        .icon{
            color: $pink;
            padding: 1.5rem 1rem;
            &:hover{
                    color: $rich-green;
                    background-color: $white;
                }
        }
        }

    .nav-menu {
        &.my-sidebar{
        height: max-content;
        background-color: initial;
        width: 100%;
    }

        ul {
            
            li:not(:first-child) {
                padding: 0;

                a{
                    color: $pink;
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
            
            position: relative;
            .my-dropdown-menu{
                display: flex;
                width: 430px;
                top: 48.5px;
                left: 0;
                width: 430px;
                height: max-content;
                overflow: initial;
                &.width-large{
                width: 750px;
                left: -150px;
                }
            }
        }
    }
}
}
</style>