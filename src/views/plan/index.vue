<template>
  <page-wrapper title="План лечения">
    <plan-info/>
    <plan-calendar/>
  </page-wrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
import PlanInfo from "@/components/common/plan/planInfo.vue";
import PlanCalendar from "@/components/common/plan/planCalendar.vue";
</script>

<style scoped>

</style>