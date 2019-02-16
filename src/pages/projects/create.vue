<template>
  <div id="wrapper">
    <section class="container">
      <h1>Create Project</h1>
      <project-form></project-form>
    </section>
  </div>
</template>

<script>
import projectForm from '@/components/project-form'

export default {
  components: {
      projectForm
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
