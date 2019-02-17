<template>
  <div>
    <!-- Step 1 - Details -->
    <div v-if="step == 1">
      <h3>Details</h3>
    </div>
    <!-- Step 2 - Entities -->
    <div v-if="step == 2">
      <h3>Entities</h3>
      <ul>
        <li v-for="entity in entities" :key="entity.name">
          <span>{{ entity.name }}</span>
          <button @click.prevent>Edit</button>
          <button @click.prevent>Remove</button>
        </li>
      </ul>
      <div>
        <button @click="showEntityForm = true">New Entity</button>
        <entity-form v-if="showEntityForm"></entity-form>
        <br>
      </div>
    </div>

    <!-- Step 3 - Events -->
    <div v-if="step == 3">
      <h3>Events</h3>
      <ul>
        <li v-for="entity in entities" :key="entity.name">
          <span>{{ entity.name }}</span>
          <button @click.prevent>Edit</button>
          <button @click.prevent>Remove</button>
        </li>
      </ul>
      <event-form></event-form>
    </div>
    <!-- Step 4 - Overview + Generation -->
    <div v-if="step == 4">
      <h3>Overview</h3>
    </div>
    <button @click.prevent="previousStep()" v-if="step > 1">Back</button>
    <button @click.prevent="nextStep()" v-if="step < 4">Next</button>
  </div>
</template>

<script>
import entityForm from '@/components/entity-form'
import eventForm from '@/components/event-form'
import { CHANGE_STEP } from '@/store/modules/projects'

export default {
  data() {
    return {
      showEntityForm: false
    }
  },
  components: {
    entityForm,
    eventForm
  },
  computed: {
    entities() {
      return this.$store.getters.newProject.entities
    },
    step() {
      return this.$store.getters.newProject.step
    }
  },
  methods: {
    nextStep() {
      this.$store.dispatch(CHANGE_STEP, Number(this.$store.getters.newProject.step) + 1)
    },
    previousStep() {
      this.$store.dispatch(CHANGE_STEP, Number(this.$store.getters.newProject.step) - 1)
    }
  }
}
</script>

<style>
</style>