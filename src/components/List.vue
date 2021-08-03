<template>
  <span style="font-size: 12px">@</span>
  <input type="text" placeholder="github username" v-model="username" />
  <input type="submit" value="检索Repos" @click="getList" />
  <span
    v-show="lists.loading"
    style="font-size: 12px; color: blue; margin-left: 5px"
    >loading...</span
  >
  <p v-show="lists.errored">got errors!!!</p>
  <ul>
    <li v-for="l in lists.data" :key="l.id">
      {{ l.name }} --
      <i style="color: gray; font-size: 12px"> {{ l.description }} </i>
    </li>
  </ul>
</template>

<script>
import { ref, reactive } from "vue";
import getRepos from "@/api/list.js";
export default {
  setup() {
    const username = ref("");
    const lists = reactive({
      loading: false,
      data: null,
      errored: false,
    });
    function getList() {
      lists.loading = true;
    //   lists.errored = true;
      getRepos(username.value)
        .then((res) => {
          lists.loading = false;
          if (res.status !== 200) {
            lists.errored = true;
            return;
          }
          lists.data = res.data;
          lists.errored = false;
        })
        .catch((e) => {
          lists.data = null;
          lists.loading = false;
          lists.errored = true;
        });
    }

    return {
      getList,
      username,
      lists,
    };
  },
};
</script>