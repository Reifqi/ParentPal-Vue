<!-- eslint-disable no-unused-vars -->
<template>
    <div class="register-card">
      <div class="register-image">
      </div>
      <div class="register-form">
        <form @submit.prevent = 'saveData'>
          <h1>Register</h1>
          <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" v-model="user.firstname" class="form-control" id="firstname" aria-describedby="firstnameHelp" placeholder="Enter firstname">
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" v-model="user.lastname" class="form-control" id="lastname" aria-describedby="lastnameHelp" placeholder="Enter lastname">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">register</button>
            <p>Sudah punya akun? <router-link to='/'>Login</router-link></p>
        </form>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'

export default{
  name: 'Register',
  data () {
    return {
      result: {},
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      }
    }
  },
  created () {
  },
  mounted () {
    console.log('mounted() called ...')
  },
  methods: {
    saveData () {
      axios.post('http://localhost:9992/user/create', this.user)
        .then(
          ({data}) => {
            alert('saved')
          }
        )
    }

  }
}
</script>
