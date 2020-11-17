export default {
  async fetchNews({ commit }) {
    /* получаем новости */
    try {
      const {
        data: { data: news },
      } = await this.$http.get('/news')

      commit('setNews', news)

      return {
        data: news,
      }
    } catch (err) {
      console.error('Error news/fetchNews', err)
    }
  },
}
