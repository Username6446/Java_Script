// console.log("Hello World!");
// alert("Hello World!");
    let number = 5;
    let empty;
    let nullobject = null;
    let email = "myemail@gmail.com";
    let flag = true;
    let summa = function(a, b) {
        console.log(`${a} + ${b} = ${a+b}`);
    }
    let array = [1,2,3,4,"green", false, ["world", "tree"], summa];
// shift alt 
    console.log(`Number: ${number}. Type: ${typeof number}`);
    console.log(`Email: ${email}. Type: ${typeof email}`);
    console.log(`Flag: ${flag}. Type: ${typeof flag}`);

    number = "hello";
    flag = 52.33;
    console.log(`Number: ${number}. Type: ${typeof number}`);
    console.log(`Flag: ${flag}. Type: ${typeof flag}`);
    console.log(`empty: ${empty}. Type: ${typeof empty}`);
    console.log(`nullobject: ${nullobject}. Type: ${typeof nullobject}`);
    console.log(`array: ${array}. Type: ${typeof array}`);
    console.log(array[7](5,5));
    summa(5, 10);

// ------------------ cycles -------------------
const numbers = [33,5,8,-9,-6,14,78,2];
    for (let i = 0; i < array.length; i++) {
        console.log(`[${i}] - number: ${numbers[i]}`);
    }

    for (const num of numbers) {
        console.log(num);
    }
    for (const key in numbers) {
        console.log(key + ": " + numbers[key]);
    }

    function sum(a,b)
    {
        return a + b;

    }
    function divide(a,b)
    {
        if(b == 0){
            console.error("Can not divide by zero");
        }
        return a / b;
    }
    function sum(a,b)
    {
        return a + b;

    }
    
    console.log(`Result of division: ${divide(10, 2)}`);
    console.log(sum(5, 10));
    // let numA = +prompt("enter number A");
    // let numB = +prompt("enter number B");
    // alert(`Result of division: ${sum(numA, numB)}`);
    // alert(`Result of division: ${divide(numA, numB)}`);

    console.clear();
    //ex1
    // let birthday = +prompt("Enter your birthday (day of month)");
    // alert(`Your age is: ${2026 -birthday}`);
    // let capacity = +prompt("Enter capacity of flash drive (in GB)");
    // alert(`You can store ${Math.floor(capacity * 1024 / 820)} files on your flash drive`);
    // //ex2
    // let number1  = +prompt("Enter a number");
    // switch (number1) {
    //     case 1:
    //         alert("!");
    //         break;
    //     case 2:
    //         alert("@");
    //         break;
    //     case 3:
    //         alert("#");
    //         break;
    //     case 4:
    //         alert("$");
    //         break;
    //     case 5:
    //         alert("%");
    //         break;
    //     case 6:
    //         alert("^");
    //         break;
    //     case 7:
    //         alert("&");
    //         break;
    //     case 8:
    //         alert("*");
    //         break;
    //     case 9:
    //         alert("(");
    //         break;
    //     case 0:
    //         alert(")");
    //         break;
    //     default:
    //         alert("Invalid number");
    // }

    // let year = +prompt("Enter a year");
    // if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    //     alert(`${year} is a leap year`);
    // }else{
    //     alert(`${year} is not a leap year`);
    // }

    // let day = +prompt("Enter Data");
    // let month = +prompt("Enter Month");
    // let year = +prompt("Enter Year");
    // alert(`Current date is: ${day}/${month}/${year}`);
    // day  = day + 1;
    
    // if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31){
    //     day = 1;
    //     month = month + 1;
    // }else if((month == 4 || month == 6 || month == 9 || month == 11) && day > 30){
    //     day = 1;
    //     month = month + 1;
    // }else if(month == 2){
    //     if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    //         if(day > 29){
    //             day = 1;
    //             month = month + 1;
    //         }
    //     }else{
    //         if(day > 28){
    //             day = 1;
    //             month = month + 1;
    //         }
    //     }
    // }
    // alert(`Next date is: ${day}/${month}/${year}`);

    // let sum1 = 0;
    // let a = +prompt("Enter number A");
    // let b = +prompt("Enter number B");
    // for (let i = a; i <= b; i++) {
    //     sum1 += i;
    // }
    // alert(`Sum of numbers from ${a} to ${b} is: ${sum1}`);

    // let num = prompt("Enter a number");
    // let count = num.length;
    // alert(`Number of digits in the number is: ${count}`);

    // let positiveCount = 0;
    // let negativeCount = 0;
    // let zeroCount = 0;
    // let evenCount = 0;
    // let oddCount = 0;

    // for (let i = 0; i < 10; i++) {
    //     let currentNum = +prompt(`Введіть число №${i + 1}:`);

    //     if (currentNum > 0) {
    //         positiveCount++;
    //     } else if (currentNum < 0) {
    //         negativeCount++;
    //     } else {
    //         zeroCount++;
    //     }
    //     if (currentNum % 2 === 0) {
    //     evenCount++;
    //     } else {
    //         oddCount++;
    //     }
    // }

    // alert(`Статистика введених чисел:
    // ---------------------------------
    // Позитивних: ${positiveCount}
    // Негативних: ${negativeCount}
    // Нулів: ${zeroCount}
    // ---------------------------------
    // Парних: ${evenCount}
    // Непарних: ${oddCount}`);

    // while(true){
    //     alert("Monday");
    //     alert("Wont to see next day?");
    //     alert("Tuesday");
    //     alert("Wont to see next day?");
    //     alert("Wednesday");
    //     alert("Wont to see next day?");
    //     alert("Thursday");
    //     alert("Wont to see next day?");
    //     alert("Friday");
    //     alert("Wont to see next day?");
    //     alert("Saturday");
    //     alert("Wont to see next day?");
    //     alert("Sunday");
    //     alert("Wont to see next day?");
    // }

    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        }
        return n * factorial(n - 1);
    }

    function concatNums(a,b,c)
    {
        return `${a}${b}${c}`;
    }

    function Area(a, b = 0)
    {
        if(b == 0){
            return a * a;
        }
        return a * b;
    }

    function formatTime(hours, minutes = 0, seconds = 0) {
        let h = hours < 10 ? `0${hours}` : hours;
        let m = minutes < 10 ? `0${minutes}` : minutes;
        let s = seconds < 10 ? `0${seconds}` : seconds;

        console.log(`${h}:${m}:${s}`);
    }


    function reverseNumber(num) {
        if (num < 10) {
            return `${num}`;
        }
        let lastDigit = num % 10;
        let remain = Math.floor(num / 10);
        
        return `${lastDigit}` + reverseNumber(remain);
    }

    function sumDigits(num) {
        if (num < 10) {
            return num;
        }
        return (num % 10) + sumDigits(Math.floor(num / 10));
    }

    factorial(5);
    console.log(concatNums(1,2,3));
    console.log(Area(5));
    console.log(Area(5, 10));
    formatTime(9, 15, 3);
    console.log(reverseNumber(12345));
    console.log(sumDigits(12345));