function convertToRoman(num) {
  	// const obj = {
   //    0:['M',1000], 
   //    1:['D', 500], 
   //    2:['C', 100], 
   //    3:['L', 50], 
   //    4:['X', 10], 
   //    5:['V', 5], 
   //    6:['I', 1]
   //  };

  //your code here

        let roman = {
            1: 'I', 2:'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
            10: 'X', 20:'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC',  
            100: 'C', 200:'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM',
            1000: 'M', 2000:'MM', 3000: 'MMM', 4000: 'MV', 5000: 'V', 6000: 'VM', 7000: 'VMM', 8000: 'VMMM', 9000: 'MX',
            10000: 'X'
        }
        
        let count = 1;
        let arr = [];
        for(;num>0;){
            let t = (num % 10)*count;
            if(t!=0){
                arr.unshift(roman[t]);
            }
            count = count*10;
            num = Math.trunc(num/10);
        }

        let result = arr.join('');
        return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
