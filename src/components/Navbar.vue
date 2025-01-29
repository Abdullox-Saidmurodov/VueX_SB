<template lang="">
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <RouterLink :to="{name: 'home'}">
          <img :src="logo" alt="logo" class="w-25">
        </RouterLink>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 link-body-emphasis text-decoration-none">
          <RouterLink :to="{name: 'login'}">Login</RouterLink>
        </a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none">
          <RouterLink :to="{name: 'register'}">Register</RouterLink>
        </a>
      </nav>
    </div>
</template>
<script>
import {logo} from '../constants'
export default {
    data() {
      return {
        logo,
      }
    },
}
</script>
<style lang="">
    
</style>