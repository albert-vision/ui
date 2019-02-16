<template>
  <header class="site-header">
    <section class="container">
      <router-link to="/" id="logo">Albert Vision</router-link>

      <nav class="site-nav" id="menu">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'projects.create' }">Create Project</router-link>
          </li>
        </ul>
      </nav>
      <div class="menu-toggle">
        <div id="nav-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  </header>

  <!-- 
      <router-link :to="{ name: 'client.accepted-events' }" v-if="authenticated">Accepted Events</router-link>
      <router-link :to="{ name: 'client.completed-events' }" v-if="authenticated">Completed Events</router-link>
      <router-link :to="{ name: 'organizer.event.images.upload' }" v-if="authenticated">Uploader</router-link>
  -->
</template>

<script>
import { LOGOUT } from '../store/modules/auth'

export default {
  computed: {
    authenticated() {
      return this.$store.getters.authenticated;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
      this.$router.push({ name: 'home', query: { redirect: '/' } });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
