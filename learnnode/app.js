// const readline = require("readline-sync"); before 2015
import readline from "readline-sync"; // after 2015
let fullName = readline.question("What is your Name ? :")
let age = readline.question("What is your age ? :")
let email  = readline.questionEMail("What is my email  ? :")
let collage = readline.question("What is my collage Name ? :")
let phone = readline.question("What is phone number ? :")

console.log(`My Name is ${fullName} `);
console.log(`My age ${age} is `);
if (age > 100) {
    console.log("Invaild age");
}else{
    console.log(age);
}
console.log(`My Email is ${email} `);
console.log(`My Name collage Name is ${collage} `);
console.log(`My phoneNumber is ${phone} `);