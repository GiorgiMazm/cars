<script setup lang="ts">
const { cars } = useCars();

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id: number) => {
  if (id in favorite.value) {
    // @ts-ignore
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </div>
</template>
