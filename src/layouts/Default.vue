<template>
  <div class="text-gray-900">

    <Navbar style="height:8vh"/>

   
    <main style="height:92vh;overflow:auto;scrollbar-width: thin;">
      <slot/>
    </main>

  </div>
</template>



<script>
import Navbar from '../components/navbar.vue'

export default {
  metaInfo: {
    title: 'LayoutsDefault'
  },
  components:{
    Navbar
  }
}
</script>    

<style >
/* Add any Global Styles Here */
main::-webkit-scrollbar {
  width: 12px;               
}

main::-webkit-scrollbar-track {
  background: rgba(0,0,0,0);
}

main::-webkit-scrollbar-thumb {
  background-color: grey;   
  border-radius: 6px;       
  border: 3px solid rgb(237, 235, 236);  
}

main{
    position:relative;
    
    background-color: rgb(237, 235, 236);
}
</style>