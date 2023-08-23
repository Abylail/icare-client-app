<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Подробная информация</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="profile-content">
      <ion-list>
        <ion-item v-for="(detail, index) in details" :key="index">
          <ion-label>{{ detail.label }}</ion-label>
          <ion-label slot="end">{{ detail.value }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>

    <ion-button fill="clear" expand="full">Редактировать</ion-button>
  </ion-card>
</template>

<script setup lang="ts">
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonButton} from "@ionic/vue";
const details = [
  {label: "Номер", value: "+7 (705) 670 78 91"},
  {label: "Адрес", value: "Наурызбай батыра 50"},
  {label: "Возраст", value: "58 лет"},
  {label: "Рост", value: "170 см"},
  {label: "Вес", value: "80 кг"},
  {label: "Талия", value: "100 см"},
  {label: "Адрес", value: "Наурызбай батыра 50"},
  {label: "Возраст", value: "58 лет"},
  {label: "Рост", value: "170 см"},
  {label: "Вес", value: "80 кг"},
  {label: "Талия", value: "100 см"},
]
</script>

<style scoped>
.profile-content {
  padding-left: 0;
  padding-right: 0;
}
</style>