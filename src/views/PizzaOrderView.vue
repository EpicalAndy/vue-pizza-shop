<template>
  <PizzaOrderComponent :pizza="pizza"></PizzaOrderComponent>
</template>

<script setup lang="ts">

import PizzaOrderComponent from "@/components/PizzaOrderComponent.vue";
import { useRouter, useRoute } from 'vue-router'
import { usePizzaStore } from "@/stores/store";

// const props = defineProps(['name', 'price' ]);
const route = useRoute();
const id = route.params.id;
const pizzaStore = usePizzaStore();

const pizza = id ? pizzaStore.getPizza(+id) : null;
</script>

<style scoped>

</style>
