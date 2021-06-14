console.log("Hola");
const array = [1, 2, 3, 4, 5];
const nArray = [];

const newArray = array.forEach((num) => {
    nArray.push( num * 2)
});

console.log(nArray);


//map, filter, reducce

const mapArray = array.map((num) => {
    return num*2;
})