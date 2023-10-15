<template>
  <header>
    <div class="wildwest-navigation">
      <router-link to="/home">
        <img
          alt="WildWest Excavation logo"
          src="../../assets/_WildWestExcavationLLC-logo.png"
        />
      </router-link>
      <nav>
        <ul>
          <router-link to="/home">Home</router-link>
          <router-link to="/excavation">Excavation</router-link>
          <router-link to="/landClearing">Land Clearing</router-link>
          <router-link to="/siteWork">Site work</router-link>
          <router-link to="/septicTanks">Septic Tanks</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/ourWork">Our Work</router-link>
          <router-link to="/customerReviews">Customer Reviews</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: white;
  border: solid gold 5px;
  border-top: none;
  border-right: none;
  border-left: none;

  width: 100%;
  height: auto;
}
nav {
  width: fit-content;
  display: inline-block;
  justify-content: right;
  font-size: medium;
  padding: 30px;
}

a {
  /*Router-link*/
  text-decoration: none;
  margin-right: 15px;
  font-size: 20px;
  color: green;
}
.wildwest-navigation {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
}
img {
  width: 6em;
  height: auto;
}
</style>
