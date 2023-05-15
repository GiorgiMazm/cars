<script setup lang="ts">
const props = defineProps<{
  description: string;
}>();
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped></style>
