<template>
  <p>{{ greeting }}</p>
  <Counter />
  <Author />
</template>

<script>
import Counter from "@/components/Counter.vue";
import Author from "@/components/Author.vue";
import { provide } from "vue";
import store from "@/store";

export default {
  name: "App",
  components: {
    Counter,
    Author
  },
  setup() {
    provide('store', store)
    return {
      greeting: "Hello, Vue.js",
    };
  },
};
</script>
