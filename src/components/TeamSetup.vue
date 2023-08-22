<template>
  <div>
    <div
      class="row p-9 bg-slate-900 text-white rounded-2xl overflow-hidden drop-shadow-2xl transition duration-300"
    >
      <div class="flex justify-between justify-items-center mb-6">
        <h5 class="text-lg mb-2 font-semibold">
          <i class="bi-boxes"></i>{{ customLocalTitle }}
        </h5>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
        >
          Montar equipe
        </button>
      </div>
      <div class="row flex justify-between items-center gap-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-white">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">Nurse</th>
                <th scope="col" class="px-6 py-3">Rescuer</th>
                <th scope="col" class="px-6 py-3">Doctor</th>
                <th scope="col" class="px-6 py-3">Car</th>
                <th scope="col" class="px-6 py-3">Phone</th>
                <th scope="col" class="px-6 py-3">Medical kit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white text-gray-900 border-b hover:bg-gray-50">
                <td class="px-6 py-4">{{ nurse }}</td>
                <td class="px-6 py-4">{{ rescuer }}</td>
                <td class="px-6 py-4">{{ doctor }}</td>
                <td class="px-6 py-4">{{ car }}</td>
                <td class="px-6 py-4">{{ phone }}</td>
                <td class="px-6 py-4">{{ medicalKit }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            class="img-fluid"
            :src="require('@/assets/ambulancias/indefinida.png')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TeamSetup",
  data: () => ({
    title: "Team setup",
  }),
  computed: {
    ...mapState({
      nurse: (state) => state.team.nurse,
      rescuer: (state) => state.team.rescuer,
      doctor: (state) => state.team.doctor,
      car: (state) => state.team.car,
      phone: (state) => state.team.phone,
      medicalKit: (state) => state.team.medicalKit,
      customLocalTitle(state) {
        return `${this.title} ${state.team.car}`;
      },
    }),
  },
};
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
