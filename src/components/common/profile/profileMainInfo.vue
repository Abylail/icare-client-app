<template>
  <div>

    <div class="profile__avatar">
      <ion-icon class="profile__avatar-icon" :icon="personCircleOutline"/>
    </div>

    <ion-card-header>
      <ion-card-subtitle class="profile__user-name">Базарбаев Абылай</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="profile__content">
      <ion-chip class="profile__disease" color="primary">Артериальная гипертензия</ion-chip>
    </ion-card-content>
  </div>
</template>

<script setup lang="ts">
import { IonCardContent, IonCardHeader, IonCardSubtitle, IonChip, IonIcon } from "@ionic/vue";
import {personCircleOutline} from "ionicons/icons";
</script>

<style scoped>
.profile__user-name {
  font-size: 18px;
  height: auto;
}
.profile__content {
  text-align: center;
}
.profile__disease {
  font-size: 16px;
  padding: 10px 20px;
}
.profile__avatar {
  padding-top: 20px;
  text-align: center;
}
.profile__avatar-icon {
  font-size: 70px;
}
</style>