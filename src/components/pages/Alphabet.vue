<template>
    <div class="alphabet-page">
      <Navigation/>
      <h1>Click to learn alphabets!</h1>
      <h3>Listen carefully, and also pronounce it!</h3>
      <div class="alphabet-button">
        <button v-for="(audio, alphabet) in audioFiles" :key="alphabet" @click="playSound(audio)">
          {{ alphabet }}
        </button>
      </div>
    </div>
  </template>

<script>
import Navigation from './Navigation.vue'

export default {

  name: 'Alphabet',
  components: {
    Navigation
  },

  data () {
    return {
      audioFiles: {
        A: require('@/assets/audio/A.mp3'),
        B: require('@/assets/audio/B.mp3'),
        C: require('@/assets/audio/C.mp3'),
        D: require('@/assets/audio/D.mp3'),
        E: require('@/assets/audio/E.mp3'),
        F: require('@/assets/audio/F.mp3'),
        G: require('@/assets/audio/G.mp3'),
        H: require('@/assets/audio/H.mp3'),
        I: require('@/assets/audio/I.mp3'),
        J: require('@/assets/audio/J.mp3'),
        K: require('@/assets/audio/K.mp3'),
        L: require('@/assets/audio/L.mp3'),
        M: require('@/assets/audio/M.mp3'),
        N: require('@/assets/audio/N.mp3'),
        O: require('@/assets/audio/O.mp3'),
        P: require('@/assets/audio/P.mp3'),
        Q: require('@/assets/audio/Q.mp3'),
        R: require('@/assets/audio/R.mp3'),
        S: require('@/assets/audio/S.mp3'),
        T: require('@/assets/audio/T.mp3'),
        U: require('@/assets/audio/U.mp3'),
        V: require('@/assets/audio/V.mp3'),
        W: require('@/assets/audio/W.mp3'),
        X: require('@/assets/audio/X.mp3'),
        Y: require('@/assets/audio/Y.mp3'),
        Z: require('@/assets/audio/Z.mp3')
      },
      audio: null
    }
  },
  methods: {
    playSound (audioFile) {
      // stop any currently playing audio
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      // create new audio element for selected alphabet
      this.audio = new Audio(audioFile)
      this.audio.play()
    }
  }
}
</script>
