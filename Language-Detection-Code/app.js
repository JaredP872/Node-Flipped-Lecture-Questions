// Challenge
// 1. Find an npm package that tells you the language a string is written in.
// 2. Print the most accurate late for the following phrases:
// a. “Es macht gut”
// b. “Dobrá práce”
// c. “Gwaith da”

const langdetect = require("langdetect");

const text = "Es macht gut";
const language = langdetect.detect(text);

console.log(language);
