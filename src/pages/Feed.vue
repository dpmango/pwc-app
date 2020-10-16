<template>
  <div class="head">
    <Logo />
    <h1>test</h1>
  </div>
</template>

<script>
import Logo from '@/img/logo.svg'

console.log(Logo)
export default {
  name: 'Feed',
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
.head {
}
</style>
