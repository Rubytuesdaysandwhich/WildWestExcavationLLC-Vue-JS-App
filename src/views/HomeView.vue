<template>
  <div class="home">
    <CallNow />
    <!-- <img alt="Vue logo" src="../assets/_WildWestExcavationLLC-logo.png" /> -->
    <MainHeader />
    <hambuger-menu></hambuger-menu>
    <MissionStatement></MissionStatement>
    <MainFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "../components/Header/MainHeader.vue";
import CallNow from "../components/Header/CallNowHeader.vue";
import MainFooter from "../components/Footer/MainFooter.vue";
import HambugerMenu from "../components/Header/HambugerMenuHeader.vue";
import MissionStatement from "../components/MissionStatement/CompanyMissionStatement.vue"
export default {
  name: "HomeView",
  components: {
    MainHeader,
    CallNow,
    MainFooter,
    HambugerMenu,
    MissionStatement
  },
};
</script>
