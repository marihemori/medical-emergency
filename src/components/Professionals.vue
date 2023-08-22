<template>
  <div class="">
    <div class="row">
      <div class="col">
        <div
          class="p-9 bg-slate-900 text-white rounded-2xl overflow-hidden drop-shadow-2xl transition duration-300"
        >
          <h5 class="text-lg mb-2 font-semibold">
            <i class="bi-file-person me-2"></i>Professionals
          </h5>
          <div class="flex justify-between mb-6">
            <div class="w-full">
              <ul
                class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              >
                <li class="mr-2">
                  <router-link
                    class="nav-link inline-block p-4 rounded-t-lg text-white dark:hover:bg-slate-500"
                    :to="{
                      name: 'professionals',
                      params: { tipo: 'nurses' },
                    }"
                    >Nurses</router-link
                  >
                </li>
                <li class="mr-2">
                  <router-link
                    class="nav-link inline-block p-4 rounded-t-lg text-white dark:hover:bg-slate-500"
                    :to="{
                      name: 'professionals',
                      params: { tipo: 'rescuers' },
                    }"
                    >Rescuers</router-link
                  >
                </li>
                <li class="mr-2">
                  <router-link
                    class="nav-link inline-block p-4 rounded-t-lg text-white dark:hover:bg-slate-500"
                    :to="{
                      name: 'professionals',
                      params: { tipo: 'doctors' },
                    }"
                    >Doctors</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span><router-view name="professionals" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionalsSection",
};
</script>
