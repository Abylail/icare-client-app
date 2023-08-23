<template>
  <div class="article-carousel">

    <ion-card-header class="article-carousel__header">
      <ion-card-subtitle class="article-carousel__title">{{ title }}</ion-card-subtitle>
    </ion-card-header>

    <!-- Список статей -->
    <div class="article-carousel__list">
      <div
          class="article-carousel__item"
          v-for="(item, index) in items" :key="index"
          :style="{backgroundImage: `url(${item.image})`}"
          @click="goArticle"
      >
        <div class="article-carousel__item-title">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonCardSubtitle, IonCardHeader } from '@ionic/vue';
import {useRouter} from "vue-router";
import {PropType} from "vue";

const {title, items} = defineProps({
  title: String,
  items: Array as PropType<any>
})

const router = useRouter();
const goArticle = (item: any) => router.push(`/m/library/article/${item.id}`)
</script>

<style scoped>
.article-carousel {

}

.article-carousel__header {
  padding-bottom: 0;
}
.article-carousel__title {
  text-align: left;
  color: black;
  font-size: 16px;
  padding-bottom: 0;
}
.article-carousel__list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px 20px 20px;
}
.article-carousel__item {
  padding: 10px;
  display: flex;
  align-items: end;
  height: 170px;
  width: 140px;
  min-width: 140px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0px rgba(34, 60, 80, 0.2);
  background-size: cover;
  background-position: center;
}
.article-carousel__item-title {
  font-weight: bold;
  font-size: 14px;
  color: white;
  text-shadow: 2px 1px 5px black, 0 0 1em black, 0 0 0.2em black;
}
</style>