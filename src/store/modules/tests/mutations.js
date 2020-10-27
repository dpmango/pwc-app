export default {
  setTests: (state, tests) => {
    state.tests = tests
  },
  setTest: (state, test) => {
    const index = state.tests.map(x => x.id).indexOf(test.id)

    state.tests[index] = test
    // state.tests = [...state.tests.filter(t => t.id !== parseInt(test.id)), test]
  },
}
