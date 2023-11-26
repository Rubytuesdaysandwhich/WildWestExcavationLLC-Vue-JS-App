<template>
  <div class="landClearing">
    <CallNow />
    <!-- <img alt="Vue logo" src="../assets/_WildWestExcavationLLC-logo.png" /> -->
    <MainHeader />
    <hambuger-menu></hambuger-menu>
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
  name: "LandClearingView",
  components: {
    MainHeader,
    MainFooter,
    CallNow,
    HambugerMenu
  },
};
//!this page will be under site work for land clearing
</script>