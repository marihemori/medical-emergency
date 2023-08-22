import { createRouter, createWebHistory } from "vue-router";

import Index from "@/pages/Index.vue";
import ListaItens from "@/components/ListaItens.vue";

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "professionals/:tipo",
        name: "professionals",
        props: true,
        components: {
          professionals: ListaItens,
        },
      },
      {
        path: "equipments/:tipo",
        name: "equipments",
        props: true,
        components: {
          equipments: ListaItens,
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
