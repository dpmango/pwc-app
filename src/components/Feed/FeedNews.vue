<template>
  <div class="f-news">
    <Container>
      <div class="f-news__head">новости PwC</div>
      <div class="f-news__grid">
        <div class="f-news__col">
          <a target="_blank" class="f-news__card">
            <div class="f-news__panel">
              <SvgIcon name="education" />
            </div>
            <div class="f-news__name">Стажировка в PwC</div>
          </a>
        </div>
        <div class="f-news__col">
          <a target="_blank" class="f-news__card">
            <div class="f-news__panel">
              <SvgIcon name="timetable" />
            </div>
            <div class="f-news__name">Ближайшие мероприятия</div>
          </a>
        </div>
        <div class="f-news__col">
          <a target="_blank" class="f-news__card">
            <div class="f-news__panel">
              <SvgIcon name="vacancy" />
            </div>
            <div class="f-news__name">Открытые вакансии в PwC</div>
          </a>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'FeedNews',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.f-news {
  margin: 16px 0;
  &__head {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 8px;
  }
  &__grid {
    display: flex;
    margin: -8px;
  }
  &__col {
    width: 100%;
    min-width: 1px;
    min-width: 0;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    padding: 8px;
  }
  &__card {
  }
  &__panel {
    padding: 20px 10px;
    background: $colorRed;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0;
    .svg-icon {
      font-size: 56px;
    }
  }
  &__name {
    margin-top: 4px;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
  }
}
</style>
