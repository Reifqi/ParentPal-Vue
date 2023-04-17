<template>
    <div class="home">
        <Navigation/>
        <h1>Home</h1>
        <img src="../../assets/image/familly.svg" alt="">
    </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default{
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
