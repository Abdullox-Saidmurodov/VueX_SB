import { setItem } from "@/helpers/persistaneStorage"
import AuthServise from "@/service/auth"

const state = {
    isLoading: false,
    user: null,
    errors: null,
}

const mutations = {
    // setLoading(state) {
    //     state.isLoading = true
    // },
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        // console.log("PAYLOAD", payload)
        state.user = payload
    },
    registerFailure(state, payload) {
        state.isLoading = false
        // console.log("PAYLOAD", payload)
        state.errors = payload
    },
}

const actions = {
    register(context, user) {
        // setTimeout(() => {
        //     context.commit('setLoading')
        // }, 2000)
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthServise.register(user).then(response => {
                // console.log('Response', response.data.user)
                context.commit('registerSuccess', response.data.user)
                // window.localStorage.setItem("token", response.data.user.token)
                setItem("token", response.data.user.token)
                resolve(response.data.user)
            }).catch((err) => {
                // console.log("Error", err.response.data)
                context.commit('registerFailure', err.response.data)
                reject(err.response.data)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions,
}