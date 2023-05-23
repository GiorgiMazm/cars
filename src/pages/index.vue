<script setup lang="ts">
useHead({
  title: "Cartrader",
});

console.log(useAppConfig().baseUrl);
</script>

<template>
  <div>
    <CarHero />
  </div>
</template>
