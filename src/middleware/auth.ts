export default defineNuxtRouteMiddleware((to, from) => {
  const user = true;
  if (user) return;
  return navigateTo("/login");
});
