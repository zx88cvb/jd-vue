import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/views/home/Home.vue'
// import Login from '@/views/login/Login.vue'
// import Register from '@/views/register/Register.vue'
// import Shop from '@/views/shop/Shop.vue'

const Home = () => import('@/views/home/Home.vue');
const Login = () => import('@/views/login/Login.vue');
const Register = () => import('@/views/register/Register.vue');
const Shop = () => import('@/views/shop/Shop.vue');

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin? next({ name: 'Home' }): next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin? next({ name: 'Home' }): next()
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: Shop
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  isLogin || isLoginOrRegister? next(): next({ name: 'Login' })
})
export default router