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
