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
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // TODO - change to 480px
  max-width: 375px;
  background: white;
  margin: 0 auto;
  &__content {
    flex: 1 0 auto;
  }
}
</style>
