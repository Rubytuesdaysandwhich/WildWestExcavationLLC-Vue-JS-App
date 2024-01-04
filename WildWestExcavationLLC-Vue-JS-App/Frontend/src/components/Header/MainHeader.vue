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
          <!-- login -->
          <!-- mission statement/welcome under home page-->
          <!-- mission: striving to provice a good quaility survice and treating you like family and friend with 20 years of service -->
          <router-link to="/excavation">Excavation</router-link>
          <!-- <router-link to="/landClearing">Land Clearing</router-link> -->
          <!-- foundation prep rouf landscape prep under site work page -->
          <router-link to="/siteWork">Site work</router-link>
          <!-- land clearing under site work category -->
          <router-link to="/septicTanks">UnderGround Utilities </router-link>
          <!-- sewer/water/septice system under utility excavation -->
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
@media (max-width: 1220px) {
  header {
    display: none;
  }
}
</style>
