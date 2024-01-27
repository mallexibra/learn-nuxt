<script lang="ts" setup>
import { useLoading } from "~/composables/use-loading";

const { loading, loadingTitle, hideLoading } = useLoading();

const counter1 = useState("counter", () => 1);

const dataItem = ["Hallo", "Dunia", "Programming"];
</script>

<template>
  <div>
    <h1>Ini Page About</h1>

    <ul v-for="(item, i) in dataItem">
      <li v-if="i == 1">Oke</li>
      <li v-else>{{ item }}</li>
    </ul>

    <div v-if="loading">
      <p>{{ loadingTitle }}</p>
    </div>
    <button @click="hideLoading">Hide Loading</button>

    <div class="mt-3">
      <p>Counter {{ counter1 }}</p>
      <button @click="counter1++">Click to Counter</button>
    </div>
  </div>
</template>
