<script setup lang="ts">
import Car from "~/types/Car";

const props = defineProps<{
  car: Car;
}>();

function openCar() {
  navigateTo(`/car/${props.car.name}-${props.car.id}`);
}
</script>

<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    @click="openCar"
  >
    <div class="flex h-full">
      <img
        :src="props.car.url"
        :alt="props.car.name || 'car image'"
        class="w-[300px] h-full"
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ props.car.name }}</h1>
          <p class="text-gray-700">
            {{ props.car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ props.car.price }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
