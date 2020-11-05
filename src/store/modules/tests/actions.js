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
  async fetchTest({ commit, dispatch }, id) {
    /* получаем тест с конкретным id */
    console.log('fetchTest -', parseInt(id))
    try {
      let { data } = await this.$http.get(`/tests/${id}`)

      // randomize (shuffle) questions if needed
      const qOrder = data.questions_order
      if (qOrder && qOrder === 'random') {
        data.questions_ids = shuffle(data.questions_ids)
      }

      commit('setTest', data)

      // fetch questions (order doesnt matter)
      // TODO - butch possible on backend side ?
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
  async flushProfileResults({ dispatch }) {
    await this.$http.delete('/profiles/deleteTestsResults')
    dispatch('fetchTests')
  },
}
