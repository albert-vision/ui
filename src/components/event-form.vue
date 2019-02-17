<template>
  <div>
    <h3>Create Event</h3>
    <form action>
      <input type="text" placeholder="Entity name" v-model="newEvent.name">
      <br>
      <h4>Participants</h4>
      <div v-for="entity in entities" :key="entity.name">
      <input type="checkbox" :value="entity" v-model="selectedParticipants" />{{ entity.name }}
      </div>
      <br>
      <button class="btn btn-primary" @click.prevent="createEvent()">Save Event</button>
    </form>
  </div>
</template>

<script>
import { CREATE_EVENT } from '@/store/modules/projects'

export default {
  data() {
    return {
      selectedParticipants: [],
      newEvent: {
        name: '',
        participants: [],
      }
    }
  },
  computed: {
    entities() {
      return this.$store.getters.newProject.entities
    },
  },
  methods: {
    createEvent() {
      this.$data.newEvent.participants = this.$data.newEvent.selectedParticipants
      console.log(this.$data.newEvent.participants )
      this.$store.dispatch(CREATE_EVENT, this.$data.newEvent)
      this.$data.newEvent = {
        name: '',
        participants: [],
      }
    }
  }
}

</script>

<style>
</style>