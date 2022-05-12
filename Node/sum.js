const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

let sum = 0;
 function getNumber()
 {
     
    readline.question('Enter a number to add, enter stop to stop ', (numbers) =>{
        if(numbers === "stop")
        {            
            console.log("the sum is ",sum);
            readline.close();
        }
        else{
            sum = sum + parseInt(numbers);
            getNumber();
        }
    })

 }
let a = getNumber();
console.log(a);