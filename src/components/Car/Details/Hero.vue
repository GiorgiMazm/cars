<script setup lang="ts">
import Car from "~/types/Car";

const props = defineProps<{
  car: Car;
}>();
</script>

<template>
  <div class="mt-10">
    <img :src="props.car.url" class="w-full" alt="" />
    <h1 class="mt-10 text-4xl">{{ props.car.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ props.car.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ props.car.seats }}</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ props.car.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
