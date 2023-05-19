<script setup lang="ts">
const user = ref(true);
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div class="flex" v-if="user">
      <NuxtLink to="/profile/listings" class="mr-5">Profiles</NuxtLink>
      <p class="cursor-pointer">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>
