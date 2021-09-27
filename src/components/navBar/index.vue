<template lang="pug">
//- 导航
.navbar
  .title {{ title }}
  .navs
    .menu(
      v-for="(item, index) in navs",
      :index="index",
      :item="item",
      @click.stop="navClick(item)"
    ) {{ item.name }}
</template>

<script setup lang="ts">
import type { navProp } from "./type";
import { useRouter } from "vue-router";
import { reactive, ref, watchEffect } from "vue";
/** 路由方法 */
let router = useRouter();
const props =
  defineProps<{
    /** 标题名称 */
    title: string;
    /** 导航数组 */
    navs: Array<navProp>;
  }>();
const state = reactive({
  title: "标题",
  navs: [],
});
watchEffect(() => (state.title = props.title));
const emit = defineEmits(["navClick"]);
const navClick = (data: navProp) => {
  // router.push({ path: data.path });
  emit("navClick");
};
</script>

<style scoped>
</style>