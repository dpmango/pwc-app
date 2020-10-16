<template>
  <div class="head">
    <Container>
      <Logo />
    </Container>
  </div>
</template>

<script>
import Logo from '@/assets/logo.svg'

export default {
  name: 'Head',
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
.head {
  flex: 0 0 auto;
  padding: 34px 0 8px;
}
</style>
