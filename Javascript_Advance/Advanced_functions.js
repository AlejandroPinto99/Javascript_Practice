first =() => {
    const greet = 'Hi'
    const second = () => {
        alert(greet)
    }

    return second; 
}

const newFunct = first();
newFunct();

//Closures - a function ran, the function executres.
//It's never going to execute again.
//BUT is going to remember that the are references to those
// variable. So the child scope always has access to the paren scope.


//Curring - process to convert a function that takes many argumentos. 
//To one that takes on argument at a time.

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => b => a*b;
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//avoiding side effects, functional purity.