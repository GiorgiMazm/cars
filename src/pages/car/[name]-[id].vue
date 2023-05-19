<script setup lang="ts">
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();
useHead({
  title: toTitleCase(String(route.params.name)),
});

definePageMeta({
  // @ts-ignore
  validate({ params }) {
    const { cars } = useCars();
    const car = cars.find((c) => c.id === parseInt(String(params.id)));
    if (!car) {
      throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exist`,
      });
    }
  },
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(String(route.params.id));
  });
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car?.features" />
    <CarDetailDescription :description="car?.description" />
    <CarDetailContact />
  </div>
</template>
