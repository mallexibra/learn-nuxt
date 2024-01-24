<template>
  <div>
    <slot name="header">
      <h1 class="text-rose-500">Hello World</h1>
    </slot>
    <h1 class="font-bold text-lg">Page Custom Layout</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>

    <slot />
  </div>
</template>
