<template>
  <div id="app">
    <img style="width: 700px" src="./../logo/mac-components.png">
    <div>
      <mac-push-buttons @click="handleClick">I am a push button without style</mac-push-buttons>
    </div>
  </div>
</template>

<script>
import PushButtons from './components/buttons/PushButtons.vue'

export default {
  name: 'app',
  components: {
    'mac-push-buttons': PushButtons
  },
  methods: {
    handleClick(e) {
      alert('I am a push button without style')
    }
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
