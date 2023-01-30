import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProductList from './pages/ProductList.vue';
import ContactsPage from './pages/ContactsPage.vue';
import AboutUs from './pages/AboutUs.vue';
import NotfoundPage from './pages/NotFoundPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/products',
            name: 'products',
            component: ProductList,
        },


        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage,
        },

        {
            path: '/about',
            name: 'about',
            component: AboutUs,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotfoundPage,
        },
        
    ]
})
export { router };