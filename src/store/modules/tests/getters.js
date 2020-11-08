export default {
  tests: s => s.tests,
  testById: s => id => {
    return s.tests.find(a => a.id === parseInt(id))
  },
}
