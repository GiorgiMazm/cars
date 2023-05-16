<script setup lang="ts">
const route = useRoute();
const model = reactive({
  location: false,
  make: false,
  price: false,
});

function toggleModel(key: "location" | "make" | "price") {
  model[key] = !model[key];
}

const city = ref("");

function changeCity() {
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
}
</script>

<template>
  <div>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Location</h3>
        <h3 class="text-blue-400 capitalize" @click="toggleModel('location')">
          {{ route.params.city }}
        </h3>
        <div
          v-if="model.location"
          class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
        >
          <input v-model="city" type="text" class="border p-1 rounded" />
          <button
            @click="changeCity"
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          >
            Apply
          </button>
        </div>
      </div>

      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize">Toyota</h3>
      </div>

      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize"></h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
