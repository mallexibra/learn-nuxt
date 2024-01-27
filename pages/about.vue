<script lang="ts" setup>
import { useLoading } from "~/composables/use-loading";

const { loading, loadingTitle, hideLoading } = useLoading();
</script>

<template>
  <div>
    <h1>Ini Page About</h1>

    <div v-if="loading">
      <p>{{ loadingTitle }}</p>
    </div>
    <button @click="hideLoading">Hide Loading</button>
  </div>
</template>
