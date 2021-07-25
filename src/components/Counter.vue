<template>
  <p>Timer Counter: {{ counter }}</p>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "Counter",
  setup() {
    const counter = ref(0);

    const timerCounter = () => {
      setInterval(() => {
        counter.value++;
      }, 1000);
    };

    onMounted(timerCounter);
    
    return {
      counter,
    };
  },
};
</script>
