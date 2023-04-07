<!-- eslint-disable no-unused-vars -->
<template>
      <div class="tittle-register">
        <h1>Register</h1>
        <div class="formbox">
          <form @submit.prevent="saveData">
              <div class="textbox-register">
                  <input type="text" v-model="user.firstname"/>
                  <label>First Name</label>
              </div>
              <div class="textbox-register">
                  <input type="text" v-model="user.lastname"/>
                  <label>Last Name</label>
              </div>
              <div class="textbox-register">
                  <input type="email" v-model="user.email"/>
                  <label>Email</label>
              </div>
              <div class="textbox-register">
                  <input type="password" v-model="user.password"/>
                  <label>Password</label>
              </div>
              <button  type="submit" class="button-register">
                  Register
              </button>
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
