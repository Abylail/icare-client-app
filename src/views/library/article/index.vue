<template>
  <page-wrapper title="Статья" :go-back="true">
    <ion-card-header>
      <ion-card-title>Упражнения для тонуса</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <div v-html="htmlContent"></div>
    </ion-card-content>
  </page-wrapper>
</template>

<script setup lang="ts">
import {IonCardHeader, IonCardTitle, IonCardContent} from "@ionic/vue";
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
const htmlContent = "<p style=\"margin-top:12.0pt; margin-right:0cm; margin-bottom:12.0pt; margin-left:.05pt\"><span style=\"font-size:16px;\"><span lang=\"RU\" style=\"font-family:&quot;Arial&quot;,sans-serif\">Артериальное давление, при котором показатели тонометра превышают 140/90, считается высоким. Постоянное пребывание в таком состоянии считается гипертонической болезнью.</span></span></p><p style=\"margin-top:12.0pt; margin-right:0cm; margin-bottom:12.0pt; margin-left:.05pt\"><span style=\"font-size:16px;\"><img title=\"Какие есть упражнения для понижения или повышения артериального давления?\" alt=\"Упражнения при высоком или низком давлении\" height=\"301\" src=\"https://ortop.ua/content/uploads/images/ortop/statti/otgimaniya-doktora-bubnovskogo.webp\" style=\"margin: 2px 6px; float: right;\" width=\"400\"><span lang=\"RU\" style=\"font-family:&quot;Arial&quot;,sans-serif\">Причина высокого давления – перегрузка сердечной мышцы (миокард), которая, как и все остальные мышцы проходит через циклы сокращений и расслаблений. Постоянное нахождение в таком состоянии повышает риск возникновения осложнений, таких как инфаркт и инсульт.</span></span></p><p style=\"margin-top:12.0pt; margin-right:0cm; margin-bottom:12.0pt; margin-left:.05pt\"><span style=\"font-size:16px;\"><span lang=\"RU\" style=\"font-family:&quot;Arial&quot;,sans-serif\">С чего начинается гимнастика от высокого давления? Как и любой комплекс упражнений – с разминки. Для этого в течение двух минут Вам будет необходимо чередовать различные виды ходьбы:</span></span></p><p style=\"margin-top:12.0pt; margin-right:0cm; margin-bottom:12.0pt; margin-left:.05pt\"><span style=\"font-size:16px;\"><span lang=\"RU\" style=\"font-family:&quot;Arial&quot;,sans-serif\">Вариации меняются через каждые 5 шагов. В процессе нужно сохранять ровное дыхание. Если Вы запыхались, остановитесь и сделайте несколько глубоких вдохов. Делать данные упражнения высокое давление не мешает, поскольку они не сложны и не требуют усиленной нагрузки. Кроме того, постоянное переключение активности тренирует не только мышцы и сосуды, но и мозг, улучшая его приспособляемость к условиям внешней среды.</span></span></p>"
</script>

<style scoped>

</style>