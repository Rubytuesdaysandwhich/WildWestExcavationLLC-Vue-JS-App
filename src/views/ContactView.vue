<template>
  <div class="contact">
    <!-- <CallNow /> -->
    <!-- <img alt="Vue logo" src="../assets/_WildWestExcavationLLC-logo.png" /> -->
    <!-- <MainHeader /> -->
    <!-- <hambuger-menu></hambuger-menu> -->
    <ContactForm></ContactForm>
    <!-- <MainFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src

import ContactForm from "../components/Forms/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
};
</script>
