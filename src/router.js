import Vue from 'vue';
import Router from 'vue-router';
import ProductList from './components/ProductList.vue';
import Details from './components/Details.vue';
import Basket from './components/Basket.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ],
});
