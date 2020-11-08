<template>
  <div class="task-banner">
    <Container>
      <div class="task-banner__wrapper">
        <div class="task-banner__content">
          <div class="task-banner__name">PwC Tasks</div>
          <div class="task-banner__text">
            Проходите задания, читайте <br />статьи и копите баллы!
          </div>
        </div>
        <div class="task-banner__bg">
          <img src="static/bgStars.png" srcset="static/bgStars@2x.png 2x" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'TaskBanner',
}
</script>

<style lang="scss" scoped>
.task-banner {
  margin: 8px 0;
  &__wrapper {
    position: relative;
    z-index: 1;
    overflow: hidden;
    background: $colorRed;
    color: white;
    padding: 16px;
  }
  &__content {
    position: relative;
    z-index: 2;
  }
  &__name {
    font-family: Georgia;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
  }
  &__text {
    margin-top: 4px;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
  }
  &__bg {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    opacity: 0.3;
    @supports (mix-blend-mode: soft-light) {
      opacity: 1;
      mix-blend-mode: soft-light;
    }
    img,
    picture {
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
