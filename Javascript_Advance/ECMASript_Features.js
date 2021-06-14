// let and const -> these are new ways to declare variables

const player = 'Alejandro'; //This is a variable that will never change. It's constant
let experience = 100;
let wizardlLevel = false;

if(experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//With let, any time is between curly brackets, It'll create a new scope.

//The results of this code is: Wizardlevel = false;

const a = function(){
    console.log("a");
}

//function will be const, because they won't change.

const obj = {
    player: 'Enrique',
    experience: '100',
    wizardLevel: false
}

//If we try to change the obj , that would return an error. But, we can change it's attributes. 

//Destructuring

const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

const {player, experience} = obj; // This line is equivalent to line 34 and 35. 
let {wizardLevel} = obj;

//Objects properties
const a = "Alejandro";
const b = true;
const c = {};

const obj = {
    a, b, c

    //equivalent to
    //a: a,
    //b: b,
    //c: c
}

let name = "Enrique"
let age = 21
//Template strings
const greeting = "Hello " + name + "you seem to be doing something!"; //old way

const greetinBest = `Hello ${name} you seem to be ${age} years old`;

//Default Arguments

function greet(name='', age2=30) {
    return `Hello ${name} you seem to be ${age2} years old`
}

//Arrow functions 


function add(a,b) {
    return a + b;  //Function declaration
}

const add = (a,b) => a+b; // Arrow functions