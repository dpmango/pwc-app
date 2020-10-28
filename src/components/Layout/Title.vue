<template>
  <div class="title">
    <Container>
      <div class="title__wrapper">
        <router-link v-if="back" :to="back" class="title__icon">
          <SvgIcon name="back" />
        </router-link>
        <a v-else href="#" @click="handleBackClick" class="title__icon">
          <SvgIcon name="back" />
        </a>
        <div class="title__name">{{ name }}</div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    name: String,
    back: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleBackClick() {
      const hasHistory = window.history.length > 2
      if (hasHistory) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  flex: 0 0 auto;
  padding: 34px 0 8px;
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin-right: 22px;
    font-size: 0;
    will-change: transform;
    transition: transform 0.25s $ease;
    .svg-icon {
      font-size: 16px;
    }
    &:hover {
      transform: translateX(-4px);
    }
  }
  &__name {
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
  }
}
</style>
