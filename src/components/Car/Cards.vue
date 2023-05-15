<script setup lang="ts">
import Car from "~/types/Car";

const { cars }: { cars: Car[] } = useCars();
</script>

<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<style scoped></style>
