import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import './assets/main.scss'

import BrandCarouselComponent from './components/BrandCarouselComponent.vue'

createApp(App).component('BrandCarouselComponent',BrandCarouselComponent).use(router).mount('#app')
