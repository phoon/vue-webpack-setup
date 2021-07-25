<template>
  <p>{{ greeting }}</p>
  <Counter />
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  name: "App",
  components: {
    Counter,
  },
  setup() {
    return {
      greeting: "Hello, Vue.js",
    };
  },
};
</script>
