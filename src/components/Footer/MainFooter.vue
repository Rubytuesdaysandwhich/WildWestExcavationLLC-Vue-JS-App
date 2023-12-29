<template>
  <div class="footerContainer">
    <footer>
      <div class="wildwest-navigation">
        <nav>
          <ul>
            <router-link to="/home">Home</router-link>
            <router-link to="/excavation">Excavation</router-link>
            <!-- <router-link to="/landClearing">Land Clearing</router-link> -->
            <router-link to="/siteWork">Site work</router-link>
            <router-link to="/septicTanks">UnderGround Utilities</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/ourWork">Our Work</router-link>
            <router-link to="/customerReviews">Customer Reviews</router-link>
          </ul>
        </nav>
      </div>
      <router-link to="/home">
        <img
          class="wildwest-logo"
          alt="WildWest Excavation logo"
          src="../../assets/_WildWestExcavationLLC-logo.png"
        />
      </router-link>
    </footer>
  </div>
</template>
<script>
export default {
  name: "MainFooter",
};
</script>
<style scoped>
footer {
  background-color: green;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  margin-top: 16px;

  
}
img {
  height: 5rem;
}
a {
  /*Router-link*/
  text-decoration: none;
  margin-right: 15px;
  font-size: 20px;
  color: white;
}
@media (max-width: 768px) {
  .wildwest-logo {
    display: none;
  }
}
</style>
