<template>
  <div class="contact">
    <CallNow />
    <!-- <img alt="Vue logo" src="../assets/_WildWestExcavationLLC-logo.png" /> -->
    <MainHeader />
    <ContactForm></ContactForm>
    <MainFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "../components/Header/MainHeader.vue";
import CallNow from "../components/Header/CallNowHeader.vue";
import MainFooter from "../components/Footer/MainFooter.vue";
import ContactForm from "../components/Forms/ContactForm.vue";
export default {
  name: "ContactView",
  components: {
    CallNow,
    MainHeader,
    ContactForm,
    MainFooter,
  },
};
</script>
