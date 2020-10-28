import Vue from 'vue'

export default {
  setTests: (state, tests) => {
    state.tests = tests
  },
  setTest: (state, test) => {
    const index = state.tests.map(x => x.id).indexOf(test.id)

    // TODO - better tpye use type ARRAY in API
    const ids = test.questions_ids
      .substring(1, test.questions_ids.length - 1)
      .split(',')

    Vue.set(state.tests[index], 'questions_ids', ids)
    Vue.set(state.tests[index], 'questions_order', test.questions_order)
    Vue.set(state.tests[index], 'session_key', test.session_key)
  },
}
