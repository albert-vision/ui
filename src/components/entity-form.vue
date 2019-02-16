<template>
  <div>
    <h3>Create Entity</h3>
    <form action>
      <input type="text" placeholder="Entity name">
      <p>Properties</p>
      <div>
        <select v-model="newProperty.type">
          <option selected>Select type</option>
          <option v-for="type in baseTypes" :key="type.label" :value="type">{{ type.label }}</option>
        </select>
        <input type="checkbox" v-model="newProperty.multiple">Multiple
        <input type="text" v-model="newProperty.name" placeholder="Property name">
        <button @click.prevent="addProperty()">Add Property</button>
      </div>
      <div v-for="property in properties" :key="property.name">
        <select disabled>
          <option v-for="type in baseTypes" :key="type.label">{{ type.label }}</option>
        </select>
        <input type="text" :value="property.name" disabled>
        <button @click.prevent="removeProperty()">Remove</button>
      </div>
      <br>
      <button @click.prevent="createEntity()">Save Entity</button>
    </form>
  </div>
</template>


<script>
import { CREATE_PROPERTY, CREATE_ENTITY } from '@/store/modules/projects'

export default {
  data() {
    return {
      newProperty: {},
    }
  },
  computed: {
    baseTypes() {
      return this.$store.getters.baseTypes
    },
    properties() {
      return this.$store.getters.newEntity.properties
    },
    newEntity() {
      return this.$store.getters.newEntity
    },
  },
  methods: {
    addProperty() {
      this.$store.dispatch(CREATE_PROPERTY, this.$data.newProperty)
      this.$data.newProperty = {}
    },
    removeProperty() {
    },
    createEntity() {
      this.$store.dispatch(CREATE_ENTITY, this.newEntity)
    }
  }
}

</script>

<style>
</style>