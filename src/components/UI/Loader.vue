<template>
  <div class="loader">
    <bounce-loader :loading="true" :color="color" :size="size"></bounce-loader>
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  name: 'Loader',
  data() {
    return {
      color: '#5aa6ff',
      size: '48px',
    }
  },
  components: {
    BounceLoader,
  },
}
</script>

<style lang="scss">
.loader {
  padding: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
