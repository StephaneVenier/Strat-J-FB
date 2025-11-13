// data/accountLevel.ts
export const ACCOUNT_MAX_LEVEL = 100;

const BASE_XP = 100;
const EXPONENT = 1.25;

export function getAccountXpToNext(level: number): number {
  if (level < 1 || level >= ACCOUNT_MAX_LEVEL) return 0;
  return Math.round(BASE_XP * Math.pow(level, EXPONENT));
}

export function getAccountTotalXpForLevel(level: number): number {
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += getAccountXpToNext(i);
  }
  return total;
}
