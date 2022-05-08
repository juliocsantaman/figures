let result = false;
do {
  let input = prompt("What is the result to add 2 + 2: ");
  result = parseFloat(input) === 4;
  if(result) {
    alert("Felicitaciones, tu resultado es correcto.");
  }
  
  if(!result) {
    alert("Lo sentimos, tu resultado es incorrecto.");
  }
  
} while (!result);
