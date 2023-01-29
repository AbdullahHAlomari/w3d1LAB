// Define student 
interface Student {
    id: number;
    name: string;
    level: string;
    isSenior: boolean;
  }

// Create schhol array
type stdAndTeach = Student | Teacher; // >>> I change the array to aliases after adding teachers

let school: stdAndTeach[] = [
  {id: 1, name: "Abdullah", level: "Bachelor", isSenior: true},
  {id: 2, name: "Khaled", level: "Student", isSenior: false},
  {id: 3, name: "Ahmed", level: "Diploma", isSenior: true},
  {id: 4, name: "Haitham", specialty: "Front", courseNum: 101},
  {id: 5, name: "Masha", specialty: "Front", courseNum: 201},
  {id: 6, name: "Lamia", specialty: "Back", courseNum: 301}
];


// Printing student data 
  function printStudent(school: stdAndTeach[]) {
    school.forEach(job => {
      if ('level' in job) {
        console.log(`S id: ${job.id}, name: "${job.name}", level: "${job.level}", isSenior: ${job.isSenior}`);
      }
    });
  }
  
  printStudent(school);
  

//   define Teacher interface
interface Teacher {
    id: number;
    name: string;
    specialty: string;
    courseNum: number;
  }

//   Printint teacher information only
function printTeacher(school: stdAndTeach[]) {
    school.forEach(job => {
      if ('specialty' in job) {
        console.log(`T id: ${job.id}, name: ${job.name}, speciality: ${job.specialty}, courseNumber: ${job.courseNum}`);
      }
    });
  }
  
  printTeacher(school);
  