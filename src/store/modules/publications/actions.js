export default {
  async fetchPublications({ commit }) {
    /* получаем публикации пользователя */
    try {
      const {
        data: { data: publications },
      } = await this.$http.get('/publications')

      commit('setPublications', publications)

      return {
        data: publications,
      }
    } catch (err) {
      console.error('Error publications/fetchPublications', err)
    }
  },
}
