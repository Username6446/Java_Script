
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



function countSpaces(string) {
    let count = 0;
    for (let char of string) {
        if (char === ' ') {
            count++;
        }
    }
    return count;
}


console.log(countSpaces("qw rty"))
console.log("qwe rty".slice(0))

function firstChar(string)
{
    return string[0].toUpperCase() + string.slice(1);
}

console.log(firstChar("wfq"))


function countOfWords(string)
{
    return string.trim().split(" ").count();
}
console.log(firstChar("wfq уца а уцуац "))

function abreviatura(string)
{
    let res = "";
    let array = string.split(" ");
    for (const el of array) {
        res+=firstChar(el[0]);
    }
    return res;
}

console.log(abreviatura("cdsvd sdfsd sdf"));

function isPalidrom(string)
{
    return string === string.split("").reverse().join("")?true:false;
}
console.log(isPalidrom("шалаш"))