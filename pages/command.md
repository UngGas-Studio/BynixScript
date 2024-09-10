# Command
BynixScript commands are similar to JavaScript, only simplified and there are some commands that are different from JavaScript.
#### Variable
###### Reassign variable:
```javascript
var name = "myName"

// Translate to
var name = "myName";
```
###### Assign variable:
```javascript
const name = "yourName"

// Translate to
const name = "yourName";
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
   print("Bigger than ten")
} else if (number < 10) {
   print("Smaller than ten")
} else {
   print("Is ten")
}
```
