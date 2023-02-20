class Student {
    constructor (firstName, lastName, yearBirthday, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirthday = yearBirthday;
        this.marks = marks;
    }

    meanMark = 0;
    amPresent = 0;
    attendance = [];

    getAge() {
        console.log(`Вік ${this.firstName} - ${2023 - this.yearBirthday} років`);
    }

    getMeanMark() {
        this.meanMark = this.marks.reduce((prev, current) => prev + current, 0) / this.marks.length;
        console.log(this.meanMark);
    }

    present() {
        (this.attendance.length < 25) ? this.attendance.push(true) : console.log ("Всі заняття вже пройдені");
    }

    absent() {
        (this.attendance.length < 25) ? this.attendance.push(false) : console.log ("Всі заняття вже пройдені");
    }

    summary() {
        this.attendance.forEach(item => {
            if(item === true) {
                this.amPresent++;
            }
        })
        
        if(this.meanMark > 90 && this.amPresent / this.attendance.length > 0.9) {
            return "Молодець";
        } else if(this.meanMark < 90 || this.amPresent / this.attendance.length < 0.9) {
            return "Добре, але можна краще.";
        } else if (this.meanMark < 90 && this.amPresent / this.attendance.length < 0.9) {
            return "Редиска!";
        } else {
            return "Some Exception";
        }
    }
}

const oleksii = new Student("Oleksii", "Petrenko", 2002, [100,90,90,99,95,89]);

oleksii.getAge();
oleksii.getMeanMark();
oleksii.present();
oleksii.absent();
oleksii.present();
oleksii.present();
oleksii.present();
oleksii.present();
oleksii.present();
oleksii.present();
oleksii.present();
oleksii.present();
oleksii.present();
console.log(oleksii.summary());