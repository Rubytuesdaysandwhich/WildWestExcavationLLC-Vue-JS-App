<template>
  <div>
    <div class="contact-us">
      <a rel="stylesheet" href="tel:2083503879"
        ><font-awesome-icon class="phone-icon" icon="phone" />Call us (208)
        350-3879</a
      >
      <!-- below here is the follow us section and modal -->
      <div class="folllow-us">
        <button class="openModalBtn" @click="toggleModal" type="button">
          Follow Us ▼
        </button>
        <SocialsModal @close="toggleModal" :modalActive="modalActive">
          <div class="modal-content">
            <h4 class="modal header">
              Follow us on social media and see what we are doing.
            </h4>
            <a href="https://www.facebook.com/wildwestexcavationllc">
              <font-awesome-icon
                class="facebook-icon"
                :icon="{ prefix: 'fab', iconName: 'facebook' }"
            /></a>
            <a href="https://www.instagram.com/wildwestexavation/"
              ><font-awesome-icon
                class="instagram-icon"
                :icon="{ prefix: 'fab', iconName: 'instagram' }"
            /></a>
          </div>
        </SocialsModal>
      </div>
    </div>
  </div>
</template>
<script>
import SocialsModal from "../Modal/SocialsModal.vue";
// import { ref } from "vue";
export default {
  name: "CallNow",
  components: {
    SocialsModal,
  },

  data() {
    return {
      modalActive: false,
    };
  },

  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
  },
};
</script>
<style scoped>
/* the call button css ▼ */
.contact-us {
  display: flex;
  background-color: #0e4702;
  justify-content: space-between;
}

a {
  margin: 1rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  text-decoration: none;
  color: white;
}
a > .phone-icon {
  color: yellow;
  margin-right: 0.5rem;
}

/* socialsmodal css ▼*/
.openModalBtn {
  margin: 1rem;
  font-size: 1rem;
}
.folllow-us {
  vertical-align: middle;
  text-align: center;
  margin: auto;
  margin-right: 0.9rem;
  color: white;
}
.facebook-icon {
  border-radius: 50%;
  background-color: white;
  color: blue;
  padding: 0.5px;
  margin: 10px;
  height: 4rem;
  width: auto;
}
.instagram-icon {
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
  background-color: white;
  color: #e1306c;
  padding: 0.5px;
  margin: 10px;
  height: 4rem;
  width: auto;
}
</style>
