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
  saveUtm: (state, utm) => {
    state.utm = utm
  },
  saveIframe: (state, iframe) => {
    state.iframe = iframe
  },
}
