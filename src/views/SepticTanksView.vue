<template>
  <div class="septicTanks">
    <CallNow />
    <!-- <img alt="Vue logo" src="../assets/_WildWestExcavationLLC-logo.png" /> -->
    <MainHeader />
    <MainFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "../components/Header/MainHeader.vue";
import CallNow from "../components/Header/CallNowHeader.vue";
import MainFooter from "../components/Footer/MainFooter.vue";
export default {
  name: "SepticTanksView",
  components: {
    MainHeader,
    CallNow,
    MainFooter,
  },
};
</script>
