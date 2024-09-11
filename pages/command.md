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
end:

// Translate to
if (number > 10) {
   console.log("Bigger than ten");
} else if (number < 10) {
   console.log("Smaller than ten");
} else {
   console.log("Is ten");
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

myElement.text = "Hello World!"
// myElement.textContent = "Hello World!";

const text = myElement.text
// const text = myElement.textContent;

myElement.image = "fas fa-camera"
// image(myElement, "fas fa-camera");

myElement.design = "color: green;"
// myElement.style = "color: green;";

myElement.design.color = "green"
// myElement.design.color = "green";
```
```javascript
if myText.is_value === "There!")
   print("myText value is 'There!'")
end:

// Translate to
if (myText.value === "There!") {
   console.log("myText value is 'There!');
}

if myElement.is_style.color === "green")
   print("myElement color is 'green'")
end:

// Translate to
if (myElement.is_design.color === "green") {
   console.log("myElement color is 'green'");
}
```
#### Control Flow
```javascript
match choice:
   case choice1:
     print("Choice 1")
     break:
   case choice2:
     print("Choice 2")
     break:
   default:
     print("No choice")
end:

// Translate to
switch (choice) {
   case choice1:
     console.log("Choice 1")
     break;
   case choice2:
     console.log("Choice 2")
     break;
   default:
     console.log("No choice")
}
```
#### Asynchronous Programming
```javascript
delay:
  print("Delay in 5 seconds")
end:5000:

// Translate to
setTimeout(function() {
  console.log("Delay in 5 seconds");
}, 5000);

repeat:
  print("Repeating every 2 seconds")
end:2000:

// Translate to
setInterval(function() {
  console.log("Repeating every 2 seconds");
}, 2000);
```
#### Math Operations
```javascript
print(rand())
// console.log(Math.random());

print(roundUp(4.2))
// console.log(Math.ceil(4.2));

print(roundDown(4, 7))
// console.log(Math.fllor(4, 7));

print(maxOf(10, 20, 30))
// console.log(Math.max(10, 20, 30));

print(minOf(10, 20, 30))
// console.log(Math.min(10, 20, 30));
```
#### Regular Expressions
```javascript
myText.change("World!",
