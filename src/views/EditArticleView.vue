<template lang="">
    <!-- <div>
        Edit
    </div> -->
    <p class="text-center display-2">Edit article</p>
    <!-- <ArticleForm v-if="article"
                 :title="article.title"
                 :description="article.description"
                 :body="article.body"
                  /> -->
    <div v-if="article" class="w-50 mx-auto">
        <form @submit.prevent>
            <Input type="text" 
                   label="Title"
                   v-model="article.title" />
            <TextArea type="text" 
                      label="Description"
                      v-model="article.description"/>
            <TextArea type="text" 
                      label="Body" 
                      v-model="article.body" />
            <Button @click="editArticleHandler" :disabled='isLoading'>Edit article</Button>
        </form>
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
                title: this.article.title,
                description: this.article.description,
                body: this.article.body,
                tagList: [],
            }
            console.log(article)
        },
    },
    computed: {
        ...mapState({
            article: state => state.articles.articleDetail,
        })
    },
    mounted() {
        this.$store.dispatch('articleDetail', this.$route.params.slug)
        console.log(this.article)
    },
}
</script>
<style lang="">
    
</style>