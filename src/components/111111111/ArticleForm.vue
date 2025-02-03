<template lang="">
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <Input type="text" 
                   label="Title"
                   @input="updateTitle" 
                   :value="title" />
            <TextArea type="text" 
                      label="Description"
                      @input="updateDescription" 
                     :value="description" />
            <TextArea type="text" 
                      label="Body" 
                      @input="updateBody" 
                     :value="body" />
            <Button @click="editArticleHandler" :disabled='isLoading'>Edit article</Button>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    methods: {
        updateTitle(e) {
            this.$emit('update:title', e.target.value)
        },
        updateDescription(e) {
            this.$emit('update:description', e.target.value)
        },
        updateBody(e) {
            this.$emit('update:body', e.target.value)
        },
    },
}
</script>
<style lang="">
    
</style>