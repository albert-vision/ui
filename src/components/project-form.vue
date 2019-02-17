<template>
  <div>
    <!-- Step 1 - Details -->
    <div v-if="step == 1">
      <h3>Details</h3>
      <input type="text" class="form-control" placeholder="Project name">
      <br>
      <select class="form-control">
        <option value="0" disabled>Select language</option>
        <option value="java">Java</option>
      </select>
    </div>
    <!-- Step 2 - Entities -->
    <div v-if="step == 2">
      <h3 class="page-header">Entities</h3>
      <div class="row">
        <div class="col-3" v-for="entity in entities">
          <entity-single :entity="entity"></entity-single>
        </div>
      </div>
      <br>
      <div>
        <button class="btn btn-primary" @click="showEntityForm = !showEntityForm">+</button>
        <entity-form v-if="showEntityForm"></entity-form>
        <br>
      </div>
    </div>

    <!-- Step 3 - Events -->
    <div v-if="step == 3">
      <h3 class="page-header">Events</h3>
      <div class="row">
        <div class="col-3" v-for="event in events">
          <event-single :event="event"></event-single>
        </div>
      </div>
      <br>
      <div>
        <button class="btn btn-primary" @click="showEventForm = !showEventForm">+</button>
        <event-form v-if="showEventForm"></event-form>
        <br>
      </div>
    </div>
    <!-- Step 4 - Overview + Generation -->
    <div v-if="step == 4">
      <h3>Overview</h3>
      <div class="card">
        <div class="card-body">
          {{ newProject }}
          <button class="btn btn-primary" @click.prevent="generate()">Generate</button>
        </div>
      </div>
    </div>
    <br>
    <button class="btn btn-primary" @click.prevent="previousStep()" v-if="step > 1">Back</button>
    <button class="btn btn-primary" @click.prevent="nextStep()" v-if="step < 4">Next</button>
  </div>
</template>

<script>
import { CHANGE_STEP } from '@/store/modules/projects'

import entityForm from '@/components/entity-form'
import eventForm from '@/components/event-form'
import entitySingle from "./entity-single";
import eventSingle from "./event-single";

import projectService from '@/shared/services/projectService'

export default {
  data() {
    return {
      showEntityForm: false,
      showEventForm: false,
      formattedProject: {
        language: '',
        types: [],
        events: []
      }
    }
  },
  components: {
    entitySingle,
    eventSingle,
    entityForm,
    eventForm
  },
  computed: {
    entities() {
      return this.$store.getters.newProject.entities
    },
    events() {
      return this.$store.getters.newProject.events
    },
    step() {
      return this.$store.getters.newProject.step
    },
    newProject() {
      return this.$store.getters.newProject
    }
  },
  methods: {
    nextStep() {
      this.$store.dispatch(CHANGE_STEP, Number(this.$store.getters.newProject.step) + 1)
    },
    previousStep() {
      this.$store.dispatch(CHANGE_STEP, Number(this.$store.getters.newProject.step) - 1)
    },
    generate() {
      console.log(this.$data.newProject)
      projectService.generate({})
        .then(response => {
          console.log(response)
        })

    }
  }
}
</script>

<style>
</style>