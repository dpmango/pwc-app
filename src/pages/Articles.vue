<template>
  <section>
    <Head />
    <Container>
      <ArticleCard v-for="a in articles" :key="a.id" :data="a" />
    </Container>
  </section>
</template>

<script>
import data from './articlesData'

export default {
  name: 'Articles',
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
