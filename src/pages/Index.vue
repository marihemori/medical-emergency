<template>
  <Header />
  <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="container">
      <div class="row mt-5">
        <p class="mb-10">
          Hello attendant, adjust the team and equipments in the best way you
          think is necessary for the emergency!
        </p>
        <div class="grid grid-cols-2 gap-6">
          <professionals />
          <equipments />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <team-setup />
        </div>
      </div>

      <hr
        class="my-12 h-0.5 border-t-0 bg-gray-200 opacity-100 dark:opacity-50"
      />

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header/Header.vue";
import TeamSetup from "../components/TeamSetup.vue";
import Equipments from "../components/Equipment.vue";
import Equipes from "../components/Equipes.vue";
import Professionals from "../components/Professionals.vue";

export default {
  components: {
    TeamSetup,
    Equipments,
    Equipes,
    Professionals,
    Header,
  },
  name: "IndexSection",
  props: {
    msg: String,
  },
  computed: {
    customTitle() {
      return `.: ${this.$store.state.title}`;
    },
  },
};
</script>
