let apples: Number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["Green", "red", "blue"];
let myNym: Number[] = [111, 2, 44.3, 42];
let truths: boolean[] = [11 === 11, true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// whwn to use annotations
// 1) Function  that returns the "any" value
const json = '{"x":"10","y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.x); // {x:10,y:20}

// 2) when we declare a variable on one line
// and initialize it later
let words = ["red", "pink", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable Whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numberAboveZero = numbers[i];
  }
}
