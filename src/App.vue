<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PizzaListView from "@/views/PizzaListView.vue";
import PizzaHeaderView from "@/views/PizzaHeaderView.vue";

</script>

<template>
  <PizzaHeaderView></PizzaHeaderView>
  <router-view />
<!--    <transition name="fade">
      <component :is="Component" :key="$route.path"/>
    </transition>
  </router-view>-->
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
