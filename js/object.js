
var obj = new Object();


var obj = {};
//add new property
obj.name = "Olena";
obj.address = "Rivne";

console.log(`Name : ${obj.name}. Address : ${obj.address}. Number : ${obj.number}`)
obj.name = "Lilia";
obj.number = 222;

console.log(`Name : ${obj.name}. Address : ${obj.address}. Number : ${obj.number}`)
delete obj.address;
console.log(`Name : ${obj.name}. Address : ${obj.address}. Number : ${obj.number}`)
//----------------2-------------------
//console.log(product);
let product = {

    name : "IPhone 16 ProMax",
    price : 75000,
    memory : 2000,
    applications : ["Facebook","Google","Instagram"],
    owner : {
        name : "Vitia",
        surname : "Ivanchuk"
    }
}
console.log(product);

console.log(`Fullname : ${product.owner.name}  ${product.owner.surname}`)

//---------------------- 3 -----------------------
let prod = {};
prod["name"] = "Ball";
prod["size"] = 25;
prod["price"] = 1500;
prod["type"] = "mini-football";

console.log(prod);
prod["name"] = "FootBall";
console.log(prod);

//---------------------- 4 -------------
let student = {};
student.name = "Bob";
student.age = 45;

student["Average Mark"] = 4.9;//allow white-spaces
student.averageMark = 11;

console.log(student);

delete student.averageMark;
student.address = "Kyiv";
console.log(student);

if( "address" in student)
    console.log("Address property is in student obj");

//view all properties
for (const key in student) {
   console.log(key);    
}

//---------------- 5 ------------------
let car = {
    mark : "Nissan",
    model : "Leaf",
    year : 2015,
    volume : 2.0,
    color : "white"
}

let res = "\tCar Info\n";

for (const property in car) {
   res +=   property + " : " + car[property]+ "\n"  
}
//alert(res);

//--------------------6 -------------------
let person = {
    firstname : "Tom",
    lastname : "Tomson",
    birthdate : 2010,
    address : {
        street : "Soborna",
        city : "Rivne",
        building : 25
    },
    cars:["Nissan", "Toyota"]
}

console.log(`${person.firstname}. Cars : ${person.cars}`)

function addCarToPerson(person, newCar)
{
    person.cars.push(newCar);
}

function showAllCars(person){
    alert("Cars : " + person.cars);
}

//let name_car = prompt("Enter name car : ")

//addCarToPerson(person,name_car);
//showAllCars(person)


//-------------------------- 7 --------------

const player = {
    id : 1,
    user_name : "super_user",
    password : "123456789",
    email : "super_user@gmail.com",
    score : 0,

    print : function(){
        console.log(`User : ${this.user_name}. Score : ${this.score}`)
    },

    increaseScore(value){
        this.score += value;

    }
}

player.print();
player.increaseScore(20);
player.print();

player = {};