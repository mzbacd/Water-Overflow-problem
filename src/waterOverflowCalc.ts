export interface Query {
  poured: number;
  queryRow: number;
  queryGlass: number;
}

export function waterOverflowCalc({
  poured,
  queryRow,
  queryGlass
}: Query): number {
  const glassCapacity = 0.25;
  const dp = Array(queryRow + 2)
    .fill(0)
    .map(() => Array(queryRow + 2).fill(0));

  dp[0][0] = poured;

  for (let r = 0; r <= queryRow; r++) {
    for (let c = 0; c <= r; c++) {
      const overFlow = (dp[r][c] - glassCapacity) / 2;
      if (overFlow > 0) {
        dp[r + 1][c] += overFlow;
        dp[r + 1][c + 1] += overFlow;
      }
    }
  }

  return Math.min(glassCapacity, dp[queryRow][queryGlass]);
}
