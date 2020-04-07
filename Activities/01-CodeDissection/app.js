// DataType: String; Value: "Thomas Smith"
var name = "Donny";
// DataType: Boolean; Value: true
var isTired = true;
// Datatype: Integer; value = 32
var age = 32;
// Datatype: Char; value = T
var initial = "T";
​
if (name === "Bob") {
  console.log("You are a registerd guest");
} else if (name === "Thomas") {
  console.log("Oh look admin is present");
} else {
  console.log("Security alert system shut down");
}
​
console.log("My name is: " + name);
​
// conditional
if (isTired === true) {
  alert("I am tired");
} else {
  console.log("second wind- I love javascript");
}
​
// = is an assignment operator
// === comparitive operator
// == comparitive operator
​
var numberInt = 5;
var numberString = "5";
​
// double equal compares value BUT not datatype
if (numberInt === numberString) {
  console.log("These are the same");
} else {
  console.log("These are not the same");
}