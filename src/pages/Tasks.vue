<template>
  <section>
    <Head />
    <TaskBanner />
    <div class="task-list">
      <Container v-if="tests">
        <TaskCard v-for="(card, idx) in tests" :key="idx" :data="card" />
      </Container>
      <Loader v-if="tests.length === 0" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Tasks',
  created() {
    this.fetchTests()
  },
  methods: {
    ...mapActions('tests', ['fetchTests']),
  },
  computed: {
    ...mapGetters('tests', ['tests']),
  },
}
</script>

<style lang="scss"></style>
