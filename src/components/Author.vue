<template>
  <h1>Author component</h1>
  <input type="text" v-model="store.state.author" />
  <p>Counter component: {{ store.methods.info() }}</p>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Author",
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>
