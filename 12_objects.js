// object literals
const mySum = Symbol("my value")
const JsUser = {
    user : "ajim",
    passWord :909987,
    [mySum]: "my value",
    "full name": "ajim kotwal",
    email : "kotwakajim007@gmail.com",
    location: "mumbai",
    lastLogged : "monday",
}

// to access object values
console.log(JsUser.user);  
console.log(JsUser["user"]);  // prefred way 

// in javascript object keys are treat as strings
console.log(JsUser["full name"]);

// to access symbol in object
console.log(JsUser[mySum]);
console.log(typeof mySum);

// making function in the objects
JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello jS user, ${this.user}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// to lock the object use -- freeze
Object.freeze(JsUser)
// after using freeze you cannot change the value in the object
