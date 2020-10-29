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
  async fetchTest({ commit, dispatch }, id) {
    /* получаем тест с конкретным id */
    console.log('fetchTest -', id)
    try {
      const { data } = await this.$http.get(`/tests/${id}`)

      commit('setTest', data)

      // fetch questions
      const questions = data.questions_ids
      if (questions) {
        questions.forEach(qid => {
          dispatch(
            'questions/fetchQuestion',
            {
              id: qid,
              session_key: data.session_key,
            },
            { root: true }
          )
        })
      }
    } catch (err) {
      console.error('Error tests/fetchTest', err)
    }
  },
}
