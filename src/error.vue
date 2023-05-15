<script setup lang="ts">
const error: any = useError();
const router = useRouter();
</script>

<template>
  <div>
    <AppHeader />
    <div class="text-center">
      <h1 class="text-9xl mt-80 text-red-600">{{ error?.statusCode }}</h1>
      <h2 class="text-6xl">{{ error?.message }}</h2>
      <button @click="router.back()" class="text-4xl">Go back</button>
    </div>
  </div>
</template>

<style scoped></style>
