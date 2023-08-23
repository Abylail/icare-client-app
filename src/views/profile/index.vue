<template>
  <page-wrapper title="Профиль">
    <profile-main-info/>
    <profile-details/>
  </page-wrapper>
</template>

<script setup lang="ts">
import ProfileDetails from "@/components/common/profile/profileDetails.vue";
import ProfileMainInfo from "@/components/common/profile/profileMainInfo.vue";
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
</script>

<style scoped>
.profile {
  overflow-y: auto;
}
</style>