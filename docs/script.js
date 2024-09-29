const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Find the associated <code> element
      const codeBlock = document.getElementById("code-block");
      const textToCopy = codeBlock.innerText;
      const exampleBtn = document.querySelector(".example-btn");

      // Copy the code text to clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Change button text after copying
        this.textContent = 'Copied!';
        exampleBtn.style.left = "31%";
        setTimeout(() => {
          this.textContent = 'Copy';
          exampleBtn.style.left = "26.8%";
        }, 2000); // Reset button text after 2 seconds
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  });
  
  let example = 1;
  document.querySelector('.example-btn').addEventListener('click', function() {
    const codeBlock = document.getElementById('code-block');
    const buttonText = document.querySelector('.example-btn');
    if (example === 2) {
      codeBlock.innerHTML = `
var myAge = contentAge(14)
var myName = "Aliez"
var yourAge = contentAge(14)
var yourName = "Dave"
var difference

func contentAge(age):
  if age == null || age == 0:
    const random = rand(roundUp() * 10) * 5
    const a = roundUp(random)
    return a
  else:
    return age
  end:
end:

func check(order, year):
  if order === "age difference":
    if myAge < 1 || yourAge < 1 || typeof myAge === "string" || typeof yourAge === "string":
      print("Invalid age")
    else:
      if myAge < yourAge:
        difference = yourAge - myAge
        print(yourName + " is older than " + myName + ", they are " + difference + " years apart")
      elif myAge === yourAge:
        print(myName + " and " + yourName + " are the same age")
      else:
        difference = myAge - yourAge
        print(myName + " is younger than " + yourName + ", they are " + difference + " years apart")
      end:
    end:
  elif order === "year of birth":
    var myBirthYear = year - myAge
    var yourBirthYear = year - yourAge
    print(myName + " was born in " + myBirthYear + " and " + yourName + " was born in " + yourBirthYear)
  elif order === "stop":
    print("Sorry, the process cannot be continued. Because the process has stopped")
  else:
    print("Sorry, something went wrong")
  end:
end:

check("year of birth", 2024)
    `;
    example = 1;
    buttonText.innerHTML = "example 2 >";
    Prism.highlightAll(codeBlock);
    } else {
      codeBlock.innerHTML = `
&ltscript src="https://cdn.jsdelivr.net/gh/UngGasStudio/BynixScript@0.0.4/lib/index.js"&gt&lt/script&gt
&ltbynix&gt
  var myAge = contentAge(14)
  var myName = "Aliez"
  var yourAge = contentAge(14)
  var yourName = "Dave"
  var difference

  func contentAge(age):
    if age == null || age == 0:
      const random = rand(roundUp() * 10) * 5
      const a = roundUp(random)
      return a
    else:
      return age
    end:
  end:

  func check(order, year):
    if order === "age difference":
      if myAge < 1 || yourAge < 1 || typeof myAge === "string" || typeof yourAge === "string":
        print("Invalid age")
      else:
        if myAge < yourAge:
          difference = yourAge - myAge
          print(yourName + " is older than " + myName + ", they are " + difference + " years apart")
        elif myAge === yourAge:
          print(myName + " and " + yourName + " are the same age")
        else:
          difference = myAge - yourAge
          print(myName + " is younger than " + yourName + ", they are " + difference + " years apart")
        end:
      end:
    elif order === "year of birth":
      var myBirthYear = year - myAge
      var yourBirthYear = year - yourAge
      print(myName + " was born in " + myBirthYear + " and " + yourName + " was born in " + yourBirthYear)
    elif order === "stop":
      print("Sorry, the process cannot be continued. Because the process has stopped")
    else:
      print("Sorry, something went wrong")
    end:
  end:

  check("year of birth", 2024)
&lt/bynix&gt
      `;
      example = 2;
      buttonText.innerHTML = "< example 1";
      Prism.highlightAll(codeBlock);
    }
});
