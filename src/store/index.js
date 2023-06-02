import { createStore } from 'vuex'

export default createStore({
  state: {
    token: "",
    isLogin: false
  },
  getters: {
  },
  mutations: {
    setToken(state){
      state.token = localStorage.getItem('token')
    },
    setLogin(state){
      if(localStorage.getItem('token') != 'null'){
        state.isLogin = true
    }
    else{
        state.isLogin = false
    }
    }
  },
  actions: {
  },
  modules: {
  }
})
