<template>
  
    <div class="baby-name-finder-container">
      <Navigation/>
      
      <h1>Baby Name List</h1>
      <h3>Choose gender to get list of names</h3>
      <div class="baby-name-finder-category__button">
        <button class="baby-name-finder__icon-male" @click="fetchData('boy')">
          Boy
        </button>
        <button class="baby-name-finder__icon-female" @click="fetchData('girl')">
          Girl
        </button>
        <button class="baby-name-finder__icon-unisex" @click="fetchData('neutral')">
          Neutral
        </button>
      </div>
      <div class="baby-name-finder-category__list">
        <h3 v-if="names.length > 0">
          List of names based on chosen gender
          <ul>
            <li v-for="(name, index) in names" :key="index">{{ name }}</li>
          </ul>
        </h3>
      </div>
    </div>
</template>



<script>
import axios from 'axios'
import Navigation from './Navigation.vue';

export default {

  name: 'BabyNameFinder',
  components: {
    Navigation
  },

  name: 'BabyNameFinder',
  data () {
    return {
      names: []
    }
  },
  methods: {
    fetchData (gender) {
      axios
        .get(`https://api.api-ninjas.com/v1/babynames?gender=${gender}`, {
          headers: {
            'X-Api-Key': 'uM1wOLi/oHua9DCIqS9w9Q==7BXf693NIAcBavA5',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.names = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
