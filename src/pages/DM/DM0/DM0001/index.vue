<template>
  <div class="DM0001">
    <div class="DM0001-title" @click="add">点我请求接口</div>
    <div class="DM0001-body" @click="jump">点我跳转页面</div>
    <div class="DM0001-bottom">我只是显示数据 => {{ userInfo.name }}</div>
  </div>
</template>

<script>
import { rpc, pushWindow } from "@/utils/bridge";
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const userInfo = store.state.userInfo;
    console.warn(window);
    console.warn("App===========", App);
    const add = () => {
      rpc("SQ1004").then((res) => {
        console.warn("res:", res);
      });
    };
    const jump = () => {
      pushWindow("/DM/DM0/DM0002", { a: 1, b: 2 });
    };
    return { userInfo, add, jump };
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>