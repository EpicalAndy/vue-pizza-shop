<template>
  <div :class="['card', {'empty': !pizza}] ">

    <img :src="pizza?.url" alt="">

    <div v-if="pizza">
      <p>
        <span class="name">{{ pizza?.name }}</span>
      </p>

      <p>
        <span>{{ `price: ${pizza?.price}` }} <span v-html="'&#8381;'"></span></span>
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Pizza } from "@/models/pizza";

const props = defineProps([ 'pizza' ]);
const pizza: Pizza = props.pizza;

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 1em;
  border: 1px solid khaki;
  border-radius: 1em;
  width: 300px;
  height: 300px;
}

.empty {
  border: transparent;
}

.card img {
  max-width: 100%;
  min-width: 100%;
}

</style>
