import { createStore } from 'vuex'
import auth from '../modules/auth'
import articles from '../modules/articles'
import controlArticle from '../modules/controlArticle'

// Create a new store instance.
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {auth, articles, controlArticle},
})

export default store