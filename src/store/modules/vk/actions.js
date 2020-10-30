import bridge from '@vkontakte/vk-bridge'
import { VK_APP_URL } from '../../../http/constants'
export default {
  async fetchProfile({ commit, getters, dispatch }) {
    /* получаем данные профиля вк и отправляем на API */
    try {
      const profile = await bridge.send('VKWebAppGetUserInfo', {})
      let profilePayload = profile

      commit('setProfile', profile)

      const vkfields = getters.utm
      if (vkfields) {
        profilePayload = { ...profilePayload, ...vkfields }
      }

      dispatch('patchProfile', profilePayload)

      return {
        data: profile,
      }
    } catch (err) {
      console.error('Error vk/fetchProfile', err)
    }
  },
  fetchUserPhone() {
    return new Promise(resolve => {
      bridge
        .send('VKWebAppGetPhoneNumber', {})
        .then(({ phone_number: phone }) => resolve(phone))
        .finally(() => resolve({}))
    })
  },
  fetchUserEmail() {
    return new Promise(resolve => {
      bridge
        .send('VKWebAppGetEmail', {})
        .then(({ email }) => resolve(email))
        .finally(() => resolve({}))
    })
  },
  async fetchPersonalCard({ commit, dispatch }) {
    /* получение телефона и email авторизованного юзера */
    let personalCard = {}
    let phone, email

    // проверяем если данные уже есть (не запрашивать дважды)
    let {
      data: { phone: userPhone, email: userEmail },
    } = await this.$http.get('/profiles')

    if (userPhone) {
      personalCard.phone = userPhone
    }
    if (userEmail) {
      personalCard.email = userEmail
    }

    const { platform } = await bridge.send('VKWebAppGetClientVersion')

    if (platform === 'web' || platform === 'mobile-web') {
      if (!userPhone) {
        phone = await dispatch('fetchUserPhone')
      }
      if (!userEmail) {
        email = await dispatch('fetchUserEmail')
      }

      if (phone) {
        personalCard.phone = phone
      }
      if (email) {
        personalCard.email = email
      }
    } else {
      if (!userEmail || !userPhone) {
        const { phone, email } = await bridge.send('VKWebAppGetPersonalCard', {
          type: ['phone', 'email'],
        })

        if (phone && email) {
          personalCard = { phone, email }
        }
      }
    }

    if (personalCard.phone) {
      personalCard.phone.replace(/[^0-9]/g, '')
    }

    commit('setPersonalCard', personalCard)

    if (!userEmail || !userPhone) {
      dispatch('patchProfile', personalCard)
    }

    return {
      data: personalCard,
    }
  },
  async patchProfile(_, payload) {
    /* отправка email телефон и город взятх из вк */
    try {
      // конвертация first_name в name
      if (payload.first_name) {
        payload.name = payload.first_name
        delete payload.first_name
      }
      if (payload.last_name) {
        payload.surname = payload.last_name
        delete payload.last_name
      }

      const response = await this.$http.patch('/profiles', payload)

      return {
        data: response,
      }
    } catch (err) {
      console.error('Error vk/patchProfile', err)
    }
  },
  async postStory(_, { url }) {
    try {
      if (!url) {
        url =
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ068-W-91Lvd-CSDKVuYRhPkDZzZaHWdFnRw&usqp=CAU'
      }

      const res = await bridge.send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url,
        attachment: {
          text: 'go_to',
          type: 'url',
          url: `${VK_APP_URL}#utm_source=share`,
        },
      })

      return res
    } catch (err) {
      console.error('Error vk/postStory', err)
    }
  },
  async shareApp() {
    try {
      await bridge.send('VKWebAppShare', {
        link: `${VK_APP_URL}#utm_source=share`,
      })
    } catch (err) {
      console.error('Error vk/shareApp', err)
    }
  },
  async postOnWall(_, { message, attach }) {
    try {
      let options = {}
      if (message) {
        options = {
          message: message,
          attachments: [],
        }
      }
      if (attach) {
        options = { ...options, attachments: [attach] }
      }

      bridge.send('VKWebAppShowWallPostBox', options)
    } catch (err) {
      console.error('Error vk/postOnWall', err)
    }
  },
}
