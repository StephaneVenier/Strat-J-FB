// data/items.ts
export type ItemSlot =
  | "top"
  | "bottom"
  | "shoes"
  | "gear_accessory"
  | "perf_accessory"
  | "health_accessory"
  | "special";

export type ItemStat =
  | "fatigue_reduction"
  | "endurance_max"
  | "training_efficiency"
  | "recovery"
  | "account_xp_bonus"
  | "injury_reduction"
  | "all_round";

export type Rarity = "common" | "rare" | "epic" | "legendary";

export interface ItemBonuses {
  common: number;
  rare: number;
  epic: number;
  legendary: number;
}

export interface GameItem {
  id: string;
  name: string;
  slot: ItemSlot;
  stat: ItemStat;
  baseValue: number;
  levelHint?: number;
  bonuses: ItemBonuses;
}

const RARITY_MULTIPLIER: Record<Rarity, number> = {
  common: 1,
  rare: 1.7,
  epic: 2.6,
  legendary: 4,
};

function makeBonuses(base: number): ItemBonuses {
  return {
    common: Math.round(base),
    rare: Math.round(base * RARITY_MULTIPLIER.rare),
    epic: Math.round(base * RARITY_MULTIPLIER.epic),
    legendary: Math.round(base * RARITY_MULTIPLIER.legendary),
  };
}

export const ITEMS: GameItem[] = [
  { id: "tshirt_respirant", name: "T-shirt respirant", slot: "top", stat: "fatigue_reduction", baseValue: 1, levelHint: 1, bonuses: makeBonuses(1) },
  { id: "short_leger", name: "Short léger", slot: "bottom", stat: "endurance_max", baseValue: 1, levelHint: 2, bonuses: makeBonuses(1) },
  { id: "chaussures_running_legeres", name: "Chaussures running légères", slot: "shoes", stat: "training_efficiency", baseValue: 2, levelHint: 3, bonuses: makeBonuses(2) },
  { id: "montre_sportive_basique", name: "Montre sportive basique", slot: "perf_accessory", stat: "account_xp_bonus", baseValue: 2, levelHint: 4, bonuses: makeBonuses(2) },
  { id: "brassard_smartphone", name: "Brassard smartphone", slot: "gear_accessory", stat: "recovery", baseValue: 1, levelHint: 5, bonuses: makeBonuses(1) },

  { id: "tshirt_technique_compression", name: "T-shirt technique (compression)", slot: "top", stat: "fatigue_reduction", baseValue: 3, levelHint: 15, bonuses: makeBonuses(3) },
  { id: "chaussures_trail", name: "Chaussures trail", slot: "shoes", stat: "training_efficiency", baseValue: 4, levelHint: 21, bonuses: makeBonuses(4) },
  { id: "lunettes_sport_anti_uv", name: "Lunettes sport anti-UV", slot: "gear_accessory", stat: "recovery", baseValue: 3, levelHint: 23, bonuses: makeBonuses(3) },
  { id: "tenue_complete_competition", name: "Tenue complète de compétition", slot: "special", stat: "all_round", baseValue: 5, levelHint: 50, bonuses: makeBonuses(5) },

  { id: "exosquelette_sportif_leger", name: "Exosquelette sportif léger", slot: "special", stat: "all_round", baseValue: 8, levelHint: 75, bonuses: makeBonuses(8) },
  { id: "noyau_energetique_sportif", name: "Noyau énergétique sportif", slot: "special", stat: "all_round", baseValue: 10, levelHint: 100, bonuses: makeBonuses(10) },
];
