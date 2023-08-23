<template>
  <page-wrapper title="Графики" :goBack="true">
    <activity-graph/>
    <pressure-graph/>
  </page-wrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
import ActivityGraph from "@/components/common/graphs/activityGraph.vue";
import PressureGraph from "@/components/common/graphs/pressureGraph.vue";
</script>

<style scoped>

</style>