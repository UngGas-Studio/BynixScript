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
## Example 3: Element Style and Conditional Check
```bynicscript
const element = getElement(".element")
element.design.color = "red"

if element.is_design.color === "red":
    print("color is red")
end:
```
## Example 4: Creating and Managing Elements
```bynixscript
const myElement = createElement("div")
myElement.manageText("Hello World!")
body.addElement(myElement)
```
## Example 5: Accessing and Printing an Element's Text
```bynixscript
const h1 = getElement(".h1")
h1.manageText.get

print(h1)
```
