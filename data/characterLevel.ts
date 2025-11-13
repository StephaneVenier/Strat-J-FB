// data/characterLevel.ts
export const CHARACTER_MAX_LEVEL = 100;

const BASE_XP = 50;
const EXPONENT = 1.35;

export function getCharacterXpToNext(level: number): number {
  if (level < 1 || level >= CHARACTER_MAX_LEVEL) return 0;
  return Math.round(BASE_XP * Math.pow(level, EXPONENT));
}

export function getCharacterTotalXpForLevel(level: number): number {
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += getCharacterXpToNext(i);
  }
  return total;
}
