# Example BynixScript
BynixScript provides examples for those of you who want to learn BynixScript.
**1. Condition statements**:
```javascript
var myAge = 12
if myAge.is_type === "number":
  if myAge > 18 || myAge === 18:
    print("Adult")
  else:
    print("Child")
  end
else:
  print("Value must be a number.")
end
```
**2. Function Declaration**:
```javascript
func greeting(message):
  print(message)
end
greeting("Hey, There!")
```
**3. Loop statements**:
```javascript
for i=0 to 10:
  print("Loop to " + i)
  if i > 5:
    print("Loop stops")
    break
  end
end
```
**4. Error Handling**:
```javascript
handle:
  print("My name is " + name)
recovery (err):
  if err.is_error === "type":
    print("TypeError: " + err.message)
  elif err.is_error === "reference":
    print("ReferenceError: " + err.message)
  end
end
```
**5. Flow control**:
```javascript
const choice = 0
match choice:
  case 1:
    print("Just one!")
    break
  case 2:
    print("Just two!")
    break
  default:
    print("No choice.")
end
```