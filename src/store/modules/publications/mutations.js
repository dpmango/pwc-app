export default {
  setPublications: (state, publications) => {
    state.publications = publications
  },
  setPublication: (state, publication) => {
    const index = state.publications.map(x => x.id).indexOf(publication.id)

    // change or append
    if (index !== -1) {
      Object.assign(state.publications, publication)
    } else {
      state.publications = [
        ...state.publications.filter(t => t.id !== parseInt(publication.id)),
        publication,
      ]
    }
  },
  setLikeStatus: (state, { id, status, likes_count }) => {
    const article = state.publications.find(a => a.id === parseInt(id))

    // if no count/status passed - guess it (instant action)
    // when api responce ready - set exact values (double check)
    if (likes_count !== undefined && status !== undefined) {
      article.like = status
      article.likes_count = likes_count
    } else {
      article.like = !article.like
      article.like ? article.likes_count++ : article.likes_count--
    }

    Object.assign(state.publications, article)
  },
  setShareStatus: (state, { id, status, reposts_count }) => {
    const article = state.publications.find(a => a.id === parseInt(id))

    // if no count/status passed - guess it (instant action)
    // when api responce ready - set exact values (double check)
    if (reposts_count !== undefined && status !== undefined) {
      article.repost = status
      article.reposts_count = reposts_count
    } else {
      article.repost ? article.reposts_count : article.reposts_count++
      article.repost = true
    }

    Object.assign(state.publications, article)
  },
}
