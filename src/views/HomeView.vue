<template lang="">
    <div>
        Home page 
    </div>
    <!-- {{data}} -->
</template>
<script>
import { mapState } from 'vuex'
export default {
    methods: {
    },
    computed: {
        ...mapState({
        data: state => state.articles.data,
        isLoading: state => state.articles.isLoading,
        error: state => state.articles.error,
        })
    },
    mounted() {
        this.$store.dispatch('articles')
    },
}
</script>
<style lang="">
    
</style>