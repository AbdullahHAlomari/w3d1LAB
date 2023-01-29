// interface Student{
//     id: number;
//     names: string;
//     level: string;
//     isSenior: boolean;
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var school = [
    { id: 1, name: "Abdullah", level: "Bachelor", isSenior: true },
    { id: 2, name: "Khaled", level: "Student", isSenior: false },
    { id: 3, name: "Ahmed", level: "Diploma", isSenior: true },
    { id: 4, name: "Haitham", specialty: "Math", courseNum: 101 },
    { id: 5, name: "Masha", specialty: "English", courseNum: 201 },
    { id: 6, name: "Lamia", specialty: "Science", courseNum: 301 }
];
//   Third: Create functionand print student data
//   function printStudentData(school: Student[]) {
//     school.forEach(student => {
//       console.log(`Id: ${student.id}`);
//       console.log(`Name: ${student.name}`);
//       console.log(`Level: ${student.level}`);
//       console.log(`Is Senior: ${student.isSenior}`);
//       console.log("\n");
//     });
//   }
//   printStudentData(school); >>>>> this print befor using aliases
// New version of printing student data 
function printStudent(school) {
    school.forEach(function (job) {
        if ('level' in job) {
            console.log("S id: ".concat(job.id, ", name: \"").concat(job.name, "\", level: \"").concat(job.level, "\", isSenior: ").concat(job.isSenior));
        }
    });
}
printStudent(school);
//   define Teacher interface
function printTeacher(school) {
    school.forEach(function (job) {
        if ('specialty' in job) {
            console.log("T id: ".concat(job.id, ", name: ").concat(job.name, ", speciality: ").concat(job.specialty, ", courseNumber: ").concat(job.courseNum));
        }
    });
}
printTeacher(school);
function invertSeniority(student) {
    return __assign(__assign({}, student), { isSenior: !student.isSenior });
}
