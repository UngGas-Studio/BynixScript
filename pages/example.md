# Example BynixScript

## Example 1: Simple Conditional Statement
```javascript
var num = 10

if num > 10:
    print("bigger than ten")
elif num < 10:
    print("smaller than ten")
else:
    print("is ten")
end:
```
### Explanation:
This code checks the value of ``num``. If ``num`` is greater than 10, it prints "bigger than ten." If ``num`` is less than 10, it prints "smaller than ten." Otherwise, it prints "is ten."
```javascript
const input = getElement(".input")

function send():
    if input.is_value === "hello":
        print("Input is 'hello'")
    else:
        print("Input is not 'hello'")
    end:
end:
```
### Explanation:
This code defines a ``send()`` function that checks the value of the ``input`` element. If the value is "hello," it prints "Input is 'hello'." Otherwise, it prints "Input is not 'hello'."
## Example 3: Element Style and Conditional Check
```javascript
const element = getElement(".element")
element.design.color = "red"

if element.is_design.color === "red":
    print("color is red")
end:
```
### Explanation:
This code selects an element with the class ``.element`` and changes its text color to red. It then checks whether the color of the element is red. If the condition is true, it prints "color is red."
## Example 4: Creating and Managing Elements
```javascript
const myElement = createElement("div")
myElement.text = "Hello World!"
body.addElement(myElement)
```
### Explanation:
This code creates a new ``div`` element, adds the text "Hello World!" to it, and then inserts the ``div`` element into the ``body`` of the document.
## Example 5: Accessing and Printing an Element's Text
```javascript
for i=0 to 10:
   print("Loop to " + i)
end:
```
### Explanation:
This code will create a loop from 0 to 10 with ``i`` as index.
