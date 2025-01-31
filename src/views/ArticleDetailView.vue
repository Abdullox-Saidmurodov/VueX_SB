<template lang="">
    <h1>
        Article details
    </h1>
</template>
<script>
export default {
    mounted() {
        // console.log(this.$route.params.slug)
        this.$store.dispatch('articleDetail', this.$route.params.slug)
        // console.log(this.$store.dispatch('articleDetail', this.$route.params.slug))
    },
}
</script>
<style lang="">
    
</style>