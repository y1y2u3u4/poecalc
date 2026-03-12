export type SocketColor = "R" | "G" | "B";

export interface VoriciInput {
  numSockets: number;
  strReq: number;
  dexReq: number;
  intReq: number;
  desiredColors: SocketColor[];
}

export interface CraftingMethod {
  name: string;
  cost: number;
  description: string;
  isRecommended?: boolean;
}

export interface VoriciResult {
  probability: number;
  avgChromes: number;
  percentile90: number;
  percentile99: number;
  craftingMethods: CraftingMethod[];
  recommendedIndex: number;
}

/**
 * Calculate the probability of rolling a specific color on a single socket.
 *
 * Formula:
 * - On-color: (requirement + 10) / (total_requirements + 30)
 * - Off-color: 10 / (total_requirements + 30)
 * - If all requirements are 0: each color has 1/3 probability
 */
function getColorProbability(
  color: SocketColor,
  strReq: number,
  dexReq: number,
  intReq: number
): number {
  const totalReq = strReq + dexReq + intReq;

  if (totalReq === 0) {
    return 1 / 3;
  }

  const denominator = totalReq + 30;

  switch (color) {
    case "R":
      return (strReq + 10) / denominator;
    case "G":
      return (dexReq + 10) / denominator;
    case "B":
      return (intReq + 10) / denominator;
  }
}

/**
 * Calculate the probability of rolling an exact combination of socket colors.
 * Uses multinomial probability to account for all permutations.
 */
