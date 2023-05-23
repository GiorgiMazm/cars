<script setup lang="ts">
useHead({
  title: "Cartrader",
});

const { $myPlugin } = useNuxtApp();
console.log($myPlugin());
</script>

<template>
  <div>
    <CarHero />
  </div>
</template>
