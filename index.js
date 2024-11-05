const students = [
    {
      "id": 1,
      "name": "Alice",
      "courses": ["Math", "Science", "History"]
    },
    {
      "id": 2,
      "name": "Bob",
      "courses": ["History", "English", "Math", "Art"]
    },
    {
      "id": 3,
      "name": "Charlie",
      "courses": ["Science", "English", "Music"]
    },
    {
      "id": 4,
      "name": "David",
      "courses": ["Math", "History", "Art", "PE"]
    },
    {
      "id": 5,
      "name": "Eva",
      "courses": ["Science", "Math", "Music"]
    },
    {
      "id": 6,
      "name": "Frank",
      "courses": ["English", "Art"]
    },
    {
      "id": 7,
      "name": "Grace",
      "courses": ["Math", "Science", "English", "Music"]
    },
    {
      "id": 8,
      "name": "Helen",
      "courses": ["History", "Art", "PE"]
    },
    {
      "id": 9,
      "name": "Ivy",
      "courses": ["Science", "English", "Art"]
    },
    {
      "id": 10,
      "name": "Jack",
      "courses": ["Math", "History", "Music"]
    }
  ]
  
// Q1 You have a function getStudentName(student) that:- receives a student object- returns the name of the student

  
function getStudentName(student) {
    return student.name;
  }
  console.log(getStudentName(students[0])) 
  
  
// Q2 recieves a student object- recieves a course index (number) - returns the course at the specified index in the student's courses array
  
function getCourse(student, courseIndex) 
    {
    return student.courses[courseIndex];
    }
console.log(getCourse(students[4], 2)); 
  
  
//   Q3 addCourseToStudent(student, course):
//  recieves a student object- recieves a course name (string)- adds the course to the student's courses array- returns the student object
//   ANSWER: 
//   {
//     id: 8,
//     name: 'Helen',
//     courses: [ 'History', 'Art', 'PE', 'Physics' ]

  
  function addCourseToStudent(student, course)
  {
    student.courses.push(course);
    return student;
  }
  
console.log(addCourseToStudent(students[7], "Physics"));
  
  
  //Q4 countCourses(student):- recieves a student object- returns the number of courses the student is enrolled in ANSWER: 4

  function countCourses(student) 
    {
    return student.courses.length;
    }
  console.log(countCourses(students[1]));
  
  

// Q5 listAllCourses(students):
// - recieves an array of student objects - returns an array of all unique course names across all students
//   ANSWER: 
//   [
//     'Math',    'Science',
//     'History', 'English',
//     'Art',     'Music',
//     'PE', 'Physics'
//   ]
function listAllCourses(students)
{
    let uniqueCourses = [];
    students.forEach(student =>
        { 
        student.courses.forEach(course =>{if (uniqueCourses.indexOf(course) == -1)    uniqueCourses.push(course)})
        })
    return uniqueCourses;
}
console.log(listAllCourses(students));
  
  
// Q6 removeCourseFromStudent(course, student):
// recieves a student object - recieves a course name (string) - removes the course from the student's courses array - returns the student object
// ANSWER:{ id: 7, name: 'Grace', courses: [ 'Math', 'English', 'Music' ] }
    
  function removeCourseFromStudent(student, course)
  {
    return student.courses.splice(student.courses.indexOf(course),1);
  }

  removeCourseFromStudent(students[6],"Science");
  console.log(students[6]);
  

// Q7 findStudentById(studentId, students):
// recieves a student id (number)- recieves an array of student objects- returns the student object with the matching id
// ANSWER: { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
    
function findStudentById(studentId, students)
  { 
    return students.filter( student => student.id === studentId )
  }

console.log(findStudentById(10,students));
  

// Q8 getStudentsByCourse(course, students):
// recieves a course name (string)- recieves an array of student objects- returns an array of student objects who are enrolled in the specified course
// ANSWER:
//     [
//     {
//       id: 3,
//       name: 'Charlie',
//       courses: [ 'Science', 'English', 'Music' ]
//     },
//     { id: 5, name: 'Eva', courses: [ 'Science', 'Math', 'Music' ] },
//     {
//       id: 7,
//       name: 'Grace',
//       courses: [ 'Math', 'Science', 'English', 'Music' ]
//     },
//     { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
//   ]

function getStudentsByCourse(course, students) {
    return students.filter( student => student.courses.indexOf(course) !== -1 )
  }
  
  console.log(getStudentsByCourse("Music",students));