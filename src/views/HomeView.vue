<template>
  <main>
    <div class="columns">
  <div class="column">
    <h2 class="is-size-2">ToDo</h2>
    <ToDo />
  </div>
  <div class="column">
    <h2 class="is-size-2">In Progress</h2>
    <InProgress />
  </div>
  <div class="column">
    <h2 class="is-size-2">Done</h2>
    <Done />
  </div>
</div>
  </main>
</template>
<script setup>
import InProgress from "../components/InProgress.vue";
import ToDo from "../components/ToDo.vue"
import Done from "../components/Done.vue"


</script>