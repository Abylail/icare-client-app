<template>
  <page-wrapper title="Библиотека">
    <article-carousel title="Рекомендации" :items="recommendations"/>
    <article-carousel title="Упражнения" :items="recommendations"/>
    <article-carousel title="Полезные советы" :items="recommendations"/>
  </page-wrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
import ArticleCarousel from "@/components/common/library/articleCarousel.vue";
const recommendations = [
  {label: "Упражнения для тонуса", id: 1, image: "https://shape.ru/images/fitnes/mind-body/mobility-z.jpeg"},
  {label: "Артериальная гипертензия", id: 2, image: "https://www.rscf.ru/upload/iblock/f3f/f3fb2b343e428ccab98714c6cec63623.jpg"},
  {label: "Можно ли курить", id: 3, image: "https://cdnn21.img.ria.ru/images/148061/86/1480618674_268:0:5333:3799_1920x0_80_0_0_6e258ee71be9693d999d080d64c919c8.jpg"},
]
</script>

<style scoped>

</style>