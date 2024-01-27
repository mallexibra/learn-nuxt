<script lang="ts" setup>
const { page } = defineProps(["page"]);
</script>

<template>
  <div class="p-3 rounded-md border bg-white text-black w-max m-4">
    <h1 class="font-semibold">Ini Sebuah Card</h1>
    <p>Card ini ada di halaman {{ page }}</p>
  </div>
</template>
