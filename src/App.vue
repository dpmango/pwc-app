<template>
  <div class="Root">
    <StandartTemplate>
      <router-view />
    </StandartTemplate>
  </div>
</template>

<script>
const getUtmFields = hash => {
  const fields = hash.substr(1, hash.length - 1).split('&')
  return fields.reduce((acc, field) => {
    const splitField = field.split('=')
    acc[splitField[0]] = splitField[1]

    return acc
  }, {})
}

export default {
  data() {
    return {
      loading: true,
    }
  },
  async mounted() {
    console.log('App mounted -w.loc', window.location)
    this.$store.commit('vk/saveUtm', getUtmFields(window.location.search))
    await this.$store.dispatch('init')
    this.loading = false
  },
}
</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
@import '@/theme/app.scss';
</style>
