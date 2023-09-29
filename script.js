function convertToRoman(num) {
  let roman = ['M', 'XM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
        let i = 0;
        let arr = [];
        while(num>0){
          if(num>=values[i]){
            arr.push(roman[i]);
            num = num - values[i];
          }
          else{
            i++;
          }
        }
        let result = arr.join('');
        return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(27));




// do not edit below this line
module.exports = convertToRoman
