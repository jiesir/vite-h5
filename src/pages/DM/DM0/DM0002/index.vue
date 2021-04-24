<template>
  <div class="DM0002">
    <img alt="Vue logo" src="@/assets/logo.png" @click="back" />
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
    const params = App.params;
    console.warn("params===========", params);
    console.warn("App===========", App);
    return { back };
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>