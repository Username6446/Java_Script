
let login = 'My login is "Olena"?';
let end = "end!";

console.log(login);

console.log(login[0]);
console.log(login.charAt(0));

console.log(login + end);

if( login.startsWith('?'))    
    console.log("Start with ?");
else
    console.log("Not Start with ?");

if( login.endsWith('?'))    
    console.log("End with ?");
else
    console.log("Not end with ?");


console.log("Index elementa i : ", login.indexOf('i'));
console.log("Index elementa e : ", login.lastIndexOf('e'));


if( login.includes('is'))
    console.log("'is' -  is in the row");


console.log(`Length : ${login.length}`);

console.log(login.replace(" ", "!"));

console.log(end.repeat(5));
console.log("Hello".repeat(5));
console.log(login.slice(3,8));
console.log(login.toUpperCase());
console.log(login.toLowerCase());

let email = "    mail@gmail.com   ";
console.log(`/${email}/`)
console.log(`/${email.trim()}/`)