export const pokemonExample = {
  pokedex_id: 1,
  generation: 1,
  category: "Pok\u00e9mon Graine",
  name: {
    fr: "Bulbizarre",
    en: "Bulbasaur",
    jp: "\u30d5\u30b7\u30ae\u30c0\u30cd",
  },
  sprites: {
    regular:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png",
    shiny:
      "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png",
    gmax: null,
  },
  types: [
    {
      name: "Plante",
      image:
        "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png",
    },
    {
      name: "Poison",
      image:
        "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png",
    },
  ],
  talents: [
    {
      name: "Engrais",
      tc: false,
    },
    {
      name: "Chlorophylle",
      tc: true,
    },
  ],
  stats: {
    hp: 45,
    atk: 49,
    def: 49,
    spe_atk: 65,
    spe_def: 65,
    vit: 45,
  },
  resistances: [
    {
      name: "Normal",
      multiplier: 1,
    },
    {
      name: "Plante",
      multiplier: 0.25,
    },
    {
      name: "Feu",
      multiplier: 2,
    },
    {
      name: "Eau",
      multiplier: 0.5,
    },
    {
      name: "\u00c9lectrik",
      multiplier: 0.5,
    },
    {
      name: "Glace",
      multiplier: 2,
    },
    {
      name: "Combat",
      multiplier: 0.5,
    },
    {
      name: "Poison",
      multiplier: 1,
    },
    {
      name: "Sol",
      multiplier: 1,
    },
    {
      name: "Vol",
      multiplier: 2,
    },
    {
      name: "Psy",
      multiplier: 2,
    },
    {
      name: "Insecte",
      multiplier: 1,
    },
    {
      name: "Roche",
      multiplier: 1,
    },
    {
      name: "Spectre",
      multiplier: 1,
    },
    {
      name: "Dragon",
      multiplier: 1,
    },
    {
      name: "T\u00e9n\u00e8bres",
      multiplier: 1,
    },
    {
      name: "Acier",
      multiplier: 1,
    },
    {
      name: "F\u00e9e",
      multiplier: 0.5,
    },
  ],
  evolution: {
    pre: null,
    next: [
      {
        pokedex_id: 2,
        name: "Herbizarre",
        condition: "Niveau 16",
      },
      {
        pokedex_id: 3,
        name: "Florizarre",
        condition: "Niveau 32",
      },
    ],
    mega: null,
  },
  height: "0,7 m",
  weight: "6,9 kg",
  egg_groups: ["Monstrueux", "V\u00e9g\u00e9tal"],
  sexe: {
    male: 87.5,
    female: 12.5,
  },
  catch_rate: 45,
  level_100: 1059862,
  formes: null,
};

export type PokemonData = typeof pokemonExample;
