<template>

    <CallNow />
    <MainHeader />
    <hambuger-menu></hambuger-menu>
    <main>
    <router-view />
    </main>
    <MainFooter />

</template>

<script>
import MainHeader from "../src/components/Header/MainHeader.vue";
import CallNow from "../src/components/Header/CallNowHeader.vue";
import MainFooter from "../src/components/Footer/MainFooter.vue";
import HambugerMenu from "../src/components/Header/HambugerMenuHeader.vue";
export default{
  components: {
    MainHeader,
    CallNow,
    MainFooter,
    HambugerMenu,
  },
}
//!
//*
// future project addition? Build a grid like CAD program within the website for people to build and submit plans through the website. Find a way for the owner to interact with the customer in this manner during planning?
//*
//!
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
  height: 100vh;
  width: 100vw;
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
main{
  padding-bottom: 50px;
}


</style>
