//1

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

const evenNumbers = array => array.filter(item => item % 2 === 0);

console.log(`Parzyste liczby: ${evenNumbers(numbers)}`);


//2

const person = { name: "Jill", age: 25, hobby: "sports" }

const sayHello = ({name}) => {
  if(typeof name !== 'undefined') {
    return `Hello ${name}!`;
  }
  
  return `Hello!`
}

console.log(sayHello(person));

//3

const students = ["John", "Bill", "Emma", "Stella", "Rob"];

const randomStudent = array => {
  const randomIndex = Math.floor(Math.random() * (array.length));
  
  return array[randomIndex];
}

console.log(`Losowy student: ${randomStudent(students)}`);