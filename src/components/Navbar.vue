<template lang="">
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <RouterLink :to="{name: 'home'}" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img :src="logo" alt="logo" class="w-25" style="width: 100px; cursor: pointer;">
      </RouterLink>

      <!-- {{user}} -->
      <!-- {{isLoggedIn}} -->

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <template v-if="isLoggedIn">
          <RouterLink :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none">
            {{currentUser.username}}
          </RouterLink>
        </template>
        <template v-if="!isLoggedIn">
          <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
          <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
        </template>
      </nav>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import {logo} from '../constants'
export default {
    data() {
      return {
        logo,
      }
    },
    computed: {
      ...mapState({
        currentUser: state => state.auth.user,
        isLoggedIn: state => state.auth.isLoggedIn,
      }),
    },
}
</script>
<style lang="">
    
</style>