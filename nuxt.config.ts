// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  // @ts-ignore
  srcDir: "src/",
  // @ts-ignore
  buildModules: ["@nuxt/typescript-build"],
});
