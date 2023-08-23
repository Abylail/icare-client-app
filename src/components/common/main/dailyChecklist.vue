<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Задачи на день</ion-card-subtitle>
    </ion-card-header>

    <!-- Контент -->
    <ion-card-content class="daily-checklist__content">
      <div class="checkbox-wrapper" v-for="(checkItem, index) in checkList" :key="index">
        <ion-checkbox label-placement="end" v-model="checkItem.value" @ionChange="checkboxInput">{{ checkItem.label }}</ion-checkbox>
      </div>

      <!-- График типа 5 из 6 -->
      <daily-plan-graph :total="checkList.length" :count="count"/>
    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCheckbox } from '@ionic/vue';
import DailyPlanGraph from "@/components/common/main/dailyPlanGraph.vue";

// Колличество закрытых целей
const count = ref(0);
const checkList = [
  {label: "Утром Экватор 10,5 мг 1 таблетка", value: false},
  {label: "В обед Конкор 2,5 мг 1 таблетка", value: false},
  {label: "5000 шагов", value: false},
  {label: "Соли не более 5 грамм", value: false},
  {label: "Не ел жареная и острая пища", value: false},
  {label: "Не пил алкоголь, чай и кофе", value: false},
  {label: "Сон не менее 7 часов", value: false},
]

// Высчитываю число на изменение
const checkboxInput = () => {
  count.value = checkList.reduce((acc, currentValue) => currentValue.value ? acc + 1 : acc, 0)
}
</script>

<style scoped>
.daily-checklist__content {
  padding-bottom: 10px;
}
.checkbox-wrapper {
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  height: min-content;
}
</style>