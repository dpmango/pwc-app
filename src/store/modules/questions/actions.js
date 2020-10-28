export default {
  async fetchQuestion({ commit }, { id, session_key }) {
    /* получаем вопрос с конкретным id */
    console.log('fetchQuestion -', id, session_key)
    try {
      const { data } = await this.$http.get(`/questions/${id}`, {
        params: { session_key: session_key },
      })
      commit('setQuestion', { question: data, id: id })
    } catch (err) {
      console.error('Error tests/fetchQuestion', err)
    }
  },
  // async likePublication({ commit }, id) {
  //   /* Обработка лайков */
  //   try {
  //     commit('setLikeStatus', {
  //       id: id,
  //       status: like,
  //     })

  //     const {
  //       data: { like },
  //     } = await this.$http.post(`/publications/${id}/like`)
  //   } catch (err) {
  //     console.error('Error publications/likePublication', err)
  //   }
  // },
}
