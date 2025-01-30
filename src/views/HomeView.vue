<template lang="">
    <div>
        Home page {{counter}}
        <div class="w-25">
            <Button @click="increaseHandler">Increase</Button>
        </div>
        <div class="w-25">
            <Button @click="decreaseHandler">Decrease</Button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        increaseHandler() {
            // this.$store.state.count++
            this.$store.commit('increment')
        },
        decreaseHandler() {
            // this.$store.state.count++
            this.$store.commit('decrement')
        },
    },
    computed: {
        counter() {
            return this.$store.state.count
        }
    }
}
</script>
<style lang="">
    
</style>