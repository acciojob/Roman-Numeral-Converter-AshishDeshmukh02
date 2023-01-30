function decimalToRoman(num) {
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

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = decimalToRoman
