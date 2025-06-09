class University {
  constructor(name) {
    this.name = name;
    this.faculties = [];
  }

  addFaculty(facultyName) {
    if (!this.faculties.includes(facultyName)) {
      this.faculties.push(facultyName);
      console.log(`Факультет "${facultyName}" добавлен в ${this.name}`);
    } else {
      console.log(`Факультет "${facultyName}" уже существует`);
    }
    return this;
  }

  removeFaculty(facultyName) {
    const index = this.faculties.indexOf(facultyName);
    if (index !== -1) {
      this.faculties.splice(index, 1);
      console.log(`Факультет "${facultyName}" удален из ${this.name}`);
    } else {
      console.log(`Факультет "${facultyName}" не найден`);
    }
    return this;
  }

  displayFaculties() {
    console.log(`Факультеты университета ${this.name}:`);
    if (this.faculties.length === 0) {
      console.log('(нет факультетов)');
    } else {
      this.faculties.forEach((faculty, index) => {
        console.log(`${index + 1}. ${faculty}`);
      });
    }
    return this;
  }
}

const myUniversity = new University('БГУИР');

myUniversity
  .addFaculty('Компьютерных систем и сетей')
  .addFaculty('Радиоэлектроники')
  .addFaculty('Инженерно-экономческий')
  .displayFaculties();

myUniversity
  .removeFaculty('Радиоэлектроники')
  .displayFaculties();