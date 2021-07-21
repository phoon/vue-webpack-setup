import { createApp } from "vue";

var v = {
    data() {
        return {
            msg: 'Hello, Vue.js!'
        }
    }
}

createApp(v).mount('#app');