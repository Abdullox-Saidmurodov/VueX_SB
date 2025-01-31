<template lang="">
    <!-- <h4>Validation Error</h4> -->
    <ul class="list-group">
        <li v-for='errorMessage in errorMessages' :key="errorMessage" class="list-group-item list-group-item-danger mt-2">
            {{errorMessage}}
        </li>
    </ul>
</template>
<script>
export default {
    // name: 'ValidationError',
    props: {
        validationErrors: {
            type: Object,
            required: true,
        },
    },
    // updated() {
    //     console.log(this.validationErrors)
    // },
    computed: {
        errorMessages() {
            // return ['email is a required field', 'password must be at least 8 characters']
            return Object.keys(this.validationErrors).map(name => {
                const msg = this.validationErrors[name].join(', ')
                return `${name} ${msg}`
            })
        }
    }
}
</script>
<style lang="">
    
</style>