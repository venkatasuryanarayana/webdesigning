// var student = {
//   id:535,
//   name:"surya",
//   branch:"cse"
// }
// document.writeln(student.id+" "+student.name+" "+student.branch);

// var student = new Object();
// student.id=560;
// student.name="venkat";
// student.branch="mech";
// console.log(student.id+" "+student.name+" "+student.branch);


function student(id,name,branch) {
this.id=id;
this.name=name;
this.branch=branch;
}

var s = new student(540,"srikanth","EEE");
document.writeln(s);
