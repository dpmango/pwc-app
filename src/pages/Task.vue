<template>
  <section>
    <Title />
    <TaskHead />
    <TaskQuestion />
  </section>
</template>

<script>
export default {
  name: 'Task',
  data() {
    return {}
  },
  mounted() {
    console.log('route id', this.$route.params.id)
  },
}
</script>

<style lang="scss"></style>
