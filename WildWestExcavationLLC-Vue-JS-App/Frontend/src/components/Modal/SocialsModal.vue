<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modalContainer">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <!-- modal content -->
          <slot />
          <button @click="close" type="button">Close</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SocialsModal",
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      //we are sending this close function to a parent component. in this case it is the CallNowHeader
      emit("close");
    };
    return {
      close,
    };
  },
};
</script>
<style scoped>
.modalContainer {
  background-color: rgb(145, 142, 142);
  border: solid gold 4px;
  border-radius: 10px;
  padding: 5px 15px;
}
button {
  padding: 10px 20px;
  margin: 0.5rem;
  border: none;
  font-size: 1.5rem;
  background-color: crimson;
  cursor: pointer;
}
</style>
