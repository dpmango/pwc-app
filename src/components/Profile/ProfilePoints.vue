<template>
  <div class="p-points">
    <Container>
      <div class="p-points__container">
        <div class="p-points__wrapper">
          <div class="p-points__content">
            <div class="p-points__label">ВАШИ БАЛЛЫ</div>
            <div class="p-points__value">210</div>
          </div>
          <div class="p-points__reward">
            <RewardSvg />
          </div>
        </div>
        <div class="p-points__cta">
          <router-link class="p-points__cta-link" to="/profile/points">
            Информация о баллах
          </router-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import RewardSvg from '@/assets/reward.svg'

export default {
  name: 'ProfilePoints',
  components: {
    RewardSvg,
  },
}
</script>

<style lang="scss" scoped>
.p-points {
  margin-top: 16px;
  &__container {
    border: 1px solid rgba(#0a0a14, 0.08);
    padding: 16px 24px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__content {
    flex: 1 1 auto;
  }
  &__label {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: rgba($colorGrayLight, 0.87);
  }
  &__value {
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    color: $colorGray;
  }
  &__reward {
    flex: 0 0 auto;
  }
  &__cta {
    margin-top: 16px;
  }
  &__cta-link {
    display: block;
    padding: 14px;
    background: $fontColor;
    color: white;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
    text-align: center;
    transition: 0.25s $ease;
    &:hover {
      background: $colorRed;
    }
  }
}
</style>
