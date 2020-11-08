<template>
  <div class="task-head" v-if="test">
    <Container>
      <div class="task-head__title" v-if="test.description">
        {{ test.description }}
      </div>

      <div class="task-head__image" v-if="test.test_pictures.length">
        <img :src="test.test_pictures[0].picture_path" :alt="test.title" />
      </div>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TaskHead',
  props: {},
  computed: {
    test() {
      return this.testById(this.$route.params.id)
    },
    ...mapGetters('tests', ['testById']),
  },
}
</script>

<style lang="scss" scoped>
.task-head {
  margin: 16px 0;
  text-align: center;
  &__title {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }
  &__image {
    margin-top: 16px;
    img,
    picture {
      max-width: 100%;
    }
  }
}
</style>
