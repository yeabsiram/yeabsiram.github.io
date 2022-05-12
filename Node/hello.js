const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('How old are you? ', age => {
    if(age < 16)
    {
        console.log(`You’re not allowed to drive in Iowa`);
    }
    else{
        console.log("You’re allowed to get a drivers license in Iowa");
    }
    readline.close();
 });
   