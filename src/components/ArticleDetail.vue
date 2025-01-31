<template lang="">
    <div v-if="article">
        Article details
        <!-- {{article}} -->
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            article: state => state.articles.articleDetail
        })
    }
}
</script>
<style lang="">
    
</style>