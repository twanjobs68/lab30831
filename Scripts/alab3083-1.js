//LAB 308.3..1
//***************************************************************************************************************************************************** */
//***************************************************************************************************************************************************** */
//FIZZ BUZZ - Part 1
for (let myI = 1; myI <= 100; myI++) {//Forloop will iterate from 1 to 100
  if (myI % 3=== 0 && myI % 5 ===0){//if statemenmt will check to see if number divisable by both 3 and 5 first
      console.log(myI ,"Fizz Buzz");//if conditions are true the console log "Fizz Buzz"
  } else if(myI % 3 === 0){//if number divisable by 3 
      console.log("Fizz");//console log "Fizz"
  } else if(myI % 5 ===0){//if number divisable by 5
      console.log("Buzz");//console log "Buzz"
  }else{
      console.log("This number is not divisable by 3 or 5 ", myI);//console log if it is not divisable by any number
  }
}
//************************************************************** */
// PRIME NUMBERS - Part 2
//************************************************************** */
let myNum = 2; // Declare an random number, starting number
let getNextPrimeNum = myNum + 1; // Check from the next number

while (true) {
  let isAprimeNum= true; // Assume the number is prime

  // Check divisors from 2 to the square root of the number
  for (let i = 0; i <= Math.sqrt(getNextPrimeNum); i++) {
      if (getNextPrimeNum % i === 0) {
          isAprimeNum= false; // If divisible, it's not a prime number
          break; // leave loop
      }
  }

  if (isAprimeNum) {
      console.log(`The next prime number is: ${getNextPrimeNum}`);
      break; // Break out of the loop when prime number found
  }

  getNextPrimeNum++; // Increment to check for next number
}

//Part 3 Feeling Loopy 
//When using arrays, with an object you have keys that you can access in the form of objects by using the index of each object in the array.
