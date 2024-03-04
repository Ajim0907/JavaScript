// heap and stack memory allocation
// primitive data types takes stack memory 
// non primitive takes heap memory [], {} , () array objects function

let Name = "tony starck";
let name2 = Name
name2 = "alpha starck";
console.log(name2)
console.log(Name);

// stack memory takes a copy and only can change the copy not orignal value

// heap 

user1 = {
    email: "kotwalajim007@gmail.com",
    tel: 909090958
}

user2 = user1
user2.email = "kotwalajim0907@gmail.com"
console.log(user2)
console.log(user1)

// so here user2 has changed the real vlaue of user1