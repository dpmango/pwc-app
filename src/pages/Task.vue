<template>
  <section>
    <Title />
    <TaskHead />
    <TaskQuestion />
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Task',
  data() {
    return {}
  },
  created() {
    this.fetchTest(this.$route.params.id)
  },
  methods: {
    ...mapActions('tests', ['fetchTest']),
  },
}
</script>

<style lang="scss"></style>
