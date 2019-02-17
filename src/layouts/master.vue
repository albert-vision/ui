<template>
  <div class="d-flex flex-column flex-shrink-0">
    <main>
      <navigation></navigation>
      <router-view/>
    </main>
    <footerMain/>
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue"
import footerMain from "@/components/footer.vue"

export default {
  components: {
    navigation,
      footerMain
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

