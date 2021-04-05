class Student {
    constructor (university, course, fullName, marks = [5, 4, 4, 5], isActiveStudent = true) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [...marks];
        this.isActiveStudent = isActiveStudent;
    }

    get getInfo() {
        if(!this.isActiveStudent) {
            return null;
        }

        return `"Студент ${this.course}го курсу ${this.university}, ${this.fullName}"`;
    }

    get getMarks() {
        return this.isActiveStudent ? this.marks : null;
    }

    set setMarks(mark) {
        if(!this.isActiveStudent) {
            return null;
        }
        
        return this.marks = [...this.marks, mark];
    }

    getAverageMark() {
        if(!this.isActiveStudent) {
            return null;
        }

        const allMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return +(allMarks / this.marks.length).toFixed(1);
    }

    dismiss() {
        return this.isActiveStudent = false;
    }

    recover() {
        return this.isActiveStudent = true;
    }
}

//1
const ostap = new Student(
`Вищої Школи Психотерапії м. Одеса`,
1, 'Остап Родоманський Бендер');
//2 Інформація про студента:
console.log(ostap.getInfo);
//3 Масив оцінок студента:
console.log(ostap.getMarks);
//4 Поставити оцінку студенту та повернути масив оцінок:
console.log(ostap.setMarks = 5);
console.log(ostap.getMarks);
//5 Середній бал:
console.log(ostap.getAverageMark());
//6 Виключення студента:
console.log(ostap.dismiss());
console.log(ostap.getMarks);
//7 Зарахувати студента:
console.log(ostap.recover());
console.log(ostap.getMarks);

//Advanced

class BudgetStudent extends Student {
    constructor (university, course, fullName, marks = [5, 4, 4, 5], isActiveStudent = true) {
        super(university, course, fullName, marks = [5, 4, 4, 5], isActiveStudent = true);
        setInterval(() => this.getScholarship(), 30000);
    }

    getScholarship() {
        const lowestAverageMark = 4;
        if (this.getAverageMark() >= lowestAverageMark && this.isActiveStudent) {
            console.log(`${this.fullName}, Ви отримали 1400 грн. стипендії`);
        };
    };
}


const ostap2 = new BudgetStudent(
`Вищої Школи Психотерапії м. Одеса`,
1, 'Остап Родоманський Бендер');



