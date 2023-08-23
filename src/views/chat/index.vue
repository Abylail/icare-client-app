<template>
  <page-wrapper title="Связь с врачом">
    <ion-button class="chat__button" expand="block">Видео консультация</ion-button>
    <ion-button class="chat__button" color="light" expand="block">Аудио консультация</ion-button>
    <ion-button class="chat__button" color="medium" expand="block">Чат с врачом</ion-button>
  </page-wrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/components/common/layout/pageWrapper.vue";
import {IonButton} from "@ionic/vue";
</script>

<style scoped>
.chat__button {
  margin: 20px;
}
</style>