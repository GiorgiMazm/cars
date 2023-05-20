<script setup lang="ts">
const route = useRoute();
const maxPrice = computed(() => route.query.maxPrice);
const minPrice = computed(() => route.query.minPrice);
const { data, refresh } = await useFetchCars(String(route.params.city), {
  make: route.params.make,
  minPrice: minPrice,
  maxPrice: maxPrice,
});
watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div>
    <CarCards :cars="data" />
  </div>
</template>
