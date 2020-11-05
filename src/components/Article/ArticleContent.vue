<template>
  <div class="article">
    <Container>
      <h1 class="article__title">
        {{ article.title }}
      </h1>
      <div class="article__cover" v-if="article.cover_picture">
        <img :src="article.cover_picture.picture_path" :alt="article.title" />
      </div>
      <div class="article__wysiwyg" v-html="bodyContent"></div>
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
    bodyContent() {
      const tagged = this.article.body.replace(
        /(\[)(\w+)(\])/g,
        (match, p1, p2) => {
          const img = this.article.body_pictures.find(
            x => x.id === parseInt(p2)
          )

          return img ? `<img src="${img.picture_path}" />` : ''
        }
      )

      return tagged
    },
    ...mapGetters('publications', ['publicationById']),
  },
}
</script>

<style lang="scss">
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
