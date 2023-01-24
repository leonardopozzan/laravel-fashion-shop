<template>
    <header>
        <div class="navbar p-0">
            <div class="container-lg d-flex justify-content-between p-3">
                <div class="nav-menu">
                    <ul class="d-flex">
                        <li v-for="item in store.menuItems" class="mx-2 text-uppercase"><a href="#">{{ item }}</a></li>
                    </ul>
                </div>
                <div class="socials-icon">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import { store } from '../store';

export default {
    name: 'HeaderComponent',


    data() {
        return {

            store,

        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: $pink;
    font-weight: $font-w-medium;
    font-size: $menu-font;
    z-index: 1000;

    .nav-menu {

        ul {
            li {
                a {
                    &:hover {
                        color: $gray;
                    }
                }
            }
        }

    }

    .socials-icon {

        i {
            margin: 0 12px;
            font-weight: $font-w-medium;
            font-size: $menu-font;
            cursor: pointer;
        }
    }
}
</style>