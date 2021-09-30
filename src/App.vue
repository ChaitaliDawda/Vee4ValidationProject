<template>
  <!-- <vueValidation /> -->
  <veeValidationRule/>
</template>

<script>
//import vueValidation from "./components/vueValidation.vue";
import veeValidationRule from "./components/veeValidationRule.vue";


export default {
  name: "App",
  components: {
//    vueValidation,
    veeValidationRule
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
