<template>
  <ion-card>

    <ion-card-header>
      <ion-card-subtitle>{{ props.title }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <vue-apex-charts-component
          :type="props.type"
          :options="props.options"
          :series="props.series"
      />
    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/vue';
import VueApexChartsComponent from "vue3-apexcharts";
const props = defineProps({
  title: String,
  type: String,
  options: Object,
  series: [Object, Array],
})
</script>

<style scoped>

</style>