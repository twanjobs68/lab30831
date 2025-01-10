//decide whether it is best to use for, 
// for of, or while loops 
// to implement the solution.


//LAB 308.3..1
//***************************************************************************************************************************************************** */
//***************************************************************************************************************************************************** */
//FIZZ BUZZ - Part 1
for (let myI = 1; myI <= 40; myI++) {//Forloop will iterate from 1 to 100
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
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.
//************************************************************** */
let myNum = 20; // Declare an random number, starting number
let getNextPrimeNum = myNum + 1; // Check from the next number

while (true) {
  let isAprimeNum= true; // consider number to be a Prime number

  // Use Math.sqrt to calculates and returns the square root of the number 
  for (let i = 2; i <= Math.sqrt(getNextPrimeNum); i++) {
      if (getNextPrimeNum % i === 0) {
          isAprimeNum= false; // If divisible, it's not a prime number
          break; // leave loop
      }
  }

  if (isAprimeNum) {
      console.log(`The next prime number is: ${getNextPrimeNum}`);
      break; // Breaks out of the if loop when a prime number is reached
  }

  getNextPrimeNum++; // Increment counter for next number
}

//Part 3 Feeling Loopy 
//When using arrays, with an object you have keys that you can access in the form 
// of objects by using the index of each object in the array.
//CSV data looks like this:
//ID,Name,Occupation,Age\n42,Bruce,Knight,
//41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
//TASK: Your task is to write a script that accomplishes the following:
//1. Loop through the csvCharacters of a given CSV string.
//2. Store each “cell” of data in a variable.
//3. When you encounter a comma, move to the next cell.
// 4. When you encounter the “\r\n” sequence, move to the next “row.”
// 5. Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cellOne, cellTwo, cellThree, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped csvCharacters other than “\n”.
//let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let csvData = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';
let cellOne = "", cellTwo = "", cellThree = "", cellFour= "";//These variables  will store the data for the cells 
let thisCell = 1;// current cell position to start

for (let i = 0; i < csvData.length; i++) {
    let csvChar = csvData[i];//index of data position

    if (csvChar === ",") {//if comma found
        thisCell++; // Go to the next cell because a comma was found
    } else if (csvChar === "\n") {//if new line character found
        // Print out the row and  reset variable to start on to next row and new cell
        console.log(cellOne, cellTwo, cellThree, cellFour);
        cellOne = cellTwo = cellThree = cellFour= "";//clear next row cells
        thisCell = 1;//start at cell 1
    } else {
        // put the delimited data in correct cell
        if (thisCell === 1) {
            cellOne += csvChar;//put characters found up to delimeter in first cell
        } else if (thisCell === 2) {
            cellTwo += csvChar;//put characters found up to delimeter in second cell
        } else if (thisCell === 3) {
            cellThree += csvChar;//put characters found up to delimeter in third cell
        } else if (thisCell === 4) {
            cellFour+= csvChar;//put characters found up to delimeter in fourth cell
        }
    }
}

// This will display the last row if it does not end with a new line(\n) delimiter"
if (cellOne || cellTwo || cellThree || cellFour) {
    console.log(cellOne, cellTwo, cellThree, cellFour);
}
