import { createInterface, ReadLineOptions } from "readline";
import { Query, waterOverflowCalc } from "./waterOverflowCalc";

process.stdout.write(
  `Calc water overflow, input example poured liquid, ith row, jth glass`
);

const readLineOptions: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout
};

const readline = createInterface(readLineOptions);
readline.prompt(true);

readline.on(`line`, line => {
  const [pouredStr, ithRowStr, jthGlassStr] = line.trim().split(",");
  const query: Query = {
    poured: parseInt(pouredStr),
    queryRow: parseInt(ithRowStr),
    queryGlass: parseInt(jthGlassStr)
  };
  const res = waterOverflowCalc(query);
  console.log(res);

  process.stdout.write(
    `liquid of ${jthGlassStr} glass of ${ithRowStr} row is ${res}!`
  );
  readline.prompt(true);
});
