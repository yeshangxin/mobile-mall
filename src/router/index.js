import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import ('../views/home/home')
const Category = () => import ('../views/category/category')
const Discover = () => import ('../views/discover/discover')
const Cart = () => import ('../views/cart/cart')
const Profile = () => import ('../views/profile/profile')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    
  ],
  mode:'history',
})
