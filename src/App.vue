<template>
  <main class="main-container">
    <div class="search-container">
      <input
        type="text"
        :value="userInput"
        @input="
          (event) => (userInput = (event.target as HTMLInputElement).value)
        "
        placeholder="Selectionnez un pokemon"
      />
      <div v-if="userInput" class="pokemon-search-list">
        <button
          v-for="pokemon in filteredPokemonIdNameList"
          :key="pokemon.id"
          class="pokemon-sprite-container"
          @click="selectPokemon(pokemon.id)"
        >
          <img
            :src="pokemon.image"
            alt=""
            aria-hidden="true"
            class="pokemon-sprite"
          />
          <span>{{ pokemon.name }}</span>
        </button>
      </div>
    </div>

    <div v-if="selectedPokemonIndex" class="pokemon-card">
      <div class="pokemon-header">
        <div>
          <img
            :src="selectedPokemon.sprites.regular"
            alt=""
            aria-hidden="true"
            class="pokemon-sprite big"
          />
        </div>
        <div>
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
          <h3>Capacités</h3>
          <div v-for="ability in selectedPokemon.talents" :key="ability.name">
            <div>{{ ability.name }}</div>
          </div>
        </div>
      </div>

      <div class="pokemon-stats">
        <h3>Stats</h3>
        <div>
          HP: <span class="bold">{{ stats.hp }}</span>
        </div>
        <div>
          Attaque: <span class="bold">{{ stats.atk }}</span>
        </div>
        <div>
          Défense: <span class="bold">{{ stats.def }}</span>
        </div>
        <div>
          Attaque spéciale: <span class="bold">{{ stats.spe_atk }}</span>
        </div>
        <div>
          Défense spéciale: <span class="bold">{{ stats.spe_def }}</span>
        </div>
        <div>
          Vitesse: <span class="bold">{{ stats.vit }}</span>
        </div>
      </div>

      <div class="pokemon-resistances-container">
        <h3>Dégats</h3>
        <div class="pokemon-resistances">
          <div>
            <div
              v-for="(resistance, index) in selectedPokemon.resistances.slice(
                0,
                9,
              )"
              :key="resistance.name + index"
            >
              {{ resistance.name }}:
              <span
                class="bold"
                :class="[getResistanceColor(resistance.multiplier)]"
                >x{{ resistance.multiplier }}</span
              >
            </div>
          </div>
          <div>
            <div
              v-for="(resistance, index) in selectedPokemon.resistances.slice(
                -9,
              )"
              :key="resistance.name + index"
            >
              {{ resistance.name }}:
              <span
                class="bold"
                :class="[getResistanceColor(resistance.multiplier)]"
              >
                x{{ resistance.multiplier }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import pokemonData from "@/data/pokemon_min.json";
import { computed, ref } from "vue";
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

const stats = computed(() => {
  return selectedPokemon.value.stats;
});

function getResistanceColor(mutliplier: number): string {
  switch (mutliplier) {
    case 4:
    case 2:
      return "green";
    case 0.25:
    case 0.5:
      return "red";
    case 0:
      return "black";
    default:
      return "";
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
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
  width: 100%;
  max-width: 960px;
  margin: auto;

  input {
    all: unset;
    border-radius: 8px;
    padding: 4px 8px;

    background: #2c3e50;
    width: 100%;
    max-width: 960px;

    &:focus {
      outline: solid 1px grey;
    }
  }
}

.pokemon-search-list {
  position: absolute;
  left: 0;
  width: 100%;
  max-width: 960px;
  top: 40px;
  z-index: 1;
  border-radius: 8px;
  background: #282828;
}

.pokemon-resistances {
  display: flex;
  gap: 12px;
}

.pokemon-card {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  width: 100%;
  max-width: 960px;
  margin: auto;

  border-radius: 8px;
  background: #2c3e50;
  padding: 16px;
}

.pokemon-header {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 320px;
  width: 100%;
}

.pokemon-resistances-container {
  margin: auto;
  width: 320px;
}

h3 {
  margin: 12px 0;
}

.pokemon-stats {
  margin: auto;
  width: 320px;
}

.pokemon-sprite-container {
  background: none;
  color: inherit;
  border: none;

  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  margin: 12px;
  padding: 4px;
}

.pokemon-sprite {
  width: 32px;
  aspect-ratio: 1 / 1;
}

.bold {
  font-weight: bold;
}

.green {
  color: green;
}

.red {
  color: indianred;
}

.black {
  color: black;
}
</style>
