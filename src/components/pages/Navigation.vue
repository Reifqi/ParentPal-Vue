<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiay">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Parpal</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/community">Community</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/babyname">Name Finder</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/alphabet">Learn Alphabet</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style>
</style>
