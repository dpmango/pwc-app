export default {
  async fetchTests({ commit }) {
    /* получаем тесты пользователя */
    try {
      const {
        data: { data: tests },
      } = await this.$http.get('/tests')

      commit('setTests', tests)

      return {
        data: tests,
      }
    } catch (err) {
      console.error('Error tests/fetchTests', err)
    }
  },
  async fetchTest({ commit }, id) {
    /* получаем тест с конкретным id */
    console.log('fetchTest -', id)
    try {
      const { data } = await this.$http.get(`/tests/${id}`)

      commit('setTest', data)
    } catch (err) {
      console.error('Error tests/fetchTest', err)
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
