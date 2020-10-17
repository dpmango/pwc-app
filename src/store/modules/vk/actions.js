import bridge from '@vkontakte/vk-bridge'
import { VK_APP_URL } from '../../../http/constants'
export default {
  async fetchProfile({ commit }) {
    /* получаем данные профиля вк */
    try {
      const profile = await bridge.send('VKWebAppGetUserInfo', {})

      commit('setProfile', profile)
      return {
        data: profile,
      }
    } catch (err) {
      console.error('Error vk/fetchProfile', err)
    }
  },
  async removeToken() {
    await bridge.send('VKWebAppStorageSet', {
      key: 'accessToken',
      value: '',
    })
  },
  async checkToken({ getters, commit, dispatch }, key) {
    /* проверям токен в vk storage */
    try {
      const utm = getters.utm
      const {
        id: vk_id,
        first_name: name,
        last_name: surname,
      } = getters.profile

      let {
        keys: [token],
      } = await bridge.send('VKWebAppStorageGet', { keys: [key] })

      if (token.value) {
        /* сохраняем токен в локальный стейт */
        commit('setToken', token.value)
        this.$http.defaults.headers.common['X-PROFILE-ACCESS-TOKEN'] =
          token.value
        this.$router.push('/game')
      } else {
        /* если токена нет то получаем его через POST /profiles */
        token = await dispatch('getToken', { vk_id, name, surname })
      }

      if (utm) {
        dispatch('patchProfile', utm)
      }

      return {
        data: token.value,
      }
    } catch (err) {
      console.error('Error vk/checkToken', err)
    }
  },
  async getToken({ dispatch, commit }, payload) {
    /* получем токен через /profiles передав id, first_name, last_name */
    try {
      const {
        data: { access_token: token },
      } = await this.$http.post('/profiles', payload)

      /* записываем токен в vk storage */
      await dispatch('saveToken', { key: 'accessToken', value: token })
      /* сохраняем токен в локальный стейт */
      commit('setToken', token)

      this.$http.defaults.headers.common['X-PROFILE-ACCESS-TOKEN'] = token

      return {
        key: 'token',
        value: token,
      }
    } catch (err) {
      console.error('Error vk/getToken', err)
    }
  },
  async saveToken(_, { key, value }) {
    /* запись токена vk storage */
    try {
      const saveTokenResult = await bridge.send('VKWebAppStorageSet', {
        key,
        value,
      })
      console.log(saveTokenResult)

      return {
        data: saveTokenResult,
      }
    } catch (err) {
      console.error('Error vk/saveToken', err)
    }
  },
  fetchUserPhone() {
    return new Promise(resolve => {
      bridge
        .send('VKWebAppGetPhoneNumber', {})
        .then(({ phone_number: phone }) => resolve({ phone }))
        .finally(() => resolve({}))
    })
  },
  fetchUserEmail() {
    return new Promise(resolve => {
      bridge
        .send('VKWebAppGetEmail', {})
        .then(({ email }) => resolve({ email }))
        .finally(() => resolve({}))
    })
  },
  async fetchPersonalCard({ commit, dispatch }) {
    /* получение телефона и email авторизованного юзера */
    let personalCard = {}
    const { platform } = await bridge.send('VKWebAppGetClientVersion')

    if (platform === 'web') {
      const { phone } = await dispatch('fetchUserPhone')
      const { email } = await dispatch('fetchUserEmail')

      if (phone) {
        personalCard.phone = phone
      }
      if (email) {
        personalCard.email = email
      }
    } else {
      const { phone, email } = await bridge.send('VKWebAppGetPersonalCard', {
        type: ['phone', 'email'],
      })

      if (phone && email) {
        personalCard = { phone, email }
      }
    }
    this.$router.push('/game')
    commit('setPersonalCard', personalCard)

    return {
      data: personalCard,
    }
  },
  async patchProfile(_, payload) {
    /* отправка email телефон и город взятх из вк */
    try {
      const response = await this.$http.patch('/profiles', payload)

      return {
        data: response,
      }
    } catch (err) {
      console.error('Error vk/patchProfile', err)
    }
  },
  async postStory({ dispatch }, { url, token }) {
    try {
      await bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url,
        attachment: {
          text: 'go_to',
          type: 'url',
          url: `${VK_APP_URL}#utm_source=share`,
        },
      })
      dispatch(
        'challenges/post',
        {
          action: 'storyPost',
          token,
        },
        { root: true }
      )
    } catch (err) {
      console.error('Error vk/postStory', err)
    }
  },
}
