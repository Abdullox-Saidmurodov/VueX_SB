<template lang="">
  <div class="col">
    <div class="card" style="border: none; border-radius: 0; box-shadow: none;">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
      </svg>
      <div class="card-body">
        <p class="card-title fw-bold">
            {{article.title.slice(0, 35)}}...
        </p>
        <p class="card-text">
          {{article.body.slice(0, 250)}}...
        </p>
        <div class="d-flex justify-content-between align-items-center card-footer">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">
              Read article
            </button>
            <button v-if="article.author.username == user.username" 
                    type="button" 
                    class="btn btn-sm btn-outline-danger"
                    @click="deleteArticleHandler"
                    :disabled="isLoading">
              Delete
            </button>
            <button v-if="article.author.username == user.username" 
                    type="button" 
                    class="btn btn-sm btn-outline-primary"
                    @click="navigateEditHandler">
              Edit
            </button>
          </div>
          <small class="text-body-secondary">
            {{new Date(article.createdAt).toLocaleDateString('us')}}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      isLoading: state => state.controlArticle.isLoading,
    }),
  },
  methods: {
    navigateHandler() {
        return this.$router.push(`/article/${this.article.slug}`)
    },
    deleteArticleHandler() {
      this.$store.dispatch('deleteArticle', this.article.slug).then(() => this.$store.dispatch('articles'))
    },
    navigateEditHandler() {
      return this.$router.push(`/edit-article/${this.article.slug}`)
    },
  },
};
</script>
