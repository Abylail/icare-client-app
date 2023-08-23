<template>
  <ion-page>
    <main-header :title="title" :go-back="goBack"/>
    <ion-content><slot/></ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import MainHeader from "@/components/common/layout/mainHeader.vue";
import { IonPage, IonContent } from '@ionic/vue';
const {title, goBack} = defineProps({
  title: String,
  goBack: Boolean
})
</script>

<style scoped>

</style>