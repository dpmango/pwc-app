export default {
  news: s => s.news,
  newsById: s => id => {
    return s.news.find(a => a.id === parseInt(id))
  },
}
