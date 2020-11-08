export default {
  questions: s => s.questions,
  questionById: s => id => {
    return s.questions.find(a => a.id === parseInt(id))
  },
}
