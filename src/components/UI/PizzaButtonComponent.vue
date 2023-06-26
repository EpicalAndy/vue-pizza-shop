<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
button {
  background-color: darkgreen;
  opacity: 0.8;
  min-width: 2em;
  min-height: 2em;
  border: none;
  color: white;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: inherit;
}

button {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

button:hover {
  opacity: 1;
  color: white;
}
</style>
