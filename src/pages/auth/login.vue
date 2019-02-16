<template>
  <div id="wrapper">
    <section class="container">
      <h1>Login</h1>
      <form>
        <div class="group">
          <input type="text" required="required" v-model="email">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input type="password" required="required" v-model="password">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>

        <div class="btn-box">
          <a class="btn btn-submit" @click.prevent="login()">Login</a>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { LOGIN } from '../../store/modules/auth'

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      this.$store.dispatch(LOGIN, { email: this.$data.email, password: this.$data.password })
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
