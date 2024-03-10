// de-structer objects 

const Course = {
    courseName : "js in hindi",
    coursePrice : 999,
    courseDuration :"9hrs",
    courseInstructer: "hitesh Sir"
}

const {courseInstructer:Name} = Course

console.log(Name);
