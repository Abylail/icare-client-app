<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet/>
      <main-bottom-bar/>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';
import MainBottomBar from "@/components/common/layout/mainBottomBar.vue";
</script>