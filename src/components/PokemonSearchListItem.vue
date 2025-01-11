<template>
  <div class="pokemon-sprite-container">
    <img :src="imageLink" alt="" aria-hidden="true" class="pokemon-sprite" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageLink: string;
  name: string;
}>();
</script>

<style lang="scss" scoped>
.pokemon-sprite-container {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
}

.pokemon-sprite {
  width: 32px;
  aspect-ratio: 1 / 1;
}
</style>
