<template>
  <div v-if="pizza" class="order">
    <h1 class="item">Make order</h1>

    <table class="item">
      <tbody>
      <tr>
        <td>{{ pizza.name }}</td>
        <td>{{ pizza.price }} <span v-html="'&#8381;'"></span></td>
      </tr>
      <tr>
        <td rowspan="3">
          <h2>Address</h2>
        </td>
        <td>
          <div>
            <label for="name">street:</label>
            <input id="name" type="text" v-model="street">
          </div>
        </td>
      </tr>
      <tr>

        <td>
          <div>
            <label for="house">house:</label>
            <input id="house" type="text" v-model="house">
          </div>
        </td>
      </tr>
      <tr>

        <td>
          <div>
            <label for="flat">flat:</label>
            <input id="flat" type="text" v-model="flat">
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <pizza-button-component class="item"
                            @click="makeOrder">
      Make order
    </pizza-button-component>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, PropType, ref } from "vue";
import PizzaButtonComponent from "@/components/UI/PizzaButtonComponent.vue";
import { usePizzaStore } from "@/stores/store";
import type { Order } from "@/models/order";

// const props = defineProps(['pizza']);

const props = defineProps([ 'pizza' ]);
const street = ref('');
const house = ref('');
const flat = ref('');
const store = usePizzaStore();

const order = computed<Order>(() => ({
  pizzaName: props.pizza.name,
  pizzaPrice: props.pizza.price,
  street: street.value,
  house: house.value,
  flat: flat.value
}));

function makeOrder() {
  store.setOrder(order.value);

  street.value = '';
  flat.value = '';
  house.value = '';
}
</script>

<style scoped>
.order {
  display: inline-block;
  text-align: right;
}

table {
  text-align: left;
}

td {
  vertical-align: top;
}

td > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em 1em;
}

div > input {
  margin-left: 1em;
}

.item + .item {
  margin-top: 1em;
}

input[type=text] {
  min-width: 5em;
  padding: 0.2em;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
  border: 3px solid #555;
}
</style>
