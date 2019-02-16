<template>
  <div>
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue"
//import Footer from "~/components/Footer.vue"

export default {
  components: {
    navigation,
    //   Footer
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

