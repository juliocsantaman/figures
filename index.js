// First step: Define formules.
/*
  Square
  Perimeter: Side + Side + Side + Side or Side *4.
  Area: Side * Side.
*/

/*
  Triangle
  Perimeter: Side + Side + Side.
  Area: Base * Height / 2.
*/

/*
  Circle
  Perimeter: PI * diameter.
  Area: PI * (Radio * Radio).
*/

// Second step: Implement formules in JavaScript.
// Third step: Create functions.

// Square.
function getSquarePerimeter(side) {
  return side * 4;
}

function getSquareArea(side) {
  return side * side;
}

// Triangle.
function getTrianglePerimeter(side1, side2, side3) {
  return parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
}

function getTriangleArea(base, height) {
  return (parseFloat(base) * parseFloat(height)) / 2;
}

// Circle.
function getCirclePerimeter(radio) {
  return Math.PI * (radio*2);
}

function getCircleArea(radio) {
  return Math.PI * (radio * radio);
}

// Fourth step: Integrate JS with HTML.

// Square.
function calculateSquarePerimeter() {
  const squareInput = document.getElementById('squareInput');
  const value = squareInput.value;
  const perimeter = getSquarePerimeter(value);
  const squareResult = document.getElementById('squareResult');
  squareResult.innerHTML = `<strong>The perimeter is: ${perimeter}</strong>`;
}

function calculateSquareArea() {
  const squareInput = document.getElementById('squareInput');
  const value = squareInput.value;
  const area = getSquareArea(value);
  const squareResult = document.getElementById('squareResult');
  squareResult.innerHTML = `<strong>The area is: ${area}</strong>`;
}

// Triangle.
function calculateTrianglePerimeter() {
  const triangleSide1 = document.getElementById('triangleSide1').value;
  const triangleSide2 = document.getElementById('triangleSide2').value;
  const triangleBase = document.getElementById('triangleBase').value;
  //const triangleHeight = document.getElementById('triangleHeight').value;

  const perimeter = getTrianglePerimeter(triangleSide1, triangleSide2, triangleBase);
  const triangleResult = document.getElementById('triangleResult');
  triangleResult.innerHTML = `<strong>The perimeter is: ${perimeter}</strong>`;
}

function calculateTriangleArea() {
  const triangleBase = document.getElementById('triangleBase').value;
  const triangleHeight = document.getElementById('triangleHeight').value;
  const area = getTriangleArea(triangleBase, triangleHeight);
  const triangleResult = document.getElementById('triangleResult');
  triangleResult.innerHTML = `<strong>The area is: ${area}</strong>`;
}

// Circle.
function calculateCirclePerimeter() {
  const circleRadio = document.getElementById('circleRadio').value;
  const perimeter = getCirclePerimeter(circleRadio);
  const circleleResult = document.getElementById('circleleResult');
  circleleResult.innerHTML = `<strong>The perimeter is: ${perimeter}</strong>`;
}

function calculateCircleArea() {
  const circleRadio = document.getElementById('circleRadio').value;
  const area = getCircleArea(circleRadio);
  const circleleResult = document.getElementById('circleleResult');
  circleleResult.innerHTML = `<strong>The area is: ${area}</strong>`;
}
