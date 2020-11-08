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
      })

      const {
        data: { like, likes_count },
      } = await this.$http.post(`/publications/${id}/like`)

      commit('setLikeStatus', {
        id: id,
        status: like,
        likes_count: likes_count,
      })
    } catch (err) {
      console.error('Error publications/likePublication', err)
    }
  },
  async sharePublication({ commit }, id) {
    /* Обработка шеринга */
    try {
      commit('setShareStatus', {
        id: id,
      })

      const {
        data: { repost, reposts_count },
      } = await this.$http.post(`/publications/${id}/repost`)

      commit('setShareStatus', {
        id: id,
        status: repost,
        reposts_count: reposts_count,
      })
    } catch (err) {
      console.error('Error publications/sharePublication', err)
    }
  },
}
