<template lang="">
    <div v-if="isLoading" class="d-flex justify-content-center">
        <!-- Loading... -->
        <Loader />
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <ArticleCard v-for="article in data" :article="article" :key="article.id" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ArticleCard from '@/components/ArticleCard.vue';
export default {
    components: {
        ArticleCard,
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