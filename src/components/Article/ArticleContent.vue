<template>
  <div class="article">
    <Container>
      <h1 class="article__title">
        {{ article.title }}
      </h1>
      <div class="article__cover">
        <img
          src="/static/articleCover.jpg"
          srcset="/static/articleCover@2x.jpg 2x"
        />
      </div>
      <div class="article__wysiwyg" v-html="article.body"></div>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ArticleContent',
  props: {},
  computed: {
    article() {
      return this.publicationById(this.$route.params.id)
    },
    ...mapGetters('publications', ['publicationById']),
  },
}
</script>

<style lang="scss" scoped>
.article {
  margin: 16px 0;
  &__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
  }
  &__cover {
    margin: 16px 0;
    text-align: center;
    font-size: 0;
    img,
    picture {
      width: 100%;
    }
  }
  &__wysiwyg {
    margin: 16px 0;
    p {
      margin: 16px 0;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
    }
    img,
    picture {
      max-width: 100%;
    }
  }
}
</style>
