<template>
  <div class="ranking-view">
    <h1>Ranking</h1>
    <div class="season">
      <span>Season</span>
      <select name="season" v-model="season">
        <option v-for="s in 5" :key="s" :value="s">{{s}}</option>
      </select>
    </div>
    <Ranking />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Ranking from '@/components/Ranking.vue';

export default defineComponent({
  name: 'Home',
  components: { Ranking },
  data: () => ({ season: 4 }),
});
</script>

<style>
h1 {
  text-align: center;
}
.season {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  font-size: 20px;
}
.season > select {
  display: flex;
  padding: 4px 8px;
  margin-left: 16px;
  color: #f5892a;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.08);
}
</style>
