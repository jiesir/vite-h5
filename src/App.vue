<template>
  <!-- <router-view v-slot="{ Component, route }">
    <transition mode="out-in">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view> -->
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <keep-alive :include="[includeList]">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default {
  name: "apps",
  setup() {
    const includeList = reactive([(window as any).App.home.split("/")[3]]);
    const router = useRouter();
    console.warn("设备像素比：", window.devicePixelRatio);
    console.warn("设备宽度：", screen.width);
    watch(
      () => router.currentRoute.value.name,
      () => {
        console.warn(
          "cacheList*******************:",
          router.currentRoute.value.meta,
          router.currentRoute.value.name
        );
        if (
          router.currentRoute.value.meta.keepAlive &&
          !includeList.includes(router.currentRoute.value.name)
        ) {
          includeList.push(router.currentRoute.value.name);
        }
        console.warn(includeList);
      }
    );
    return { includeList };
  },
};
</script>
