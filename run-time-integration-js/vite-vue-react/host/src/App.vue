<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
const RemoteApp = defineAsyncComponent(() => import("./components/RemoteApp"));

const number = ref(0);
const increment = () => (number.value += 1);
const decrement = () => (number.value -= 1);
</script>

<template>
  <div>
    <h2>{{ number }}</h2>
    <RemoteApp text="+" :onClick="increment" />
    <RemoteApp text="-" :onClick="decrement" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
