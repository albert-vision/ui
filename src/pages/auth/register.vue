<template>
  <div id="wrapper">
    <section class="container">
    <h1>Register</h1>
      <form>
        <div class="group">
          <input type="text" required="required" v-model="name">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
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
          <a class="btn btn-submit" @click.prevent="register()">Register</a>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { REGISTER } from '../../store/modules/auth'

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    register() {
      this.$store.dispatch(REGISTER, { name: this.$data.name, email: this.$data.email, password: this.$data.password })
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
