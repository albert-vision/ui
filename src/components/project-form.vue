<template>
  <div>
    <div>
        <ul>
            <li v-for="entity in entities" :key="entity.name">{{ entity.name }}</li>
        </ul>
    </div>
    <entity-form v-if="step == 2"></entity-form>
  </div>
</template>

<script>
import entityForm from '@/components/entity-form'

export default {
  data() {
    return {
    }
  },
  components: {
    entityForm
  },
  computed: {
    entities() {
      return this.$store.getters.newProject.entities
    },
    step() {
      return this.$store.getters.newProject.step || 2
    }
  }
}
</script>

<style>
</style>