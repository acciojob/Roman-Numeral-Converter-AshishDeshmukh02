const romanNumeralMap = [
  { decimal: 1000, roman: 'M' },
  { decimal: 900, roman: 'CM' },
  { decimal: 500, roman: 'D' },
  { decimal: 400, roman: 'CD' },
  { decimal: 100, roman: 'C' },
  { decimal: 90, roman: 'XC' },
  { decimal: 50, roman: 'L' },
  { decimal: 40, roman: 'XL' },
  { decimal: 10, roman: 'X' },
  { decimal: 9, roman: 'IX' },
  { decimal: 5, roman: 'V' },
  { decimal: 4, roman: 'IV' },
  { decimal: 1, roman: 'I' },
];

function decimalToRoman(decimalNum) {
  let romanNumeral = '';
  for (let i = 0; i < romanNumeralMap.length; i++) {
    while (decimalNum >= romanNumeralMap[i].decimal) {
      romanNumeral += romanNumeralMap[i].roman;
      decimalNum -= romanNumeralMap[i].decimal;
    }
  }
  return romanNumeral;
}

const decimalNum = prompt();
const romanNumeral = decimalToRoman(decimalNum);
console.log(`${romanNumeral}`);

module.exports = decimalToRoman
