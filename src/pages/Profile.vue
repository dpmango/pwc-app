<template>
  <section>
    <Head />
    <ProfileUser />
    <ProfilePoints />
    <FeedPopular title="Получить больше баллов" hideMoreLink />
    <AboutApp />
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {}
  },
  mounted() {
    this.fetchPersonalCard()
  },
  methods: {
    ...mapActions('vk', ['fetchPersonalCard']),
  },
}
</script>

<style lang="scss"></style>
