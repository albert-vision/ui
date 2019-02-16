export const FETCH_ORGANIZERS = 'FETCH_ORGANIZERS'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_ERROR = 'USERS_ERROR'

import userService from '../../shared/services/userService'

const state = () => ({
  status: '',
  hasLoadedOnce: false,
  organizers: [],
})

const getters = {
  usersStatus: state => state.status,
  organizers: state => {
    return state.organizers
  }
}

const actions = {
  FETCH_ORGANIZERS: ({commit}) => {
    userService.getOrganizers()
      .then(response => {
        commit(FETCH_ORGANIZERS, response.data.organizers)
      })
  },

}

const mutations = {
  FETCH_ORGANIZERS: (state, payload) => {
    state.organizers = payload
  },
  USERS_SUCCESS: (state, resp) => {
    state.status = 'success'
    state.hasLoadedOnce = true
  },
  USERS_ERROR: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  }
}

export default {
  state,
  getters,
  actions,
mutations}
