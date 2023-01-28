<template>
    <footer>
        <div class="footer-container container-lg py-5">
            <div class="top-section d-flex">
                <div class="singup">
                    <p>Sign up to our newsletters and receive the latest exclusive discount and deals</p>
                    <button type="button" class="text-uppercase py-2 px-3"><a href="#">Sign up</a></button>
                </div>
                <div class="payments">

                </div>
            </div>

            <div class="bottom-section">
                <div class="main-menu">
                    <div>
                        <h6>Customer Service</h6>

                        <ul>
                            <li v-for="item in store.mainMenuItem" class="resize"><a href="#">{{ item }}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="menu-dropdown" id="primary-container">
                    <div class="container-dropdown" v-for="items in store.dropDownMenuItem"
                        @click="items.menuOpen = !items.menuOpen">
                        <h6>{{ items.title }}</h6>
                        <i class="fa-solid fa-angle-down"></i>

                        <ul class="dropdown" :class="{ 'open': items.menuOpen }">
                            <li v-for="item in items.voices"><a href="#">{{ item }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container-sm">
                <h4 class="m-0 mt-5">Bolucci Team</h4>
            </div>
        </div>
    </footer>
</template>

<script>
import { store } from '../store';

export default {
    name: 'FooterComponent',

    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;



footer {
    background-color: black;


    .top-section {
        color: $white;
        font-weight: font-w-small;
        padding-bottom: 46px;

        button {

            a {

                &:hover {
                    color: black;
                }
            }

        }


        .singup {

            margin-left: 16px;


            button {

                &:hover {
                    text-decoration: underline;
                    background-color: $form-border;
                }
            }

        }
    }


    .bottom-section {
        display: flex;
        flex-wrap: wrap;
        color: $white;

        ul {
            font-weight: 200;
        }


        .main-menu,
        .menu-dropdown {
            display: flex;
            width: 50%;
            min-width: 200px;

            div {

                width: 100%;

                h6 {
                    padding: 16px;
                    margin: 0;
                }

                i {
                    display: none;
                }

                ul {
                    padding: 6px 16px;

                    li {
                        margin: 3px 0;
                        padding: 4px;
                        width: 100%;

                        &:hover {
                            background-color: $footer-hover;
                            text-decoration: none;
                            cursor: pointer;

                            a {
                                text-decoration: underline;
                                color: $white;
                            }
                        }
                    }
                }

                &::before {
                    content: '';
                    display: block;
                    background-color: $white;
                    height: 1px;
                    margin-right: 16px;
                    margin-left: 16px;
                }

            }

        }


        .menu-dropdown {

            flex-wrap: wrap;

            div {
                flex-grow: 1;
                min-width: 200px;
            }
        }

    }

}

@media (max-width: 768px) {

    #primary-container {
        display: block;

        .container-dropdown {
            position: relative;

            h6 {
                cursor: pointer;
                display: block;
            }


            i {
                display: block;
                position: absolute;
                top: 16px;
                right: 20px;
            }

            .open {
                max-height: 200px !important;
                overflow: visible;
            }

            .dropdown {
                max-height: 0;
                overflow: hidden;
                transition: all 1.2s cubic-bezier(.215, .61, .355, 1);
            }
        }


    }

}
</style>