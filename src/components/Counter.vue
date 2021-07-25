<template>
  <h1>Counter component</h1>
  <p>Timer Counter: {{ counter }}</p>
  <p>Counter component: {{ store.methods.info() }}</p>
</template>

<script>
import { inject, onMounted, ref } from "vue";
export default {
  name: "Counter",
  setup() {
    const counter = ref(0);
    const store = inject("store");

    const timerCounter = () => {
      setInterval(() => {
        counter.value++;
      }, 1000);
    };
    onMounted(timerCounter);

    return {
      counter,
      store,
    };
  },
};
</script>
