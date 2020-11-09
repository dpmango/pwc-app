export default {
  async fetchQuestion({ commit }, { id, session_key }) {
    /* получаем вопрос с конкретным id */
    try {
      const { data } = await this.$http.get(`/questions/${id}`, {
        params: { session_key: session_key },
      })
      commit('setQuestion', { question: data })
    } catch (err) {
      console.error('Error tests/fetchQuestion', err)
    }
  },
  async postAnswer(_, { qid, aidx, session_key }) {
    /* отправляем ответ на id вопроса (qid) с idx ответа (aidx) */
    try {
      const { data } = await this.$http.post(`/questions/${qid}`, {
        session_key: session_key,
        answer: aidx,
      })

      return data
    } catch (err) {
      console.error('Error tests/отправляем', err)
    }
  },
}
