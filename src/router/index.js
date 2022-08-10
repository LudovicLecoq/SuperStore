import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Category from '../views/Category.vue';
import Command from '../views/Command.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category/:cat',
    name: 'Category',
    component: Category
  },
  {
    path: '/payment',
    name: 'Command',
    component: Command
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
