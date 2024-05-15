"use strict"



let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


function findDate(someValue){
    if(someValue.CourseId === "PROG200"){
        return true
    }else{
        return false;
    }
}
let couseStart = courses.find(findDate)

console.log(couseStart.StartDate)


function findTitle(someValue){
    if(someValue.CourseId ==="PROJ500"){
        return true;
    }else{
        return false;
    }

}

let titleCourse = courses.find(findTitle)

console.log(titleCourse.Title)


let filteredCourses = courses.filter((course) => {
    if (course.Fee <= 50 ) {
        return true;
    }
    return false
})

console.log(filteredCourses);

filteredCourses.forEach((course) =>{
 console.log(`${course.Title} is 50 or less`)
})

let classroom1Courses = courses.filter((course) =>{

    if(course.Location === "Classroom 1"){
        return true;
    }

    return false;
})

classroom1Courses.forEach(function (course) {
    console.log(`${course.Title} is in classroom 1`)

})




let someArray = [

    {name: "eric", kids: ["sam", "pam", "cam"]},
    {name: "Chanda", kids: ["jim", "kim", "tim"]},

]

someArray.forEach((someValue) => {

    console.log(`${someValue.name} has these kids:`)

    someValue.kids.forEach((value) => {
        console.log(value);
    })

    console.log("--------------------")

})