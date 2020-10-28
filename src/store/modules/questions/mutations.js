export default {
  setQuestion: (state, { question, id }) => {
    const index = state.questions.map(x => x.id).indexOf(id)
    // TODO -make api return id
    const questionWithId = { id: parseInt(id), ...question }

    // change or append
    if (index !== -1) {
      // state.questions[index] = questionWithId
      Object.assign(state.questions, questionWithId)
    } else {
      state.questions = [
        ...state.questions.filter(t => t.id !== parseInt(id)),
        questionWithId,
      ]
    }
  },
}
