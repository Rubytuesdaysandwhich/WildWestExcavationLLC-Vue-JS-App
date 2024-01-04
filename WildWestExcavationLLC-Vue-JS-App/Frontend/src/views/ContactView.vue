<template>
  <div class="contact">
   
    <ContactForm></ContactForm>
    
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
