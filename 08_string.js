// strings are used to store and manipulate text 
// strings can be created the following syntax

let name = "JavaScript"
console.log(name);

// we can access character 
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])

// to find the length of string
console.log(name.length);


// string interpolation 
Name = "ajim";
repo = 5
 
console.log(Name + " total repo " + repo ) //not prefered

console.log(`hello my name is ${Name} and my total repo is ${repo} `);

// strings properties and method

lan = "javascript "
b = ""
console.log(lan.toUpperCase()); //it is a function
console.log(lan.toLowerCase());//it is a function
console.log(lan.length); //it is a property
console.log(lan.slice(1, 5)); // its is slice function
console.log(lan.slice(1,)); // 1 to end slicing

// to concat
console.log(lan.concat(b, "java"));
