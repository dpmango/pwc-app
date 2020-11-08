export default {
  setQuestion: (state, { question }) => {
    const index = state.questions.map(x => x.id).indexOf(question.id)

    // change or append
    if (index !== -1) {
      // state.questions[index] = questionWithId
      Object.assign(state.questions, question)
    } else {
      state.questions = [
        ...state.questions.filter(t => t.id !== parseInt(question.id)),
        question,
      ]
    }
  },
}
