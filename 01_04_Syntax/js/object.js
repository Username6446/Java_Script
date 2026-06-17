
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


// Dz 

//-------------------------- 1 --------------


var time = {
    hours : 12,
    minutes : 12,
    seconds : 12,
    set(hours, minutes, seconds){
        if(seconds>59){
            seconds = 0;
            minutes++;
        }
        if(seconds<0){
            seconds = 0;
            minutes--;
        }
        if(minutes>59){
            minutes = 0;
            hours++
        }
        if(minutes<0){
            minutes = 0;
            hours--;
        }
        if(hours>23){
            hours = 0;
        }
        if(hours<0){
            hours = 0;
        }
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    },
    addSec() {
        this.set(this.hours, this.minutes, this.seconds + 1);
    },
    subSec() {
        this.set(this.hours, this.minutes, this.seconds - 1);
    },
    out() {
        let h = (this.hours < 10)   ? "0" + this.hours   : this.hours;
        let m = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
        let s = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
        console.log(`${h}::${m}::${s}`);
    }
}

time.out();
time.set(5,60,12)
time.out();

//-------------------------- 2 --------------


var Car = {
    manufacturer : "Audi",
    model : "Q5",
    year : 2017,
    avgSpeed : 80,
    out(){
        console.log(`manufacturer : ${this.manufacturer}, model : ${this.model}, year : ${this.year}, avgSpeed : ${this.avgSpeed}`)
    },
    calculateTime(distance) {
        
        let pureHours = distance / this.avgSpeed;
        let restHours = Math.floor((pureHours - 0.01) / 4);
        if (restHours < 0) restHours = 0;
        let totalTime = pureHours + restHours;
        
        return totalTime;
    }
}


Car.out();

let distance = 320;
let timeNeeded = Car.calculateTime(distance);
console.log(`${distance} : ${timeNeeded.toFixed(2)}.`);

distance = 400;
timeNeeded = Car.calculateTime(distance);
console.log(`${distance} : ${timeNeeded.toFixed(2)} `);


//-------------------------- 2.2 --------------



let shoppingList = [
    { name: "Milk", count: 2, isBought: true },
    { name: "Bread", count: 1, isBought: false },
    { name: "Apples", count: 5, isBought: false },
    { name: "Cheese", count: 1, isBought: true }
];

function printShoppingList(list) {
    let sortedList = [...list].sort((a, b) => a.isBought - b.isBought);

    for (const item of sortedList) {
        const status = item.isBought ? "[ BOUGHT ]" : "[ TO BUY ]";
        console.log(`${status} ${item.name} — ${item.count}`);
    }
}


function addItem(list, productName, productCount) {
    let existingItem = list.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (existingItem) {
        existingItem.count += productCount;
        console.log(`Updated count for "${existingItem.name}" by + ${productCount}.`);
    } else {
        list.push({
            name: productName,
            count: productCount,
            isBought: false
        });
        console.log(`Added new item: "${productName}" (${productCount})`);
    }
}

function buyItem(list, productName) {
    let item = list.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (item) {
        item.isBought = true;
        console.log(`"${item.name}" marked as BOUGHT`);
    } else {
        console.log(`"${productName}" not found`);
    }
}


printShoppingList(shoppingList);
addItem(shoppingList, "Cookies", 2);

addItem(shoppingList, "Bread", 3); 

buyItem(shoppingList, "Apples");

printShoppingList(shoppingList);