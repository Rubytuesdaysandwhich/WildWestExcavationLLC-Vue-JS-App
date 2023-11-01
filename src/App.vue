<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// future project addition? Build a grid like CAD program within the website for people to build and submit plans through the website. Find a way for the owner to interact with the customer in this manner during planning?
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
