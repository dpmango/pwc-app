export default {
  setPublications: (state, publications) => {
    state.publications = publications
  },
  setLikeStatus: (state, { id }) => {
    const article = state.publications.find(a => a.id === parseInt(id))
    article.like = !article.like

    // TODO - better take those values from api
    article.like ? article.likes_count++ : article.likes_count--

    Object.assign(state.publications, article)
  },
  setShareStatus: (state, { id }) => {
    const article = state.publications.find(a => a.id === parseInt(id))
    article.repost = !article.repost

    // TODO - better take those values from api
    article.repost ? article.reposts_count++ : article.reposts_count--

    Object.assign(state.publications, article)
  },
}
