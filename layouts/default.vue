<template>
  <div>
    <!-- Header -->
    <div>
      <h1 class="text-xl font-bold">Nuxt Blog</h1>
      <div class="my-3 flex gap-3">
        <NuxtLink class="hover:bg-blue-800" to="/">Home</NuxtLink>
        <NuxtLink class="hover:bg-blue-800" :to="{ name: 'about' }"
          >About</NuxtLink
        >
        <NuxtLink class="hover:bg-blue-800" to="/contact">Contact</NuxtLink>
      </div>
    </div>
    <!-- Content -->
    <slot />
  </div>
</template>
