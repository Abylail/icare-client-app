<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Действия на сегодня</ion-card-subtitle>
    </ion-card-header>

    <!-- Контент -->
    <ion-card-content class="daily-checklist__content">
      <ion-button
          class="checkbox-wrapper"
          v-for="(action, index) in actions" :key="index"
          expand="block"
      >{{ action.label }}</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonButton} from "@ionic/vue";

const actions = [
  {label: "Измерить давление", type: "measurePressure"},
]
</script>

<style scoped>

</style>