export const CREATE_PROJECT = 'CREATE_PROJECT'
export const CREATE_ENTITY = 'CREATE_ENTITY'
export const CREATE_PROPERTY = 'CREATE_PROPERTY'

const state = () => ({
  newProject: {
    title: '',
    entities: [],
    events: []
  },
  newEntity: {
    name: '',
    properties: []
  },
  newProperty: {
    type: '',
    name: '',
    multiple: false
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
  newEntity: state => {
    return state.newEntity
  },
  baseTypes: state => {
    return state.baseTypes
  }
}

const actions = {
  CREATE_PROPERTY: ({commit}, property) => {
    commit(CREATE_PROPERTY, property)
  },
  CREATE_ENTITY: ({commit}, entity) => {
    commit(CREATE_ENTITY, entity)
  }
}

const mutations = {
  CREATE_PROPERTY: (state, payload) => {
    state.newProperty = payload
    state.newEntity.properties.push(payload)
  },
  CREATE_ENTITY: (state, payload) => {
    state.newEntity = payload
    state.newProject.entities.push(payload)
  }

}

export default {
  state,
  getters,
  actions,
mutations}
