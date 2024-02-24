console.log("hello world")

var myName = 128;
//object (dictionary), use const
const person = {firstName:"John", lastName:"Doe"}
//array
const arr = [1,2,3,5,4]
// Date object:
const date = new Date("2022-03-25"); 

myName %= 3;

console.log(myName)
console.log(person)
console.log(arr)
console.log(date)

//function
function addition(a,b){
    console.log(a+b);
}
const a = 1
const b = 2
addition(a,b)

//objects, properties, methods
const hanson = {feeling: "happy", number: "8", status: "somewhat lazy"}
console.log(hanson)
console.log()

//string methods

let str = "abc";
//length of string
console.log(str.length)
//what character at selected position, starts at 0
console.log(str.charAt(1));
console.log(str.at(1));
console.log(str[1]);
console.log()
//unicode, not ascii
console.log(str.charCodeAt(1));

//slicing
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)

//upper, lower case
let str1 = "hello world"
let str2 = str1.toUpperCase();
let str3 = str1.toLowerCase();
console.log(str2);
console.log(str3);

//concatenate
let text1 = "123";
let text2 = "456";
let text3 = text1.concat(" ", text2);
let text4 = text1 + " " + text2;
console.log(text3);
console.log(text4);
console.log();

//trim (remove whitespaces), trimStart(), trimEnd()
let text5 = "      foobar!      ";
let text6 = text5.trim();
console.log(text6)
console.log();

//padStart() Pad a string with "0" until it reaches the length 4:
let test1 = "5";
let padded1 = test1.padStart(4,"0");
console.log(padded1);
console.log();

// print out 5 then Pad a string with "x" until it reaches the length 4:
let test2 = "5";
let padded2 = test2.padEnd(4,"x");
console.log(padded2);
console.log();

//repeat()
let test3 = "Hello world!";
let result = test3.repeat(2);
console.log(result);
console.log();