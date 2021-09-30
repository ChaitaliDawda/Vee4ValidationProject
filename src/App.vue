<template>
  <!-- <vueValidation /> -->
  <compostionAPI />
</template>

<script>
import compostionAPI from "./components/CompositionAPI/index.vue";

export default {
  name: "App",
  components: {
    compostionAPI,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
