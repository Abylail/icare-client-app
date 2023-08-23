<template>
  <page-wrapper title="Главная">
    <daily-checklist/>
    <daily-actions/>
    <main-graph/>
  </page-wrapper>
</template>

<script setup lang="ts">
import DailyChecklist from "@/components/common/main/dailyChecklist.vue";
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
import MainGraph from "@/components/common/main/mainGraph.vue";
import DailyActions from "@/components/common/main/dailyActions.vue"
</script>

<style scoped>

</style>