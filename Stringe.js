console.log("Testing...")

let stringValue = "";
console.log(stringValue)
let sentence = "Bangladesh is a highly populated country"
console.log(sentence)
let newUser = "Rakib"
console.log("Length:", newUser.length , sentence.length)
 
let greting = "Good mornig"
let user ="Rakib"
let newgreting = greting.concat(user)
newgreting = greting.concat("   Abdullah")
console.log("Concat:", newgreting, user)

// SubString - Take a porton  of a string 

let newCountry = sentence.substring(0, 9)
console.log("substring:", newCountry)

// Slice - Take a porton  of a string (It's take negative index as well)

let Slice = user.slice(-3)
console.log("Slice:", Slice)

//  Searce Index
// use to searce imdex using word / letter

let newSentence = "Rakib always a good boy"
let searceWord = newSentence.indexOf("good")
console.log("Searce Index:", searceWord)

// use to find a specific lettet using index
let searceLetter = newSentence.charAt(10);
console.log("CartAt :", searceLetter)

// to searce specific word from a string
console.log(newSentence.includes("Rakib")); //return true of false

//Case Changing

let lowerCase = newSentence.toLowerCase();
console.log("LowerCase :", lowerCase)

let upperCase = newSentence.toLocaleUpperCase();
console.log("UpperCase :", upperCase)

// remove space from strings
let cleanOutpu = "   Hello, My name is alex.....";
console.log(cleanOutpu.trim());

// Find if the word "Enjoy" present in the new given sentence. 

let natureWords = "Hello, i always love to enjoy the beauty of nature";

let searceWords ="EnJoy"

if(natureWords.toUpperCase().includes(searceWords.toLocaleUpperCase())) {
    console.log(searceWords, "Word is present in the sentence")
} else {
    console.log(searceWords, "word is absent in the senrence")
}