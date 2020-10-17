import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  profile: undefined,
  personalCard: undefined,
  pushAllow: undefined,
  token: undefined,
  utm: undefined,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
