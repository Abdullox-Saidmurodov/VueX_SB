import ArticleService from "@/service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetail: null,
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getArticlesFailure(state) {
        state.isLoading = false
    },
    getArticleDetailStart(state) {
        state.isLoading = true
        state.articleDetail = null
        state.error = null
    },
    getArticleDetailSuccess(state, payload) {
        state.isLoading = false
        state.articleDetail = payload
    },
    getArticleDetailFailure(state) {
        state.isLoading = false
    },
}

const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('getArticlesStart')
            ArticleService.articles().then(response => {
                // console.log("RESPONSE", response)
                context.commit('getArticlesSuccess', response.data.articles)
                resolve(response.data.articles)
            }).catch(err => {
                // console.log("ERROR", err)
                context.commit('getArticlesFailure')
            })
        })
    },
    articleDetail(context, slug) {
        return new Promise((resolve, reject) => {
            context.commit('getArticleDetailStart')
            ArticleService.articleDetail(slug).then(res => {

            }).catch(() => {})
        })
    }
}

export default {
    state,
    mutations,
    actions,
}