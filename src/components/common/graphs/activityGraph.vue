<template>
  <graph-card-wrapper
      title="Ваша активность"
      type="heatmap"
      :options="options"
      :series="series"
  />
</template>

<script setup lang="ts">
import GraphCardWrapper from "@/components/common/graphs/graphCardWrapper.vue";
const generateData = (num: number, {min, max}: {min: number, max: number}) => [5, 10, 6, 7, 8, 11, 2]
const series = [{
  name: 'Не курить',
  data: [10, 0, 5, 10, 10, 5, 0, 10, 10, 10, 10]
},
  {
    name: 'Экватор',
    data: [10, 0, 10, 0, 5, 10, 0, 10, 0, 10, 10]
  },
  {
    name: 'Конкор',
    data: [10, 0, 10, 0, 5, 10, 0, 10, 0, 10, 10]
  },
  {
    name: '5000 шагов',
    data: [10, 10, 10, 0, 10, 10, 10, 10, 0, 10, 10]
  },
  {
    name: 'жареное и острая',
    data: [10, 5, 10, 10, 0, 10, 5, 10, 10, 0, 10]
  },
  {
    name: 'алкоголь, чай, кофе',
    data: [10, 10, 10, 10, 0, 5, 10, 10, 10, 0, 10]
  },
  {
    name: 'Сон 7 часов',
    data: [0, 0, 10, 10, 0, 10, 0, 10, 10, 0, 10]
  },
];

const options = {
  chart: {
    height: 350,
    type: 'heatmap',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false,
  },
};
</script>

<style scoped>

</style>