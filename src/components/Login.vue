<template lang="">
    <div>
        <main class="form-signin w-25 m-auto mt-5">
            <form>
                <img :src="logo" alt="logo" class="w-25" style="width: 100px; cursor: pointer;">
                <h1 class="h3 mb-3 fw-normal mt-2">Login</h1>
                
                <Input :label="'Email'" :type="'email'" />
                <Input :label="'Password'" :type="'password'" />

                <Button type="submit">Login</Button>
            </form>
        </main>
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