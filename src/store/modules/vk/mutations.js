export default {
  setProfile: (state, profile) => {
    state.profile = profile
  },
  setPersonalCard: (state, personalCard) => {
    state.personalCard = {
      ...state.personalCard,
      ...personalCard,
    }
  },
  setToken: (state, token) => {
    state.token = token
  },
  saveUtm: (state, utm) => {
    state.utm = utm
  },
  saveIframe: (state, iframe) => {
    state.iframe = iframe
  },
}
