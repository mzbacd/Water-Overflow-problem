import { Query, waterOverflowCalc } from "../waterOverflowCalc";

describe("waterOverflowCalc", () => {
  const expected: [Query, number][] = [
    [
      {
        poured: 0.25,
        queryRow: 0,
        queryGlass: 0
      },
      0.25
    ],
    [
      {
        poured: 0.25,
        queryRow: 1,
        queryGlass: 1
      },
      0
    ],
    [
      {
        poured: 0.25,
        queryRow: 1,
        queryGlass: 0
      },
      0
    ],
    [
      {
        poured: 1,
        queryRow: 1,
        queryGlass: 1
      },
      0.25
    ],
    [
      {
        poured: 1,
        queryRow: 3,
        queryGlass: 4
      },
      0
    ]
  ];
  it("should caculate the liquid for jth glass of ith row correctly", () => {
    for (let i = 0; i < expected.length; i++) {
      const [query, result] = expected[i];
      expect(waterOverflowCalc(query)).toBe(result);
    }
  });
});
