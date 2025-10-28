let fname = "Jesus";
let surname = "Christ";

console.log(`Hello....${fname} ${surname}`);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

//console.log(percentage);

function favAnimal(animal) {
    return `${animal} is my favourite animal`;
}

const animal = favAnimal('Monkey');
//console.log(animal);

// Functions
function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

let answer = add7(10);
console.log(answer);

let product = multiply(3, 2);
console.log(product);

function capitalize(word) {
    let lower = word.toLowerCase();
    let capitalizedWord = lower.charAt(0).toUpperCase() + lower.slice(1);
    return capitalizedWord;
}
console.log(capitalize("bIngO"));

function lastLetter(word) {
    return word.slice(-1);
}
console.log(lastLetter("apple"));