// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


describe("when evenlyDivisible is called"); => {

  it("returns '15 is divisble by three when called with 15'", () => {
    //arrange
    const argument = 15
    //act
    const actualDivisable = evenlyDivisible(argument);
    //assert
    expect(actualDivisable).toequal("15 is divisable by three")
  });
//Expected output: "15 is divisible by three"

  it("returns '0 is divisble by three' when called with 0", () => {
    //arrange
    const argument = 0
    //act
    const actualDivisable = evenlyDivisible(argument);
    //assert
    expect(actualDivisable).toequal("0 is divisble by three");
  });
// Expected output: "0 is divisible by three"

  it("returns '-7 is not divisable by 3' when called with -7", () => {
    //arrange
    const argument = -7
    //act
    const actualDivisable = evenlyDivisible(argument);
    //assert
    expect(actualDivisable).toequal("-7 is divisable by three");
  });

// Expected output: "-7 is not divisble by three"
// b) Create the function that makes the test pass.
var num1 = 15
var num2 = 0
var num3 = -7


if(num1 % 2) {
  return ("15 is divisble by 3")
}
else if (num2 % 2) {
  return("0 is divisible by 3")
}
else if (num3 % 2) {
  return ("-7 is not divisable by 3")

}






// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//output: retrun the variable of strings in the array with all capitalized letters

// a) Create a test with expect statements for each of the variables provided.
const toCapitol = str => {
  const words = str.split(" ")
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.


console.log(toCapitol(randomNoun1));
console.log(toCapitol(randomNouns2));
//yarn jest

// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
const sorting = str => {
  const numbers = str.split(" ")
  returns sortedNumbers.sort(1)
}


var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray1 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]





// b) Create the function that makes the test pass.
//running yarn jest. Test still failing on 21st line.

console.log(mixedDataArray1.slice(1,3,5,6,7));
console.log(mixedDataArray);

// // --------------------4) Create a function that takes in a string and logs the index of the first vowel.
//
// // a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2
const firstVowel = str1 => {
return firstVowel.slice(0);
}

// b) Create the function that makes the test pass
console.log(vowelTester1.slice(1));
console.log(vowelTester2.slice(0));
console.log(vowelTester3.slice(2));

//console log logging the index of the first vowel.
//When testing I get an error
