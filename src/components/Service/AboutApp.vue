<template>
  <div class="about-app">
    <Container>
      <router-link class="about-app__cta-link" to="/app-info">
        О приложении
      </router-link>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'ProfilePoints',
}
</script>

<style lang="scss" scoped>
@import '@/theme/utils.scss';

.about-app {
  margin: 16px 0;
  &__cta-link {
    display: block;
    padding: 20px 16px;
    background: rgba($colorGray, 0.12);
    color: $colorGray;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
    text-align: center;
    transition: 0.25s $ease;
    &:hover {
      background: $colorGray;
      color: white;
    }
  }
}
</style>
