<template>
  <Container>
    <template v-if="publications">
      <ArticleCard v-for="a in publications" :key="a.id" :data="a" />
    </template>
    <Loader v-if="publications.length === 0" />
  </Container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ArticleList',
  created() {
    this.fetchPublications()
  },
  methods: {
    ...mapActions('publications', ['fetchPublications']),
  },
  computed: {
    ...mapGetters('publications', ['publications']),
  },
}
</script>

<style lang="scss" scoped></style>
