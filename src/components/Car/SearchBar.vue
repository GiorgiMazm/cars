<script setup lang="ts">
const city = ref("");

function searchHandler() {
  if (!city.value.trim()) return;
  navigateTo(`city/${city.value}/car`);
}
</script>

<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
      v-model="city"
    />
    <button @click="searchHandler" class="bg-sky-500 px-10 text-white">
      Search
    </button>
  </div>
</template>
