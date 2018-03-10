<template>
  <div id="app">
    <img style="width: 700px" src="./../logo/mac-components.png">
    <mac-push-buttons>lalala</mac-push-buttons>
  </div>
</template>

<script>
import PushButtons from './components/buttons/PushButtons.vue'

export default {
  name: 'app',
  components: {
    'mac-push-buttons': PushButtons
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
