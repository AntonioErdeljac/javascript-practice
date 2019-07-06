function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}

const arrowAddNums = (num1 = 1, num2 = 1) => num1 + num2;

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

Person.prototype.getBirthYear = () => this.dob.getFullYear();
Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;

const erda = new Person('Antonio', 'Erdeljac', '3-4-2001');
const marko = new Person('Marko', 'Markovic', '2-5-2001');

class Osoba {
  constructor(firstName, lastName, dob) {
    this.firstname = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const erda2 = new Osoba('Antonio', 'Eredeljac', '5-4-2018');
