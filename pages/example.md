# Example BynixScript

## Example 1: Simple Conditional Statement
```bynixscript
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
This code will check on "num", whether its value is greater or less.
## Example 2: Function with Input Check
```bynixscript
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
This code will create a "send()" function that contains a condition to check whether the value of "input" is "hello" or not.
## Example 3: Element Style and Conditional Check
```bynicscript
const element = getElement(".element")
element.design.color = "red"

if element.is_design.color === "red":
    print("color is red")
end:
```
### Explanation:
This code will take an element with the class "element", then change the text color on that element to red. After that the code will check whether the text color is "red" or not.
## Example 4: Creating and Managing Elements
```bynixscript
const myElement = createElement("div")
myElement.manageText("Hello World!")
body.addElement(myElement)
```
### Explanation:
This code will create a div element and add the text "Hello World!" to it. After that the div element is inserted into the body.
## Example 5: Accessing and Printing an Element's Text
```bynixscript
const h1 = getElement(".h1")
h1.manageText.get

print(h1)
```
### Explanation:
This code simply takes the value of the element with the class "h1" and prints the contents of that element.
