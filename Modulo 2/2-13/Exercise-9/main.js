"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const students = runners.filter((runner) => runner.student === true);

console.log(students);

const winRunner = students.reduce((acc, student) => {
  if (student.time < acc.time) {
    return (acc = student);
  } else {
    return acc;
  }
});

console.log("El ganador de los estudiantes es: " + winRunner.name);
