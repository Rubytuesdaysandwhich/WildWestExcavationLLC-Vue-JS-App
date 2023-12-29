<template>
  <div class="ourWork">

    

  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "OurWorkView",
  // components: {

  // },
};
</script>
<style scoped>
.grid-container {
  width: 100%;
  /* max-width: auto; Adjust the maximum width as needed */
  padding: 1em;
  background-color: rgb(206, 206, 206);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1rem));
  grid-template-rows: repeat(auto-fill, minmax(align-self subgrid, auto));
  /* justify-content: space-between; */
  gap: 40px;
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
