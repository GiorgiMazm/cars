<script setup lang="ts">
import Car from "~/types/Car";

const route = useRoute();
const { cars }: { cars: Car[] } = useCars();
const car = cars.find((car) => car.id === parseInt(String(route.params.id)));

useHead({
  title: String(route.params.name).toUpperCase(),
});
</script>

<template>
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    v-if="car"
  >
    <div>
      <CarDetailsHero :car="car" />
    </div>
    <CarDetailsAttributes :features="car.features" />
    <CarDetailsDescription :description="car.description" />
    <CarDetailsContact />
  </div>
</template>

<style scoped></style>
