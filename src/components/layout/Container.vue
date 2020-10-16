<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
}
</style>
