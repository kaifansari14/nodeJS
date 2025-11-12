import readline from "readline-sync";
let Name = readline.question("🥷Enter your name :");
 age = readline.questionInt("🎂Enter your age :");
let coding = readline.question("💻Do you like coding ? [y/n] :")

console.log(`Enter your name ${Name} `);
console.log(`Enter your age ${age}`);

console.log(`\n--- Summary ---`);
console.log("Name:", Name);
console.log("age:", age);


if (coding == "y") {
    console.log("Likes coding : Yes");
}else {
    console.log("Like coding: No ");
}
