import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { Pizza } from "@/models/pizza";
import pizza from '@/demo/demo.json'
import type { Order } from "@/models/order";

export const usePizzaStore = defineStore('store', {
  state: () => {
    const pizzaList: Ref<Pizza[]> = ref(pizza);
    const order: Ref<Order | null> = ref(null);

    return { pizzaList, order };
  },
  actions: {
    getPizza(id: number) {
      return this.pizzaList.find(item => item.id === id);
    },
    setOrder(order: Order) {
      this.order = order;
    }
  },
  persist: true
})
