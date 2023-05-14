<script setup lang="ts">
const route = useRoute();

useHead({
  title: String(route.params.name).toUpperCase(),
});
</script>

<template>
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <div>
      <CarDetailsHero />
    </div>
    <CarDetailsAttributes />
    <CarDetailsDescription />
    <CarDetailsContact />
  </div>
</template>

<style scoped></style>
