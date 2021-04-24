<template>
  <div class="DM1002">
    <img alt="Vue logo" src="@/assets/logo.png" @click="back" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import { popWindow } from "@/utils/bridge";
export default {
  name: "App",
  components: {},
  setup() {
    function back() {
      popWindow();
    }
    console.warn(App.params);
    return { back };
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>