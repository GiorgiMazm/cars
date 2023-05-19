<script setup lang="ts">
const supabase = useSupabaseClient();
async function login() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) console.log(error);
}
const user = useSupabaseUser();
</script>

<template>
  <div class="text-center">
    <h1 class="text-5xl">Login</h1>
    <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">
      Login with google
    </button>

    <div>user:{{ user }}</div>
  </div>
</template>

<style scoped></style>
