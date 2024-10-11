# What is BynixScript?
Simply put, BynixScript is a programming language created by UngGas Studio. For more details, you can see the documentation.

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Website](https://img.shields.io/badge/official-website-blue)](https://unggasstudio.github.io/bynixscript/)
[![Documentation](https://img.shields.io/badge/Documentation-8A2BE2)](docs/markdown/documentation.md)
[![Youtube](https://img.shields.io/badge/YouTube-Channel-orange)](https://youtube.com/@unggas-studio?si=rwzB7AXjr-jCqg_J)
[![Package](https://img.shields.io/npm/dw/bynixscript)](https://www.npmjs.com/package/bynixscript?activeTab=readme)

## Installation
### Using NPM <a name="using-npm-installation"></a>
```
npm install -g bynixscript
```
### Using CDN <a name="using-cdn-installation"></a>
```html
<script src="https://cdn.jsdelivr.net/npm/bynixscript"></script>
```
## Get Started
### Using NPM <a name="using-npm-get-started"></a>
Run a BynixScript file:
```
bsr path/to/script.bs
```
Compile a BynixScript file:
```
bst path/to/script.bs
```
To print a BynixScript file to console:
```
bsp path/to/script.bs
```
To delete a file
```
bsd path/to/script.bs
```
### Using CDN <a name="using-cdn-get-started"></a>
```html
<bynix>
  const message = "Hello from BynixScript!"
  print(message)
</bynix>
```
## Extension
If you want to change your experience use BynixScript to good experience. You can use the below extensions for VSCode:
- [Download](https://github.com/UngGasStudio/BynixScript-Extension)
## Example
```javascript
class Person:
  constructor(name, age):
    this.name = name
    this.age = age
  end
  
  speak():
    print(`My name is ${this.name} and I'm still ${this.age} years ago`)
  end
end

class Introduction extends Person:
  constructor(name, age, hobby):
    super(name, age)
    this.hobby = hobby
  end
  
  speak():
    print(`My name is ${this.name}, I'm still ${this.age} years ago and I like ${this.hobby}`)
  end
end

const person = new Introduction("Clay", 14, "Coding")
person.speak()
```
BynixScript code examples are not limited to that, BynixScript still has other examples that you can see on the [example](docs/markdown/example.md) page
## Table of content
- [What Is BynixScript](#What-Is-BynixScript)
  - [Installation](#Installation)
      - [Using NPM](#using-npm-installation)
      - [Using CDN](#using-cdn-installation)
  - [Get Started](#Get-Started)
      - [Using NPM](#using-npm-get-started)
      - [Using CDN](#using-cdn-get-started)
  - [Extension](#Extension)
  - [Example](#Example)
  - [Table of content](#Table-of-content)
  - [Function](#Function)
  - [Changelog](#Changelog)
  - [Roadmap](#Roadmap)
## Function
BynixScript provides many functions, such as for-to:
```javascript
for i=0 to 5:
  print("Loop to " + i)
end
```
You can see all the functions like condition, flow control, exception, etc. in the [function list](docs/markdown/function.md).
## Changelog
You can see all the changes made in BynixScript itself, as well as its Extensions in VSCode.
- [BynixScript](https://github.com/UngGas-Studio/BynixScript/releases)
- [Extension](https://github.com/UngGas-Studio/BynixScript-Extension/releases)
## Roadmap
So that you know what the purpose of this programming language is in the future. You can see the [roadmap](docs/markdown/roadmap.md)