// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@vueuse/nuxt"],
  // @ts-ignore
  srcDir: "src/",
  // @ts-ignore
  buildModules: ["@nuxt/typescript-build"],
});
