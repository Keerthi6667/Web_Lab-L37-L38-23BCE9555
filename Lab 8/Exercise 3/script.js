// ES6 Class
class Course{
    constructor(courseName, instructor){
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse(){
        return `Course: ${this.courseName} <br> Instructor: ${this.instructor}`;
    }
}

function enroll(){

    let cname = document.getElementById("course").value;
    let inst = document.getElementById("instructor").value;
    let seats = Number(document.getElementById("seats").value);

    let course1 = new Course(cname, inst);

    let enrollCourse = new Promise((resolve,reject)=>{
        if(seats > 0)
            resolve("Enrollment Successful ");
        else
            reject("Course Full ❌");
    });

    enrollCourse
    .then(msg=>{
        document.getElementById("result").innerHTML =
        `${course1.displayCourse()} <br><br>
         <span class="success">${msg}</span>`;
    })
    .catch(err=>{
        document.getElementById("result").innerHTML =
        `${course1.displayCourse()} <br><br>
         <span class="fail">${err}</span>`;
    });

}