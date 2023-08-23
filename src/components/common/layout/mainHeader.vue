<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start" v-if="goBack">
        <ion-back-button text="Назад"/>
      </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {IonHeader, IonButtons, IonBackButton, IonTitle, IonToolbar} from "@ionic/vue";

const {title, goBack} = defineProps({
  title: String,
  goBack: Boolean
})
</script>

<style scoped>

</style>