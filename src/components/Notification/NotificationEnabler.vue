<template>
  <div class="ntcheck">
    <Container>
      <a href="#" class="ntcheck__btn btn-black" @click="handleYesClick">
        Разрешить
      </a>
      <router-link class="ntcheck__btn btn-outline" to="/feed">
        Запретить
      </router-link>
    </Container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NotificationEnabler',
  methods: {
    async handleYesClick() {
      const bridgeRes = await this.enableNotifications()
      if (bridgeRes && bridgeRes.result) {
        this.$router.push('/feed')
      }
    },
    ...mapActions('vk', ['enableNotifications']),
  },
}
</script>

<style lang="scss" scoped>
.ntcheck {
  flex: 0 0 auto;
  padding: 24px 0 24px;
  &__btn {
    -webkit-appearance: none;
    display: block;
    padding: 19px 15px;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
    text-align: center;
    border: 1px solid transparent;
    transition: 0.25s $ease;
    & + & {
      margin-top: 24px;
    }
  }
  .btn-black {
    background: $fontColor;
    color: white;
    &:hover {
      background: $colorRed;
    }
  }
  .btn-outline {
    background: transparent;
    border: 1px solid $colorGrayLight;
    &:hover {
      background: $colorGrayLight;
      color: white;
    }
  }
}
</style>
