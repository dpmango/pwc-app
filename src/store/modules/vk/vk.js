import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  profile: {
    id: 0,
    first_name: '',
    last_name: '',
    sex: 0,
    city: { id: 0, title: '' },
    country: { id: 0, title: '' },
    photo_100: '',
    photo_max_orig: '',
    photo_200: '',
    timezone: 0,
  },
  personalCard: {
    email: undefined,
    level: undefined,
    phone: undefined,
    points: undefined,
  },
  utm: undefined,
  iframe: undefined,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
