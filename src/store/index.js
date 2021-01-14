import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from "@/store/modules/auth";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  }
})
