<template>
  <section>
    <Head />
    <StaticContent :name="name" />
  </section>
</template>

<script>
export default {
  name: 'StaticPage',
  data() {
    return {
      name: this.$route.params.name,
    }
  },
}
</script>

<style lang="scss"></style>
