import Vue from 'vue'

export default {
  setTests: (state, tests) => {
    state.tests = tests
  },
  setTest: (state, test) => {
    const index = state.tests.map(x => x.id).indexOf(test.id)

    Vue.set(state.tests[index], 'questions_ids', test.questions_ids)
    Vue.set(state.tests[index], 'questions_order', test.questions_order)
    Vue.set(state.tests[index], 'session_key', test.session_key)
  },
}
