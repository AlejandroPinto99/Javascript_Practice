console.log("hola");

let total = 50;

function addItem(item, subtotal){
total = subtotal;
total = item + subtotal;
console.log(total);
}

console.log(total);
addItem(5, total);
console.log(total);