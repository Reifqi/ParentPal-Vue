<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent = 'saveData'>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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
