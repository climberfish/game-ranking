<template>
  <div class="ranking">
    <div v-for="(player, idx) in players" :key="player.name"
      class="player-rank" :class="{ first: idx === 0 }"
    >
      <div class="podium">{{idx + 1}}</div>
      <img :src="`images/chars/${(idx % 3) + 1}.png`" alt="Player avatar">
      <div class="info">
        <span class="header">Player</span>
        <span class="value">{{player.name}}</span>
      </div>
      <div class="info">
        <span class="header">Level</span>
        <span class="value">{{player.level}}</span>
      </div>
      <div class="country">{{player.country}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    players: [
      { name: 'Genji', level: 325, country: 'AU' },
      { name: 'Hanzo', level: 324, country: 'BR' },
      { name: 'Bastion', level: 324, country: 'US' },
      { name: 'Hanzo', level: 324, country: 'BR' },
      { name: 'Bastion', level: 324, country: 'US' },
      { name: 'Hanzo', level: 324, country: 'BR' },
      { name: 'Bastion', level: 324, country: 'US' },
    ],
  }),
});
</script>

<style>
.player-rank {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom:48px;
  margin-right: 8px;
  padding: 8px 16px;
  height: 100px;
  border-radius: 16px;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.12);
}
.player-rank.first {
  background: linear-gradient(165deg, #f29848, #fa7a08);
}
.player-rank.first * {
  color: #fff !important;
}
.player-rank > .country {
  position: absolute;
  right: -8px;
  bottom: -8px;
  padding: 8px;
  background: #2b3990;
  color: #fff;
  border-radius: 50%;
}
.player-rank > img {
  margin: -40px -40px -8px -20px;
}
.player-rank > .podium {
  color: #f5892a;
  font-size: 64px;
  font-weight: 900;
  line-height: 48px;
  font-style: italic;
  text-shadow:
    4px 4px #fab77d,
    3px 3px #fab77d,
    2px 2px #fab77d,
    1px 1px #fab77d;
}
.player-rank > .info {
  display: flex;
  flex-direction: column;
  color: #777777;
  font-size: 12px;
}
.player-rank > .info > .header {
  text-transform: uppercase;
}
.player-rank > .info > .value {
  color: #252525;
  font-size: 24px;
  font-weight: bold;
}
</style>
