<template>
  <div class="navigation">
    <div class="navigation__grid">
      <div class="navigation__col">
        <router-link to="/feed" class="nav-link">
          <div class="nav-link__icon">
            <SvgIcon name="home" />
          </div>
          <p class="nav-link__title">Лента</p>
        </router-link>
      </div>
      <div class="navigation__col">
        <router-link to="/profile" class="nav-link">
          <div class="nav-link__icon">
            <SvgIcon name="profile" />
          </div>
          <p class="nav-link__title">Профиль</p>
        </router-link>
      </div>
      <div class="navigation__col">
        <router-link to="/articles" class="nav-link">
          <div class="nav-link__icon">
            <SvgIcon name="articles" />
          </div>
          <p class="nav-link__title">Статьи</p>
        </router-link>
      </div>
      <div class="navigation__col">
        <router-link to="/tasks" class="nav-link">
          <div class="nav-link__icon">
            <SvgIcon name="lightbulb" />
          </div>
          <p class="nav-link__title">Задания</p>
        </router-link>
      </div>
      <div class="navigation__col">
        <router-link to="/pwc" class="nav-link">
          <div class="nav-link__icon">
            <SvgIcon name="note" />
          </div>
          <p class="nav-link__title">PwC</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  z-index: 9;
  background: white;
  width: 100%;
  max-width: 480px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 0;
  &__grid {
    display: flex;
  }
  &__col {
    width: 100%;
    min-width: 1px;
    min-height: 0;
    flex: 0 0 20%;
    max-width: 20%;
  }
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba($colorGray, 0.24);
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  transition: color 0.25s $ease;
  &:hover,
  &.router-link-active {
    color: $colorGray;
  }
  &__icon {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 22px;
  }
  &__title {
    flex: 0 0 auto;
    display: inline-block;
    margin-top: 4px;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
  }
  .svg-icon {
    font-size: 15px;
    &--profile {
      font-size: 14px;
    }
  }
}
</style>
