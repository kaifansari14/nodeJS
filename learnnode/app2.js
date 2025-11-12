import readline from "readline-sync";
let name = readline.question("🥷Enter your name :");
let age = readline.questionInt("🎂Enter your age :");
let gender = readline.question("🚻Enter your gender (M/F/O) :");
let city = readline.question("🌆Enter your city :");
let country = readline.question("🗺️ Enter your country :");
let email = readline.questionEMail("📩Enter your email :");
let phoneNumber = readline.questionInt("📞 Enter your phone number :");
let occupuation = readline.question("💼 What is your occupuation : ");
let hobby = readline.question("🎨Your favorite hobby :");
let language = readline.question("💻Favorite programming language: ");
let exprience = readline.question("⌛Years of exprience in coding:");
let food = readline.question("🍗Favorite food :");
let movie = readline.question("📽️Favorite movie :");
let color = readline.question("🎨 Favorite color :");
let studying = readline.question("🎓 Are you a student (y/n):");
if(studying == 'y'|| studying == 'Y' || studying == 'Yes' || studying == 'yes')
{
    studying = "Yes,student"
}
else if (studying == 'n'|| studying == 'N' || studying == 'No' || studying == 'no')
{
    studying = "not a student"
}
let coding = readline.question("💻 Do you like coding? (y/n):");
if(coding == 'y' || coding == 'Y'|| coding == 'Yes' || coding == 'yes')
{
    coding = "Yes,coding"
}
else if (coding == 'n' || coding == 'N'|| coding == 'No'|| coding == 'no')
{
    coding = "not a coder"
}

let goal = readline.question("🎯 What's your biggest goal:");
let pet = readline.question("🐈Do you have a pet? (If yes, name it or type 'No':");
let song = readline.question("🎶 Favorite music genre :");




console.log("");
console.log("----------Summary----------");

console.log(`Your name is ${name}`);
console.log(`Your age is ${age}`);

console.log(`Your gender is ${gender}`);

console.log(`Your city is  ${city}`);
console.log(`Your country is ${country}`);
console.log(`Your email is ${email}`);
console.log(`Your phone Number is ${phoneNumber}`);
console.log(`Your occupation is${occupuation}`);
console.log(`Your hobby is ${hobby}`);
console.log(`Your Favorite language is ${language}`);
console.log(`Your work exprience is ${exprience}`);
console.log(`Your Favorite food is ${food} `);
console.log(`Your favorite movie is ${movie}`);
console.log(`Your Favorite color is ${color}`);
console.log(`What are you studying ${studying}`);
console.log(`Do like coding ${coding}`);
console.log(`Your big goal is ${goal}`);
console.log(`do you have pet ${pet}`);
if (pet == 'no' || pet == 'No'){
console.log("you dont have a pet ");
}else if (pet == 'Yes' || pet == "yes"){
    console.log("your pet name is ", pet );
}
console.log(`Favorite music ${song}`);
