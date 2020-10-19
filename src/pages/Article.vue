<template>
  <section>
    <Title />
    <ArticleContent />
  </section>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {}
  },
  mounted() {
    console.log('route id', this.$route.params.id)
  },
}
</script>

<style lang="scss"></style>
