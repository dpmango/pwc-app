import shuffle from 'lodash/shuffle'

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
  async fetchTest({ commit, dispatch }, { id, mode }) {
    /* получаем тест с конкретным id */
    /* или делаем запрос на получение обновленного результата (full | score) */

    try {
      let { data } = await this.$http.get(`/tests/${id}`)

      // randomize (shuffle) questions if needed
      const qOrder = data.questions_order
      if (qOrder && qOrder === 'random' && mode === 'full') {
        data.questions_ids = shuffle(data.questions_ids)
      }

      commit('setTest', data)

      // fetch questions (order doesnt matter)
      const questions = data.questions_ids
      if (questions && mode === 'full') {
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
  async flushProfileResults({ dispatch }) {
    await this.$http.delete('/profiles/deleteTestsResults')
    dispatch('fetchTests')
  },
}
