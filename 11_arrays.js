// declaring array
myAry = [0,1,2,3,4,5]

console.log(myAry[1]); //accessing value by index number

// array methods
myAry.push(6)
console.log(myAry);

// remove the last value from the array
myAry.pop()
console.log(myAry);

// to store value in the start-- 0 index
myAry.unshift(7)
myAry.shift()
console.log(myAry);

//Adds all the elements of an array into string
newAry = myAry.join()
console.log(newAry);

//slice and splice
nAry = [0,1,2,3,4,5]
console.log(nAry.slice(1,3));
console.log(nAry.splice(1,3)); // splice method changes the orignal values [ 0, 4, 5 ]
console.log(nAry);

//concatination of arrays 
my_Heros = ["thor", "batman", "spiderman", "hulk"]
your_Heros = ["shaktiman","junior baba", "samurai",]

// this method will create a another array in exicting array
my_Heros.push(your_Heros);
console.log(my_Heros);
console.log(my_Heros[4][2]);

// to cancatinate arrays
allHerors = my_Heros.concat(your_Heros)
console.log(allHerors);

//spread method 
const all_new_heros = [...my_Heros,...your_Heros]
console.log(all_new_heros);

//flat method-- Returns a new array with all sub-array elements
flatAry = [0,1,2,3,[4,5],6,7,[8,9],10]
newFlatAry = flatAry.flat(Infinity)
console.log(newFlatAry);

// to convert into array 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

