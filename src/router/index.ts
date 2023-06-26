import { createRouter, createWebHistory } from 'vue-router'
import PizzaListView from "@/views/PizzaListView.vue";
import PizzaOrderView from "@/views/PizzaOrderView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PizzaListView
    },
    {
      path: '/order/:id',
      name: 'order',
      component: PizzaOrderView,
      // props: (route) => ({ pizza: { name: route.params.name, price: route.params.price } })
      // props: true
    }
  ]
})

export default router
