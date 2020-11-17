<template>
  <div class="f-news" v-if="news">
    <Container>
      <div class="f-news__head">новости PwC</div>
      <div class="f-news__grid">
        <div class="f-news__col" v-for="n in news" :key="n.id">
          <a :href="n.url" target="_blank" class="f-news__card">
            <div class="f-news__panel">
              <SvgIcon name="education" />
            </div>
            <div class="f-news__name" v-if="n.title">{{ n.title }}</div>
          </a>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FeedNews',
  created() {
    this.fetchNews()
  },
  computed: {
    ...mapGetters('news', ['news']),
  },
  methods: {
    ...mapActions('news', ['fetchNews']),
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
    flex-wrap: wrap;
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
    display: block;
    transition: 0.25s $ease;
    &:hover {
      opacity: 0.75;
    }
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
    img {
      max-width: 100%;
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
