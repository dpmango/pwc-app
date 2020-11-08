<template>
  <div class="page">
    <div class="page__content">
      <slot />
    </div>
    <Navigation />
  </div>
</template>

<script>
export default {
  name: 'StandartTemplate',
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  max-width: 480px;
  background: white;
  margin: 0 auto;
  &__content {
    padding-bottom: 68px;
    flex: 1 0 auto;
  }
}
</style>
