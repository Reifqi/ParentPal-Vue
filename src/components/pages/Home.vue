<template>
  <div class="home">
    <Navigation />
    <div class="container-header">
      <div class="row">
        <div class="column-header">
          <img
            src="../../assets/image/familly.svg"
            alt="familly"
            id="familly-img"
          />
          <img
            src="../../assets/image/circle.svg"
            alt="circle-img"
            id="circle-img"
            />
        </div>
        <div class="column-header">
          <article>
            <h2 id="judul">
              Welcome to EarlEdu! <br />The best gift a parent can give children
              is time!
            </h2>
            <h2 id="isi">
              EarlEdu is ready to help parents in nurturing their loved ones!
            </h2>
          </article>
        </div>
      </div>
      <img src="../../assets/image/line.svg" id="line-img" alt="Line" />
    </div>
    <div class="container-feature" id="features">
      <h1>FEATURES</h1>
      <div class="wrapper">
        <div class="card-community">
          <router-link to="/community">
            <div class="card">
              <img src="../../assets/image/home-community.svg" alt="logofeature"/>
              <h3>Community</h3>
              <p>Come join the community!</p>
              <p>The community is ready to help on solving your problems!</p>
            </div>
          </router-link>
        </div>
        <div class="card-finder">
          <router-link to="/babyname">
            <div class="card">
              <img src="../../assets/image/home-babyname.svg" alt="logofeature"/>
              <h3>Baby Name Finder</h3>
              <p>Confused about naming <br> loved ones?</p>
              <p>Come and try out as <br> many names as you'd like!</p>
            </div>
          </router-link>
        </div>
        <div class="card-alphabet">
          <router-link to="/alphabet">
            <div class="card">
              <img src="../../assets/image/home-abc.svg" alt="logofeature"/>
              <h3>Learn Alphabet</h3>
              <p>Come and learn alphabets!</p>
              <p>Click on the alphabet and <br> pronounce it together!</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container-team" id="our-team">
      <h1>OUR TEAM
        <article>Get to know us, nice to meet you!</article>
      </h1>
        <div class="row">
          <div class="column-team1" id="container-team1">
            <div class="card1">
            </div>
          </div>
          <div class="column-team">
            <div class="card">
              <img src="../../assets/image/Rifqi Maulana.jpg" alt="ourteam-img"/>
              <article>Muhammad Rifqi Maulana</article>
              <article>2008107010048</article>
            </div>
          </div>
          <div class="column-team" id="container-team">
            <div class="card">
              <img src="../../assets/image/Stefhani Alba Siregar.png" alt="ourteam-img"/>
              <article>Stefhani Alba Siregar</article>
              <article>2008107010057</article>
            </div>
          </div>
        </div>
    </div>
    <footer id="footer">
        <ul class="icons">
            <li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li><a href="mailto: parpal@gmail.com">Contact Us</a></li>
        </ul>
            <div class="footer-copyright">
                <p>Parpal @ 2023 All Rights Reserved.</p>
            </div>
        </footer>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
