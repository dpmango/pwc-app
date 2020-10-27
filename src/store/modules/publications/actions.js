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
  async likePublication({ commit }, id) {
    /* Обработка лайков */
    try {
      commit('setLikeStatus', {
        id: id,
        status: like,
      })

      const {
        data: { like },
      } = await this.$http.post(`/publications/${id}/like`)
    } catch (err) {
      console.error('Error publications/likePublication', err)
    }
  },
  async sharePublication({ commit }, id) {
    /* Обработка шеринга */
    try {
      commit('setShareStatus', {
        id: id,
        status: repost,
      })

      const {
        data: { repost },
      } = await this.$http.post(`/publications/${id}/repost`)
    } catch (err) {
      console.error('Error publications/sharePublication', err)
    }
  },
}
