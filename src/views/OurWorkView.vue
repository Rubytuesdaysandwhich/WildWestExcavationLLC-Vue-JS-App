<template>
  <div class="ourWork">
    <CallNow />
    <!-- <img alt="Vue logo" src="../assets/_WildWestExcavationLLC-logo.png" /> -->
    <MainHeader />
    <hambuger-menu></hambuger-menu>
    <!-- main content of page -->
    <section class="grid-container">
      <div class="grid">
        <div class="grid-items">
          <img
            src="../assets/OurWorkPhotos/138353441_233937458304903_4562927222745617653_n.png"
            alt=""
          />
        </div>
        <div class="grid-items">
          <img
            src="../assets/OurWorkPhotos/147588397_251087099923272_1001090064507672368_n.png"
            alt=""
          />
        </div>
        <div class="grid-items">
          <img
            src="../assets/OurWorkPhotos/147596950_251087049923277_3882147264743910707_n.png"
            alt=""
          />
        </div>
        <div class="grid-items">
          <img src="../assets/OurWorkPhotos/excavator_1.3.5.png" alt="" />
        </div>
        <div class="grid-items">
          <img src="../assets/OurWorkPhotos/pumphouse_1.1.4.png" alt="" />
        </div>
      </div>
    </section>

    <MainFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "../components/Header/MainHeader.vue";
import CallNow from "../components/Header/CallNowHeader.vue";
import MainFooter from "../components/Footer/MainFooter.vue";
import HambugerMenu from "../components/Header/HambugerMenuHeader.vue";
export default {
  name: "OurWorkView",
  components: {
    MainHeader,
    CallNow,
    MainFooter,
    HambugerMenu,
  },
};
</script>
<style scoped>
.grid-container {
  width: 100%;
  max-width: auto; /* Adjust the maximum width as needed */
  padding: 1em;
  background-color: rgb(206, 206, 206);
}
.grid {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1rem));
  gap: 1rem;
  /* padding: 15px; */
  /* justify-items: stretch; */
  /* justify-content: center; */
}

.grid-items {
  width: fit-content;
  height: fit-content;
}
.grid-items > img {
  max-width: 14vw;
  max-height: auto;
  border: black 5px solid;
}
</style>
