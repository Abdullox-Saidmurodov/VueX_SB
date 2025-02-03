<template lang="">
    <div v-if="isLoading" class="d-flex justify-content-center">
        <Loader />
    </div>
    <div v-else>
        <p class="text-center display-2">Edit article</p>
        <div v-if="article" class="w-50 mx-auto">
            <form @submit.prevent>
                <Input type="text" 
                    label="Title"
                    v-model="initialValue.title" />
                <TextArea type="text" 
                        label="Description"
                        v-model="initialValue.description"/>
                <TextArea type="text" 
                        label="Body" 
                        v-model="initialValue.body" />
                <Button @click="editArticleHandler" :disabled='isLoadingC'>Edit article</Button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
// import ArticleForm from '../components/ArticleForm.vue'
export default {
    // components: {ArticleForm},
    methods: {
        editArticleHandler() {
            const article = {
                title: this.initialValue.title,
                description: this.initialValue.description,
                body: this.initialValue.body,
                tagList: [],
            }
            // console.log(article)
            // console.log(this.article)
            this.$store.dispatch('updateArticle', {article: article, slug: this.$route.params.slug})
            .then(() => this.$router.push('/'))
        },
    },
    computed: {
        ...mapState({
            article: state => state.articles.articleDetail,
            isLoading: state => state.articles.isLoading,
            isLoadingC: state => state.controlArticle.isLoading,
        }),
        initialValue() {
            return {
                title: this.article.title,
                description: this.article.description,
                body: this.article.body,
            }
        },
    },
    mounted() {
        this.$store.dispatch('articleDetail', this.$route.params.slug)
        console.log(this.article)
    },
}
</script>
<style lang="">
    
</style>