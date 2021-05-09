const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];


//1
const getSubjects = student => Object.keys(student.subjects).map(subject => 
  subject[0].toUpperCase() + subject.slice(1).replace('_', ' '));

console.log ('Список предметів студента:', getSubjects(students[0]) );


//2
const getAverageMark = student => {
  const studentMarks = Object.values(student.subjects).flat()
  return (studentMarks.reduce((a, b) => a + b) / studentMarks.length).toFixed(2);
}

console.log ('Середня оцінка по усім предметам:', getAverageMark(students[0]));


//3
const getStudentInfo = student => ({ 
  course: student.course,
  name: student.name,
  averageMark: getAverageMark(student),
});

console.log ('Інформація загального виду по переданому студенту:', getStudentInfo(students[0]) );

//4
const getStudentsNames = students =>
students.map(student => student.name).sort();

console.log ('Iмена студентів у алфавітному порядку:', getStudentsNames(students));

//5
const getBestStudent = students => {
  studentsMarks = students.map(student => +(getAverageMark(student)));
  return students[studentsMarks.indexOf(Math.max(...studentsMarks))].name;
}

console.log ('Кращий студент зі списку по показнику середньої оцінки:', getBestStudent(students));


//6
const calculateWordLetters = word =>
word.split('').reduce((letter, i) => (letter[i] = (letter[i] || 0) + 1, letter), {})

console.log ('Обєкт, в якому ключі це букви у слові, а значення – кількість їх повторень:', calculateWordLetters("тест"));

export {
  getSubjects,
}