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
    // console.log('App mounted -w.loc', window.location.search)
    const vkFrameFields = getUtmFields(window.location.search)
    const utm = getUtmFields(window.location.hash)

    // Ставим параметры которые передаются приложением vk_ в axios
    if (vkFrameFields) {
      this.$http.defaults.params = {}
      Object.keys(vkFrameFields).forEach(k => {
        this.$http.defaults.params[k] = vkFrameFields[k]
      })
    }

    this.$store.commit('vk/saveIframe', vkFrameFields)
    this.$store.commit('vk/saveUtm', utm)
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
