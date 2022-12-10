import {createRouter, createWebHashHistory} from 'vue-router'
import cart from '../components/cart/Cart'
import catalog from '../components/catalog/catalog'

const routes = [
    {
        path: '',
        name: 'home',
        component: catalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
