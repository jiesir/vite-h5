<template>
  <div class="DM1001">
    <div class="DM1001-content1" @click="add"></div>
    <div class="DM1001-content2" @click="jump">{{ userInfo.name }}</div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import { rpc, pushWindow } from "@/utils/bridge";
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import moment from "moment";
import { ref, computed } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const userInfo = store.state.userInfo;
    const history = store.state.history;
    console.warn(userInfo);
    console.warn(history);
    console.warn(screen.width);
    const count = ref(moment().seconds());
    const add = () => {
      rpc("SQ1004").then((res) => {
        console.warn("res:", res);
      });
    };
    const jump = () => {
      pushWindow("/DM/DM1/DM1002", { a: 1, b: 2 });
    };
    return { count, userInfo, add, jump };
  },
};
</script>
<style lang="less">
@import "./index.less";
</style>