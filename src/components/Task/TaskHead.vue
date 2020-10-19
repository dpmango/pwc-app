<template>
  <div class="task-head">
    <Container>
      <div class="task-head__title">
        Представь, что ты уже миллиардер. Пройди тест и узнай, сможешь ли ты
        приумножить свое состояние.
      </div>
      <div class="task-head__image">
        <img src="/static/testIllustration_1.svg" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'TaskHead',
  props: {},
}
</script>

<style lang="scss" scoped>
.task-head {
  margin: 16px 0;
  text-align: center;
  &__title {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }
  &__image {
    margin-top: 16px;
    img,
    picture {
      max-width: 100%;
    }
  }
}
</style>
