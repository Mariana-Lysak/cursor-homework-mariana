const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]; 
const marks = [4, 5, 5, 3, 4, 5];

//1
let boys = [];
let girls = [];


function getPairs (studentsArray) {
    const studentsPairs= [];

    for (let i = 0; i < studentsArray.length; i++) {

        if (students[i].slice(-1) === 'а') {
            girls.push(studentsArray[i]);
        } else {
            boys.push(studentsArray[i]);
        }
    }
    
    for ( i = 0; i < boys.length; i++ ) {
        studentsPairs.push([boys[i], girls[i]]);
    }

    return studentsPairs;   
}

const pairs = getPairs(students);
console.log('Pairs:',pairs)

//2
function getThemes (themesArray) {
    const studentsAndThemes = [];
    for ( i = 0; i < pairs.length; i++ ) {
        studentsAndThemes.push([boys[i] + ' i ' + girls[i]].concat(themesArray[i]));
    }

    return studentsAndThemes;
}

const themesForStudents = getThemes(themes);
console.log('Themes for students:',themesForStudents);

//3
function getMarks(marksArray) {
    const studentsAndMarks = [];
    for ( i = 0; i < marksArray.length; i++ ) {
        studentsAndMarks.push([students[i], marks[i]]);
    }
    return studentsAndMarks;
}

const marksForStudents = getMarks(marks);
console.log('Marks for students:',marksForStudents);

//4
function getRandomMarks() {
    const newMarks = [];


    for ( i = 0; i < themesForStudents.length; i++ ) {
        randomMark = Math.ceil(Math.random() * 5);
        newMarks.push([themesForStudents[i].concat(randomMark)]);
    }

    return newMarks;
}

const randomMarksForStudents = getRandomMarks ();
console.log('Random marks for students:', randomMarksForStudents);