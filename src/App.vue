<template lang="">
  <div>
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
<script>
import {Navbar} from '@/components'
import {RouterView} from 'vue-router'
export default {
  components: {Navbar},
  mounted() {
    // console.log("Mounted")
    this.$store.dispatch('getUser')
    // this.$store.dispatch('articles')
  },
}
</script>
<style lang="">
  
</style>