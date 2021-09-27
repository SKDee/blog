<template>
  <navBar title="title0"
          :navs="navs"
          @navClick="fnCl"></navBar>
  <router-view />
  {{title}}
</template>

<script setup lang="ts">
import "./assets/base.css";
import { ref } from "vue";

/** pages包含的文件夹 */
const files = import.meta.glob("/src/pages/**/index.vue");
/** 菜单数组 */
const navs: Array<{
  /** 路由地址 */
  path?: string;
  /** 名称 */
  name?: string;
}> = [];
let title = ref("qqq");
// 根据pages文件夹处理菜单数据
for (const key in files) {
  navs.push({
    path: `/${key.split("pages/")[1].split(".vue")[0].split("/index")[0]}`,
    name: key
      .split("pages/")[1]
      .split(".vue")[0]
      .split("/index")[0]
      .replace("/", "-"),
  });
}

const fnCl = () => {
  title.value = " qwehkjqh";
};
</script>