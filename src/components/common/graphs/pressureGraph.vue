<template>
  <graph-card-wrapper
      title="Давление"
      type="area"
      :options="options"
      :series="series"
  />
</template>

<script setup lang="ts">
import GraphCardWrapper from "@/components/common/graphs/graphCardWrapper.vue";
const options = {
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

</style>