import Vue from 'vue'

export default {
  setTests: (state, tests) => {
    state.tests = tests
  },
  setTest: (state, test) => {
    const index = state.tests.map(x => x.id).indexOf(test.id)

    const keys = [
      'score',
      'test_completed',
      'questions_ids',
      'questions_order',
      'session_key',
    ]

    keys.forEach(x => {
      if (test[x]) {
        Vue.set(state.tests[index], x, test[x])
      }
    })
  },
}
