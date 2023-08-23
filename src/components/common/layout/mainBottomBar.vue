<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button v-for="tab in tabs" :key="tab.code" :tab="tab.code" :href="`/m/${tab.code}`">
      <ion-icon aria-hidden="true" :icon="tab.icon"/>
      <ion-label>{{ tab.label }}</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import {chatbubbleEllipsesOutline, homeOutline, personOutline, calendarClearOutline, informationCircleOutline} from "ionicons/icons";

const tabs = [
  {code: "main", label: "Главная", icon: homeOutline},
  {code: "plan", label: "План лечения", icon: calendarClearOutline},
  {code: "chat", label: "Связь с врачом", icon: chatbubbleEllipsesOutline},
  {code: "library", label: "Библиотека", icon: informationCircleOutline},
  {code: "profile", label: "Профиль", icon: personOutline},
]
</script>

<style scoped>

</style>