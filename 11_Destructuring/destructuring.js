


const user = {
    email: "user@gmail.com",
    password: "qwerty",
    name: "John",
    surname: "Smith",
    age: 30,
    isMale: true
}

const user2 = {
    email: "user2@gmail.com",
    password: "qwerty2",
    name: "John2",
    surname: "Smith2",
    age: 20,
    isMale: true
}

// const { email: email1, password: password1} = user;
// const { email: email2, password: password2} = user2;

// console.log(`${email1}: ${password1}`);
// console.log(`${email2}: ${password2}`);

const {email, password} = user;
console.log(`${email}: ${password}`);

login(user);

function login({email, password}){
    // const {email, password} = credentials;
    if(email == "user@gmail.com"){
        if(password == "qwerty"){
            console.log("Login Succes");
        }
    }
}

const movie = {
    name : "Harry Potter",
    genre : "Fantasy",
    year : 2001,
}

const category = {
    name : "Clothes"
}

printName(user);
printName(category);
printName(movie);


function printName({name})
{
    if(name){
        console.log(name);
    }else{
        console.log("Property 'name' not found");
    }
}
// button({text: "MyButton", color: "color"})

function button({text, color, width, hight})
{
    const btn = document.getElementById("button")
    if(text)
    {
        btn.innerText = text;
    }
    if(color)
    {
        btn.style.backgroundColor = color;
    }
    if(width)
    {
        btn.style = width;
    }
    if(hight)
    {
        btn.style.hight = hight;
    }

}


const userData = {
    name: "Nika",
    age: 25,
    address: {
        country: "Ukraine",
        city: "Rivne",
        city: "Rivnenska",
        postalCode: 3700
    }
}
const {name, address: {country}} = userData;

console.log(`${name}: ${country}`)

const arr = [3,5,67,3,4,68,23,312,576,5,2,567,9];
const [first,second] = arr;
console.log(first,second);

const [,,third] = arr;
console.log(third);



const [rgb, hex] = generateColor();
console.log(rgb);
console.log(hex);

function generateColor(){
    const rgb = "255,0,0";
    const hex = "#FF0000";
    return [rgb,hex];
}