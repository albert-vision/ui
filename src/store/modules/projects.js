export const CREATE_PROJECT = 'CREATE_PROJECT'
export const CHANGE_STEP = 'CHANGE_STEP'
export const CREATE_ENTITY = 'CREATE_ENTITY'
export const CREATE_PROPERTY = 'CREATE_PROPERTY'

const state = () => ({
  newProject: {
    title: '',
    entities: [],
    events: [],
    step: 2
  },
  baseTypes: [
    {label: 'Integer', keyword: 'int'},
    {label: 'String', keyword: 'string'}
  ]
})

const getters = {
  newProject: state => {
    return state.newProject
  },

  baseTypes: state => {
    return state.baseTypes
  }
}

const actions = {
  CREATE_ENTITY: ({commit}, entity) => {
    commit(CREATE_ENTITY, entity)
  },

  CHANGE_STEP: ({commit}, step) => {
    commit(CHANGE_STEP, step)
  }
}

const mutations = {
 
  CREATE_ENTITY: (state, payload) => {
    console.log(payload)
    state.newEntity = payload
    state.newProject.entities.push(payload)
  },
  CHANGE_STEP: (state, payload) => {
    state.newProject.step = payload
  }

}

export default {
  state,
  getters,
  actions,
mutations}
