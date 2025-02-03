<template lang="">
    <div v-if="isLoading" class="d-flex justify-content-center">
        <Loader />
    </div>
    <div v-else class="">
        <ArticleDetail />
    </div>
</template>
<script>
import ArticleDetail from '@/components/ArticleDetail.vue'
import { mapState } from 'vuex';
export default {
    components: {
        ArticleDetail,
    },
    computed: {
        ...mapState({
            isLoading: state => state.articles.isLoading,
        })
    },
    mounted() {
        this.$store.dispatch('articleDetail', this.$route.params.slug)
    },
}
</script>
<style lang="">
    
</style>