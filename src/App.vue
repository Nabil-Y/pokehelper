<template>
  <main class="main-container">
    <div class="search-container">
      <input
        type="text"
        v-model="userInput"
        placeholder="Selectionnez un pokemon"
      />
      <ul v-if="userInput" class="pokemon-search-list">
        <PokemonSearchListItem
          v-for="pokemon in filteredPokemonIdNameList"
          :key="pokemon.id"
          :image-link="pokemon.image"
          :name="pokemon.name"
          @click="selectPokemon(pokemon.id)"
        />
      </ul>
    </div>

    <div v-if="selectedPokemonIndex">
      <img
        :src="selectedPokemon.sprites.regular"
        alt=""
        aria-hidden="true"
        class="pokemon-sprite big"
      />
      <h2>{{ selectedPokemon.name.fr }}</h2>
      <div class="types-container">
        <div v-for="type in selectedPokemon.types" :key="type.name">
          <div>{{ type.name }}</div>
          <img
            :src="type.image"
            alt=""
            aria-hidden="true"
            class="pokemon-type"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import pokemonData from "@/data/pokemon_min.json";
import { computed, ref } from "vue";
import PokemonSearchListItem from "./components/PokemonSearchListItem.vue";
import type { PokemonData } from "./data/type";

const userInput = ref("");
const selectedPokemonIndex = ref(0);
const selectedPokemon = computed((): PokemonData => {
  return pokemonData[selectedPokemonIndex.value] as PokemonData;
});

const pokemonIdNameList = pokemonData.map((pokemon) => ({
  id: pokemon.pokedex_id,
  name: pokemon.name.fr,
  image: pokemon.sprites.regular,
}));

const filteredPokemonIdNameList = computed(() => {
  return pokemonIdNameList
    .filter((pokemonIdName) =>
      pokemonIdName.name
        .toLowerCase()
        .startsWith(userInput.value.toLowerCase()),
    )
    .slice(0, 10);
});

function selectPokemon(id: number) {
  selectedPokemonIndex.value = id;
  userInput.value = "";
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  gap: 64px;
}

.pokemon-sprite {
  width: 32px;
  aspect-ratio: 1 / 1;

  &.big {
    width: 128px;
  }
}

.pokemon-type {
  width: 24px;
  aspect-ratio: 1 / 1;
}

.types-container {
  display: flex;
  gap: 12px;
}

.search-container {
  position: relative;
  min-width: 320px;
}

.pokemon-search-list {
  position: absolute;
}
</style>
