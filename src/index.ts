import { createInterface, ReadLineOptions } from "readline";
import { Query, waterOverflowCalc } from "./waterOverflowCalc";

const readLineOptions: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false
};

const readline = createInterface(readLineOptions);
readline.setPrompt(
  "Calc water overflow, input example poured liquid, ith row, jth glass\n"
);
readline.prompt(true);
readline.on(`line`, line => {
  const [pouredStr, ithRowStr, jthGlassStr] = line.trim().split(",");
  const query: Query = {
    poured: parseInt(pouredStr),
    queryRow: parseInt(ithRowStr),
    queryGlass: parseInt(jthGlassStr)
  };
  const res = waterOverflowCalc(query);

  readline.setPrompt(
    `liquid of ${jthGlassStr}th glass of ${ithRowStr}th row is ${res}!\n`
  );
  readline.prompt(true);
});
