// singleton objects

//const tinderUser = new object ()  --> singleton object
const snapUser = {} // non-singleton object

snapUser.id = 123
snapUser.Email = "userName@gmail.com"
snapUser.loggedIN = false
snapUser.Name = "john D"

console.log(snapUser);

// nested objects 

const tinderUser = {
    Email : "tinderUser@gmail.com",
    id : 123,
    isLoggedIn : false,
    fullName:{
        userName :{
            firstName: "ajim",
            lastName: "kotwal"
         }
    }
}
console.log(tinderUser.fullName.userName.firstName);

// to merge objects

obj1 = {1 : "A", 2: "B", 3: "C"}
obj2 = {4: "D", 5:"E", 6: "F"}

//obj3 = Object.assign({}, obj1, obj2)

//console.log(obj3);

// best way to merge object --> spread operator
obj3 = {...obj1, ...obj2}
console.log(obj3);

;


