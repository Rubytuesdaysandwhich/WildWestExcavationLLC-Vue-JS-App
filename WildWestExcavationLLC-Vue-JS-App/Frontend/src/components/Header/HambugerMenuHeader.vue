<template>
  <header>
    <div class="hambuger-menu-icon">
      <font-awesome-icon
        class="bars"
        :icon="['fas', 'bars']"
        @click="toggleHambugerHeader"
      />
      <div
        class="wildwest-navigation-hambuger"
        :class="{ hidden: headerActive }"
      >
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
    </div>
  </header>
</template>
<script>
export default {
  name: "HambugerMenu",

  data() {
    return {
      headerActive: true,
    };
  },
  methods: {
    toggleHambugerHeader() {
      this.headerActive = !this.headerActive;
      console.log(this.headerActive);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border: solid gold 5px;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 100%;
  height: auto;
}
.bars {
  height: 3rem;
  width: auto;
  cursor: pointer;
  margin: 1rem;
}
nav {
  /* width: fit-content; */
  /* display: inline-block; */
  /* justify-content: right; */
  /* font-size: medium; */
  padding: 30px;
}

a {
  /*Router-link*/
  text-decoration: none;
  margin-right: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  color: green;
  display: flex;
}
.wildwest-navigation-hambuger {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
}
.hidden {
  /* this class hides and show the navigation of the hambuger menu for mobile devices */
  display: none;
}
img {
  width: 6em;
  height: auto;
}
@media (min-width: 1220px) {
  header {
    display: none;
  }
  img {
    display: none;
  }
}
</style>
