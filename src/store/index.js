import { reactive } from "vue";

const state = reactive({
    author: 'phoon'
})

const methods = {
    info() {
        return 'written by ' + state.author
    }
}

const getters = {
    Author() {
        return state.author
    }
}

const setters = {
    Author(name) {
        state.author = name
    }
}

export default {
    state,
    methods,
    getters,
    setters
}