<template>
  <section>
    <Head />
    <FeedPopular title="Популярное" />
    <Container>
      <ArticleCard v-for="a in articles" :key="a.id" :data="a" />
    </Container>
  </section>
</template>

<script>
import data from './articlesData'

export default {
  name: 'Feed',
  data() {
    return {
      articles: [],
    }
  },
  created() {
    this.articles = data
  },
}
</script>

<style lang="scss"></style>
