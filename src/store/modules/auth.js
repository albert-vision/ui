export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

import userService from '../../shared/services/userService'

const state = () => ({
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  hasLoadedOnce: false
})

const getters = {
  authenticated: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user
}

const actions = {
  REGISTER: ({commit}, user) => {
    userService.register(user)
      .then(response => {
        commit(REGISTER, response.data)
      })
  },
  LOGIN: ({commit}, user) => {
    userService.login(user)
      .then(response => {
        commit(LOGIN, response.data)
      })
  },
  LOGOUT: ({commit, dispatch}) => {
    localStorage.removeItem('token')
    commit(LOGOUT)
  }
}

const mutations = {
  REGISTER: (state, payload) => {
    state.user = payload
  },
  LOGIN: (state, payload) => {
    localStorage.setItem('token', payload.token)
    state.token = payload.token
    state.user = payload.user
  },
  LOGOUT: (state) => {
    state.token = ''
    state.user = {}
  },
  AUTH_SUCCESS: (state, resp) => {
    state.status = 'success'
    state.token = resp.data.access_token
    state.hasLoadedOnce = true
  },
  AUTH_ERROR: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  }
}

export default {
  state,
  getters,
  actions,
mutations}
