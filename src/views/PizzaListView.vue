<template>
  <div class="list" ref="list">
    <carousel :items-to-show="itemsToSHow"
              :wrap-around="false">
      <slide v-for="(slide, index) in pizzaBySlide" :key="index">
        <div>
          <template v-for="item in slide" :key="item?.id">
            <pizza-card-component class="carousel__item"
                                  :pizza="item"
                                  @click="makeOrder(item)">
            </pizza-card-component>
          </template>
        </div>
      </slide>

      <template #addons>
        <Navigation/>
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import PizzaCardComponent from "@/components/PizzaCardComponent.vue";
import { usePizzaStore } from "@/stores/store";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import type { Pizza } from "@/models/pizza";

const pizzaStore = usePizzaStore()
const pizzaList = pizzaStore.pizzaList;
const router = useRouter();
const list = ref(null);
const itemsToSHow = ref(3);

let stopUpdate = false;

const pizzaBySlide = computed(() => {
  const result = [];
  let count = pizzaList.length;
  let i = 0;

  while (i < count) {
    result.push([ pizzaList[i], pizzaList[i + 1] ]);
    i += 2;
  }

  return result;
});

function updateItemsToShow() {
  const listElm: any = list.value !== null ? list.value : null;
  const slideSize = 330;
  const listWidth = listElm !== null ? listElm.offsetWidth : 1;

  if (stopUpdate) {
    return;
  }

  itemsToSHow.value = Math.floor(listWidth / slideSize);
  stopUpdate = true;

  setTimeout(() => stopUpdate = false, 40);
}

onMounted(() => {
  window.addEventListener("resize", updateItemsToShow);

  updateItemsToShow();
})

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
})

function makeOrder(pizza: Pizza) {
  pizza && router.push({
    name: 'order',
    params: { id: pizza.id }
  });
}
</script>

<style scoped>
.list {
  display: block;
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
}

.card {
  margin: 1em 0 0 1em;
}
</style>
