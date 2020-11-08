export default {
  publications: s => s.publications,
  publicationById: s => id => {
    return s.publications.find(a => a.id === parseInt(id))
  },
}
