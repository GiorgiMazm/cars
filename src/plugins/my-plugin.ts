export default defineNuxtPlugin(() => {
  return {
    provide: {
      myPlugin: () => "I'll try how i can get this method",
    },
  };
});
