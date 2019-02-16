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
      step: 1
    }
  },
  components: {
    entityForm
  },
  computed: {
    entities() {
      return this.$store.getters.newProject.entities
    },
  }
}
</script>

<style>
</style>