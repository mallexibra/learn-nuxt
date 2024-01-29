<script lang="ts" setup>
const i = ref(0);
const increment = () => i.value++;
const increment1 = () => (i.value += 2);
</script>

<template>
  <div>
    <p>{{ i }}</p>
    <button @click="increment1">Tambah 2</button>
  </div>
</template>

<style></style>
