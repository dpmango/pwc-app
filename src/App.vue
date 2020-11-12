<template>
  <div class="Root">
    <StandartTemplate>
      <router-view />
    </StandartTemplate>
  </div>
</template>

<script>
import { ScrollTo } from '@/helpers'

const getUrlFields = hash => {
  const fields = hash.substr(1, hash.length - 1).split('&')
  return fields.reduce((acc, field) => {
    const splitField = field.split('=')
    acc[splitField[0]] = splitField[1]

    return acc
  }, {})
}

const clearUtm = hashes => {
  let utm = {}
  Object.keys(hashes).forEach(h => {
    if (h.match('utm')) {
      utm[h] = hashes[h]
    }
  })

  return utm
}

export default {
  data() {
    return {
      loading: true,
    }
  },
  async mounted() {
    const urlSearch = getUrlFields(window.location.search)
    const urlHash = getUrlFields(window.location.hash)

    // Ставим параметры которые передаются приложением vk_ в axios
    if (urlSearch) {
      this.$http.defaults.params = {}
      Object.keys(urlSearch).forEach(k => {
        this.$http.defaults.params[k] = urlSearch[k]
      })

      // проверяем включены ли уведомления
      if (urlSearch.vk_are_notifications_enabled === '0') {
        this.$router.push('/enable-notifications')
      }
    }

    // мониторим диплинки
    if (urlHash) {
      Object.keys(urlHash).forEach(u => {
        if (u.match('publication')) {
          const split = u.split('-')
          if (split.length > 1) {
            this.$router.push(`/articles/${split[1]}`)
          }
        }
        // if (u.match('test')) {
        //   const split = u.split('-')
        //   if (split.length > 1) {
        //     this.$router.push(`/tasks/${split[1]}`)
        //   }
        // }
      })
    }

    this.$store.commit('vk/saveIframe', urlSearch)
    this.$store.commit('vk/saveUtm', clearUtm(urlHash))
    await this.$store.dispatch('init')
    this.loading = false
  },
  watch: {
    $route() {
      ScrollTo(0, 300)
    },
  },
}
</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
@import '@/theme/app.scss';
</style>
