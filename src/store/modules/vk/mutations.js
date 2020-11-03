export default {
  setProfile: (state, profile) => {
    state.profile = profile
  },
  setPersonalCard: (state, personalCard) => {
    const { email, phone } = personalCard
    if (email || phone) {
      state.personalCard = personalCard

      if (phone) {
        state.personalCard = {
          ...personalCard,
          phone: Number(personalCard.phone.match(/\d/g).join('')),
        }
      }
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
