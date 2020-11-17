export default {
  publications: s => s.publications,
  publicationsPinned: s => {
    return s.publications
      .filter(a => a.pin)
      .sort((a, b) => a.pin_order - b.pin_order)
  },
  publicationById: s => id => {
    return s.publications.find(a => a.id === parseInt(id))
  },
}
