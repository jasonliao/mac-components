<template>
  <button @click="handleClick"><slot></slot></button>
</template>

<style scoped>
  button {
  }
</style>

<script>
export default {
  name: 'mac-push-buttons',
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

