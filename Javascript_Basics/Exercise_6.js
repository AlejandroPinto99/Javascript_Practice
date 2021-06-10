var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log("Removing Banana...");
array.shift();
console.log(array);

console.log("Sorting items...");
array.sort();
console.log("Sorted!!" + array);

console.log("Adding Kiwi at the end...");
array.push("Kiwi");
console.log("Added! " + array);

console.log("Removing Apples....");
array.shift();
console.log("Removed! "  + array);

console.log("Reversing the array...");
array.reverse();
console.log("Reversed! " + array);

var array2 = ["Banana", ["Apples", ["Oranges", "Watermelon"], "Blueberries"]];
console.log("Accesing to oranges..." );
console.log("Accesed! " + array2[1][1]);
