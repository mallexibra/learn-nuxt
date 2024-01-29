<script setup>
const name = ref("");
const email = ref("");
const data = ref([]);
const submitForm = () => {
  console.log(`Name: ${name.value}, Email: ${email.value}`);
  data.value = [{ name: name.value, email: email.value }];
  console.log(data.value);
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="name">
        <span>Name:</span>
        <input class="text-black" type="text" v-model="name" />
      </label>
      <br />
      <label for="email">
        <span>Email:</span>
        <input class="text-black" type="text" v-model="email" />
      </label>
      <button type="submit">Kirim</button>
    </form>
  </div>
</template>

<style></style>
