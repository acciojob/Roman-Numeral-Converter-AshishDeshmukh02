function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
function decimalToRoman(decimalNum) {
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

  let romanNumeral = '';
  for (let i = 0; i < romanNumeralMap.length; i++) {
    while (decimalNum >= romanNumeralMap[i].decimal) {
      romanNumeral += romanNumeralMap[i].roman;
      decimalNum -= romanNumeralMap[i].decimal;
    }
  }
  return romanNumeral;
}

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
