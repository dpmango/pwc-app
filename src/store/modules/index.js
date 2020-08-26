
import { camelCase } from 'lodash'

const requireModule = require.context(
  '.',

  true,

  /^(?!.*(actions|mutations|getters|index)).*\.js$/
)

const modules = {}

requireModule.keys().forEach(fileName => {

  if (/\.unit\.js$/.test(fileName)) return

  modules[camelCase(fileName.split('/')[1].replace(/(\.\/|\.js)/g, ''))] = {
    namespaced: true,
    ...requireModule(fileName).default
  }

})

export default modules