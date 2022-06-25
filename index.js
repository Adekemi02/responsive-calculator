const output = document.querySelector(".output")
const result = document.querySelector(".result")
const keys = document.querySelectorAll(".button")

keys.forEach(key => {
  key.addEventListener("click", calculate)
});

function calculate(){
  let buttonInput = this.innerText;
  if(buttonInput==="AC"){
    output.innerText = "";
    result.innerText = "0";
    return;
  }

  if (buttonInput==="DEL"){
    output.textContent = output.textContent.substr(0,output.textContent.length-1);
    return;
  }

  if (buttonInput==="="){
    result.innerText = eval(output.innerText);
    return;
  }

  else {
    output.textContent += buttonInput;
    return;
  }
}

