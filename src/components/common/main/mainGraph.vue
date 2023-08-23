<template>
  <ion-card>

    <ion-card-header>
      <ion-card-subtitle>Артериальное давление</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="main-graph__content">
      <vue-apex-charts-component
          type="area"
          :options="chartOptions"
          :series="series"
      />
      <ion-button fill="clear" size="small" expand="full" @click="goGraphs()">Все графики</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {IonCard, IonCardContent, IonButton, IonCardHeader, IonCardSubtitle} from "@ionic/vue";
import VueApexChartsComponent from "vue3-apexcharts";
import {useRouter} from "vue-router";
const router = useRouter();

const goGraphs = () => router.push("/m/main/graphs")
const chartOptions = {
  chart: {
    id: "vuechart-example",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ["19 мая", "20 мая", "21 мая", "22 мая", "23 мая", "24 мая"],
  },
};
const series = [
  {
    name: "Верхнее давление",
    data: [120, 118, 117, 125, 130, 125],
  },
  {
    name: "Нижнее давление",
    data: [80, 78, 77, 75, 80, 75],
  },
];
</script>

<style scoped>
.main-graph__content {
  padding-left: 0;
  padding-right: 0;
}
</style>