function calculateExactProbability(
  desiredColors: SocketColor[],
  strReq: number,
  dexReq: number,
  intReq: number
): number {
  const n = desiredColors.length;
  if (n === 0) return 1;

  const pR = getColorProbability("R", strReq, dexReq, intReq);
  const pG = getColorProbability("G", strReq, dexReq, intReq);
  const pB = getColorProbability("B", strReq, dexReq, intReq);

  // Count desired colors
  const countR = desiredColors.filter((c) => c === "R").length;
  const countG = desiredColors.filter((c) => c === "G").length;
  const countB = desiredColors.filter((c) => c === "B").length;

  // Multinomial probability: n! / (nR! * nG! * nB!) * pR^nR * pG^nG * pB^nB
  const multinomialCoeff =
    factorial(n) / (factorial(countR) * factorial(countG) * factorial(countB));

  return (
    multinomialCoeff *
    Math.pow(pR, countR) *
    Math.pow(pG, countG) *
    Math.pow(pB, countB)
  );
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Crafting bench recipes with fixed chromatic costs.
 */
const BENCH_RECIPES: {
  name: string;
  color: SocketColor;
  count: number;
  cost: number;
}[] = [
  { name: "At least 1 Red", color: "R", count: 1, cost: 4 },
  { name: "At least 1 Green", color: "G", count: 1, cost: 4 },
  { name: "At least 1 Blue", color: "B", count: 1, cost: 4 },
  { name: "At least 2 Red", color: "R", count: 2, cost: 25 },
  { name: "At least 2 Green", color: "G", count: 2, cost: 25 },
  { name: "At least 2 Blue", color: "B", count: 2, cost: 25 },
  { name: "At least 3 Red", color: "R", count: 3, cost: 120 },
  { name: "At least 3 Green", color: "G", count: 3, cost: 120 },
  { name: "At least 3 Blue", color: "B", count: 3, cost: 120 },
];

/**
 * After using a bench recipe that guarantees some sockets,
 * calculate the probability of the remaining sockets being correct.
 * Then average cost = recipe_cost + (remaining_attempts_avg * 1 chrome per remaining roll).
 *
 * Actually for bench recipe, you pay the fixed cost and get guaranteed colors on some sockets.
 * The remaining sockets are then random. If desired has more sockets than the bench guarantees,
 * we need to calculate the probability of the remaining rolling correctly, then spam chromes
 * just on those? No - the bench recipe sets the guaranteed ones, and the rest are random.
 * If the rest don't match, you'd have to use chromes (which re-rolls all).
 *
 * Correct approach: Bench recipe gives you "at least N of color X".
 * Remaining sockets after the guaranteed N are random.
 * Total cost = bench_cost / probability_of_remaining_matching.
 * Because you might need to repeat the bench recipe until the remaining sockets also match.
 */
function calculateBenchMethodCost(
  recipe: { name: string; color: SocketColor; count: number; cost: number },
  desiredColors: SocketColor[],
  strReq: number,
  dexReq: number,
  intReq: number
): number | null {
  const numSockets = desiredColors.length;
  if (numSockets < recipe.count) return null;

  // Count how many of the recipe color are desired
  const desiredCount = desiredColors.filter((c) => c === recipe.color).length;

  // Recipe only helps if we need at least recipe.count of that color
  if (desiredCount < recipe.count) return null;

  // After bench guarantees recipe.count sockets of recipe.color,
  // remaining sockets (numSockets - recipe.count) need to be filled correctly.
  // The remaining desired colors exclude recipe.count of recipe.color.
  const remainingDesired = [...desiredColors];
  let removed = 0;
  const filteredRemaining: SocketColor[] = [];
  for (const c of remainingDesired) {
    if (c === recipe.color && removed < recipe.count) {
      removed++;
    } else {
      filteredRemaining.push(c);
    }
  }

  if (filteredRemaining.length === 0) {
    // All sockets are covered by the recipe
    return recipe.cost;
  }

  // Probability that remaining sockets roll correctly
  const remainingProb = calculateExactProbability(
    filteredRemaining,
    strReq,
    dexReq,
    intReq
  );

  if (remainingProb === 0) return null;

  // Average number of bench recipe uses needed
  const avgAttempts = 1 / remainingProb;
  return recipe.cost * avgAttempts;
}

export function calculateVorici(input: VoriciInput): VoriciResult {
  const { numSockets, strReq, dexReq, intReq, desiredColors } = input;

  // Ensure we only use the number of sockets specified
  const colors = desiredColors.slice(0, numSockets);

  // Calculate chromatic spam probability
  const probability = calculateExactProbability(colors, strReq, dexReq, intReq);

  const avgChromes = probability > 0 ? 1 / probability : Infinity;

  // Percentile calculations: how many attempts for X% chance of success
  // P(at least 1 success in n trials) = 1 - (1-p)^n >= target
  // n >= log(1-target) / log(1-p)
  const percentile90 =
    probability > 0 && probability < 1
      ? Math.ceil(Math.log(0.1) / Math.log(1 - probability))
      : probability >= 1
        ? 1
        : Infinity;

  const percentile99 =
    probability > 0 && probability < 1
      ? Math.ceil(Math.log(0.01) / Math.log(1 - probability))
      : probability >= 1
        ? 1
        : Infinity;

  // Build crafting methods
  const craftingMethods: CraftingMethod[] = [];

  // Method 1: Chromatic Orb Spam
  craftingMethods.push({
    name: "Chromatic Orb Spam",
    cost: Math.round(avgChromes * 100) / 100,
    description: `Roll chromes until you hit the desired colors. ${(probability * 100).toFixed(4)}% chance per attempt.`,
  });

  // Method 2: Applicable bench recipes
  for (const recipe of BENCH_RECIPES) {
    const cost = calculateBenchMethodCost(recipe, colors, strReq, dexReq, intReq);
    if (cost !== null && isFinite(cost)) {
      craftingMethods.push({
        name: `Bench: ${recipe.name}`,
        cost: Math.round(cost * 100) / 100,
        description: `Use crafting bench for ${recipe.name} (${recipe.cost} chromes), then hope remaining sockets match.`,
      });
    }
  }

  // Find recommended (cheapest) method
  let recommendedIndex = 0;
  let minCost = Infinity;
  for (let i = 0; i < craftingMethods.length; i++) {
    if (craftingMethods[i].cost < minCost) {
      minCost = craftingMethods[i].cost;
      recommendedIndex = i;
    }
  }
  if (craftingMethods.length > 0) {
    craftingMethods[recommendedIndex].isRecommended = true;
  }

  return {
    probability,
    avgChromes,
    percentile90,
    percentile99,
    craftingMethods,
    recommendedIndex,
  };
}
