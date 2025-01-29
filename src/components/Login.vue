<template lang="">
    <div>
        <main class="form-signin w-25 m-auto mt-5">
            <form>
                <img :src="logo" alt="logo" class="w-25" style="width: 100px; cursor: pointer;">
                <h1 class="h3 mb-3 fw-normal mt-2">Login</h1>
                
                <Input :label="'Email'" :type="'email'" />
                <Input :label="'Password'" :type="'password'" />
<!-- 
                <div class="form-floating mt-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mt-2">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div> -->
                <Button type="submit">Login</Button>
                <!-- <button class="btn btn-primary w-100 py-2 mt-2" type="submit">Sign in</button> -->
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