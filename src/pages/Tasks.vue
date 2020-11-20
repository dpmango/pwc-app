<template>
  <section>
    <Head />
    <TaskBanner />

    <Container v-if="tests">
      <TaskCard v-for="(card, idx) in tests" :key="idx" :data="card" />
    </Container>
    <Loader v-if="tests.length === 0" />
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
    ...mapActions('tests', ['fetchTests', 'flushProfileResults']),
    ...mapActions('vk', ['disableNotifications']),
  },
  computed: {
    ...mapGetters('tests', ['tests']),
  },
}
</script>

<style lang="scss">
.test-btn {
  background: $fontColor;
  color: white;
  margin-left: 20px;
  border-radius: 4px;
  padding: 4px;
  border: 0;
  font-size: 12px;
  cursor: pointer;
}
</style>
