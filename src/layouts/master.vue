<template>
  <div>
    <navigation></navigation>
    <router-view/>
    <footer id="footer-main">
      <p class="container text-muted">
        &copy; Albert Vision. All rights reserved.
      </p>
    </footer>
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
@import "@/assets/scss/main.scss";
</style>

