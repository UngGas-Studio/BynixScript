# List of functions
BynixScript functions are similar to JavaScript, only simplified and there are some commands that are different from JavaScript.
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
end

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
```
```javascript
ask("What's your name?")
// prompt("What's your name?");
```
```javascript
confirm("Are you sure you want to exit?")
// confirm("Are you sure you want to exit?");
```
###### Logging/Debugging:
```javascript
print("Hello World!")
// console.log("Hello World!");
```
```javascript
print.err("Validation error")
// console.error("Validation error")
```
```javascript
print.warn("Warning alert")
// console.warn("Warning alert")
```
```javascript
print.info("Information")
// console.info("Information")
```
```javascript
print.debug("Debugging")
// console.debug("Debugging")
```
```javascript
print.trace("Trace print")
// console.trace("Trace print")
```
```javascript
print.assert("Assert print")
// console.assert("Assert print")
```
#### DOM Manipulation
```javascript
const myElement = getElement("#myElement")
// const myElement = document.querySelector("#myElement");
```
```javascript
const myElement = getAllElement(".myElement")
// const myElement = document.querySelectorAll(".myElement");
```
```javascript
const myDiv = createElement("div")
// const myDiv = createElement("div");
```
```javascript
body.addElement(myDiv)
// document.body.appendChild(myDiv);
```
```javascript
myElement.text = "Hello World!"
// myElement.textContent = "Hello World!";
```
```javascript
const text = myElement.text
// const text = myElement.textContent;
```
```javascript
myElement.image = "fas fa-camera"
// image(myElement, "fas fa-camera");
```
```javascript
myElement.design = "color: green;"
// myElement.style = "color: green;";
```
```javascript
myElement.design.color = "green"
// myElement.design.color = "green";
```
```javascript
if myText.is_value === "There!")
   print("myText value is 'There!'")
end

// Translate to
if (myText.value === "There!") {
   console.log("myText value is 'There!'");
}
```
```javascript
if myText.is_includes("World!"):
   print("Included: 'World!'")
end

// Translate to
if (myText.includes("World!") {
   console.log("Included: 'World!'");
}
```
```javascript
if pattern.is_matched(/clady/g):
   print("Matched: 'clady'")
end

// Translate to
if (pattern.match(/clady/g)) {
   console.log("Matched: 'clady'")
}
```
```javascript
if myElement.is_design.color === "green"
   print("myElement color is 'green'")
end

// Translate to
if (myElement.style.color === "green") {
   console.log("myElement color is 'green'");
}
```
```javascript
if myName.is_start("John"):
  print("My name starts with 'John'")
end

// Translate to
if (myName.startsWith("John")) {
  console.log("My name starts with 'John'");
}
```
```javascript
if myName.is_end("Stones"):
  print("My name ends with 'Stones'")
end

// Translate to
if (myName.endsWith("Stones")) {
  console.log("My name ends with 'Stones'");
}
```
```javascript
if myElement.is_action === "checked":
   print("Checked!")
end

// Translate to
if (myElement.checked) {
   console.log("Checked");
}
```
```javascript
if myElement.is_have === "required":
   print("Have required!")
end

// Translate to
if (myElement.required) {
   console.log("Have required")
}
```
- is_action
   - checked
   - selected
   - open
- is_have
   - required
   - readonly
   - autofocus
   - disabled
   - multiple
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
end

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
end:5000

// Translate to
setTimeout(function() {
  console.log("Delay in 5 seconds");
}, 5000);

repeat:
  print("Repeating every 2 seconds")
end:2000

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
// console.log(Math.floor(4, 7));

print(maxOf(10, 20, 30))
// console.log(Math.max(10, 20, 30));

print(minOf(10, 20, 30))
// console.log(Math.min(10, 20, 30));
```
#### Regular Expressions
```javascript
myText.change("World!", "There!")
// myText.replace("World", "There!");
```
#### Operators
##### Arithmetic:
``+``: summation

``-``: subtraction

``*``: multiplication

``/``: distribution

``%``: modulus

``++``: increments

``--``: decrement
##### Comparison
``=``: assignment

``==``: equality

``===``: strict equality
##### Logic
``&&``: And

``||``: Or

``!``: Not
#### Module Management
```javascript
const example = require('example')
// const example = require('example')
```
#### Type Conversion Functions
```javascript
const a = num(b)
// const a = Number(b);
```
```javascript
const c = str(d)
// const c = String(d);
```
```javascript
const e = int(f)
// const e = parseInt(f);
```
```javascript
const g = float(h)
// const g = parseFloat(h);
```
#### Object-Oriented Programming
```javascript
super(name)
// super(name)
```
```javascript
class className:
  # your code here
end

// Translate to
class className {
  // your code here
}
```
##### Inheritance
```javascript
class car1 extends className:
  # your code here
end

// Translate to
class car1 extends className {
  // your code here
}
```
##### Object Initialization
```javascript
constructor(name):
  # code here
end

// Translate to
constructor(name) {
  // code here
}
```
##### Object Creation
```javascript
const Dog = new className("Buddy")
// class dog = new className("Buddy");
```
#### Type Checking
```javascript
if variable.is_type === "number":
  print("Type: number")
end

// Translate to
if (typeof variable === "number") {
  console.log("Type: number");
}

print(variable.type)
// console.log(typeof variable)
```
- is_type value
  - number
  - string
  - boolean
  - function
  - symbol
  - bigint
  - undefined
  - object
#### Functional Programming
```javascript
const numbers = [1, 2, 3, 4, 5]
const result = numbers.map(num):
  return num * 2
end

// Translate to
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(function(num) {
  return num * 2;
});

const ages = [12, 18, 20, 10, 25]
const result = ages.filter(age):
  return age >= 18
end

// Translate to
const ages = [12, 18, 20, 10, 25];
const result = ages.filter(function(age) {
  return age >= 18;
});

const numbers = [1, 2, 3, 4]
const sum = numbers.reduce(total, num):
  return total + num
end:0

// Translate to
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);
```
#### Error Handling
```javascript
handle:
   null.f
recovery (err):
   print(err.message)
final:
   print("Final block executed")
end
```
```javascript
if err.is_error === "type":
   print("TypeError:", err.message)
end

// Translate to
if (err instanceof TypeError) {
   console.log("TypeError:", err.message)
}
```
- is_error value
  - type
  - reference
  - syntax
  - range
```javascript
throw new Err("Error message")
// throw new Error("Error Message");
```
```javascript
throw new URIErr("URIError message")
// throw new URIError("URIError message
```
```javascript
throw new TypeErr("TypeError message")
// throw new TypeError("TypeError message")
```
