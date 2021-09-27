import { createRouter, createWebHistory } from "vue-router";
const files = import.meta.glob('/src/pages/**/*.vue')
const routes = []
for (const key in files) {
  routes.push({
    component: files[key],
    path: `/${key.split('pages/')[1].split('.vue')[0].split('/index')[0]}`,
    name: key.split('pages/')[1].split('.vue')[0].split('/index')[0].replace('/','-'),
    props: true
  })
}
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    component: () => import('/src/pages/JavaScript/index.vue'),
    name: "Home",
    path: "/",
    props: true
  },...routes]
})
export default router