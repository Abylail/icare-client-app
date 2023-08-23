<template>
  <div class="daily-plan-graph">
    <vue-apex-charts-component
      type="radialBar"
      :series="[percent]"
      :options="options"
    />
  </div>
</template>

<script setup lang="ts">
import VueApexChartsComponent from "vue3-apexcharts";
import {computed} from "vue";
const props = defineProps({
  total: {type: Number, required: true},
  count: {type: Number, required: true},
})

// Процент для графика
const percent = computed(() => props.count*100/props.total);

const options = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false
    },
    stroke: {
      lineCap: 'round'
    },
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        value: {
          formatter: () => `${props.count}/${props.total}`,
          show: true,
        }
      },
    }
  },
  labels: ['План'],
};
</script>

<style scoped>
.daily-plan-graph {
  min-height: 250px;
}
</style>