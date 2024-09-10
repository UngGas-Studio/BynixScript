# Command
BynixScript commands are similar to JavaScript, only simplified and there are some commands that are different from JavaScript.
#### Variable
###### Reassign variable:
```javascript
var name = "myName"
// var name = "myName";
```
###### Assign variable:
```javascript
const name = "yourName"
// const name = "yourName";
```
#### Condition
```javascript
if number < 10:
   print("Bigger than ten")
elif number < 10:
   print("Smaller than ten")
else:
   print("Is ten")

// Translate to
if (number > 10) {
   console.log("Bigger than ten")
} else if (number < 10) {
   console.log("Smaller than ten")
} else {
   console.log("Is ten")
}
```
#### Interaction
###### User interaction:
```javascript
touch("Hello World!")
// alert("Hello World")

ask("What's your name?")
// prompt("What's your name?");

confirm("Are you sure you want to exit?")
// confirm("Are you sure you want to exit?");
```
###### Logging/Debugging:
```javascript
print("Hello World!")
// console.log("Hello World!");
```
#### DOM Manipulation
```javascript
const myElement = getElement("#myElement")
// const myElement = document.querySelector("#myElement");

const myElement = getAllElement(".myElement")
// const myElement = document.querySelectorAll(".myElement");

const myDiv = createElement("div")
// const myDiv = createElement("div");

body.addElement(myDiv)
// document.body.appendChild(myDiv);

myElement.text "Hello World!"
// myElement.textContent = "Hello World!";

const text = myElement.text
// const text = myElement.textContent;

myElement.manageImage("fas fa-camera")
// manageImage(myElement, "fas fa-camera");
```
