<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-image">
      </div>
      <div class="login-form">
        <form @submit.prevent = 'saveData'>
          <h1>Login</h1>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <p>Belum punya akun? <router-link to='/register'>register</router-link></p>

        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  name: 'Login',
  data () {
    return {
      result: {},
      user: {
        email: '',
        password: '',
        isUserLoggedIn: false
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
      axios.post('http://localhost:9992/user/login', this.user)
        .then(
          ({data}) => {
            console.log(data.status)
            try {
              if (data.status === true) {
                alert('login success')
                this.isUserLoggedIn = true
                this.$router.push('/home')
              } else {
                alert('login failed')
              }
            } catch (err) {
              alert('error, please try again')
            }
          }
        )
    }
  }
}
</script>
