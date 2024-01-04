<template>
  <div class="grid-container">
    <div>
    
    </div>
  </div>
</template>

<script>

// v-for="photo in photos" :key="photo.id"//for dynamic rendering of photos for our work






export default {
    name:"FlexGrid",
    components:{
        // PhotoCardComponent
    },
      data(){
    return{
    
     photos:[] 
    }
   },


}
</script>


<style scoped>
.grid-container {
display: flex;
flex-wrap: wrap;
justify-content: space-around;
justify-content: center;

}
.grid-container>div{
  border:solid yellow 2px;
  width:fit-content;
  margin: 1rem;
}
img{
  margin: 16px;
}
</style>