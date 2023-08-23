<template>
  <ion-card>

    <ion-card-header>
      <ion-card-subtitle>Стол №10</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="plan-info__content">
      <ion-list>
        <ion-item v-for="(detail, index) in details" :key="index">
          <ion-label>{{ detail.label }}</ion-label>
          <ion-label slot="end">{{ detail.value }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel} from "@ionic/vue";

const details = [
  {label: "Режим", value: "Общий"},
  {label: "Контроль давления", value: "ежедневно"},
  {label: "Экватор", value: "утром 10,5 мг 1 таблетка"},
  {value: "В обед Конкор 2,5 мг 1 таблетка", label: ""},
  {value: "5000 шагов", label: ""},
  {value: "Соли не более 5 грамм", label: ""},
  {value: "Не ел жареная и острая пища", label: ""},
  {value: "Не пил алкоголь, чай и кофе", label: ""},
  {value: "Сон не менее 7 часов", label: ""},
]
</script>

<style scoped>

</style>