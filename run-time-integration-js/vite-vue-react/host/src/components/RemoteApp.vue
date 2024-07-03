<template>
  <div>
    <div ref="root"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { mount } from "remote/RemoteApp";

const root = ref(null);

onMounted(() => {
  mount(root.value);
});
</script>

<style scoped></style>
