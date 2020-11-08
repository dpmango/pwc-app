<template>
  <section>
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
    this.fetchTest({ id: this.$route.params.id, mode: 'full' })
  },
  methods: {
    ...mapActions('tests', ['fetchTest']),
  },
}
</script>

<style lang="scss"></style>
