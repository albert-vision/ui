<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light" id="header-main">
    <div class="container">
    <router-link to="/" class="navbar-brand">Albert Vision</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <nav class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav my-lg-0-right">
        <li class="nav-item">
          <router-link :to="{ name: 'entities.create' }" class="nav-link">Create Entity</router-link>
        </li>
      </ul>
    </nav>
    </div>
  </div>
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
