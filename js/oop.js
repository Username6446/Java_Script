
class Car {
    #id;//private variable
    constructor(model, year, color, speed) {
        this.#id = Math.floor(Math.random() * 10e6)
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = speed;
    }
    set Speed(value) {
        if (value > 0)
            this.speed = value;
        else
            this.speed = 0;
    }
    get mils() {
        return this.speed * 0.621;
    }
    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }
    paint(newColor) {
        this.color = newColor;
    }
    setSpeed(value) {
        if (value > 0)
            this.speed += value;
        else
            this.speed += 0;
    }
    print() {
        console.log(`Car : id - ${this.#id} ${this.model}, ${this.year}, ${this.color}, ${this.speed}`);
        console.log(`Speed : ${this.speed} km/h`)
    }

}
const myCar = new Car("Nissan", 2020, 'white', 180);
//myCar.model = "Nissan";
//myCar.year = 2020;
// myCar.color = 'white';
// myCar.speed = 180;
//myCar.#id = 1;
myCar.id = 100;
console.log("-------------------------------")
console.log(myCar.id);
myCar.print();
//myCar.setSpeed(40);
myCar.Speed = 130;
myCar.print();
console.log(`Speed i miles : ${myCar.mils} mils/h`)

myCar.paint("Red")
myCar.print();


class PoliceCar extends Car {
    constructor(model, year, color, speed, volume) {
        super(model, year, color, speed);
        this.volume = volume;
    }
    beep() {
        console.log("Stop!!!! Beep beep beep!!!!! Volume : " + this.volume);
    }
    print() {
        super.print();
        console.log("Volume : " + 500 + "dB")
    }

};

console.log("------------Police Car ----------------");
const police = new PoliceCar("Toyota Prius", 2018, "white", 220, 500);
police.paint("grey");
police.beep();
police.print();

///////------------------ dz -------------------
console.clear();
class PrintMachine {
    constructor(size, color, family) {
        this.size = size;
        this.color = color;
        this.family = family;
    }
    print(text) {
        const htmlText = `<p style="font-size: ${this.size}; color: ${this.color}; font-family: ${this.family};">${text}</p>`;
        document.write(htmlText);
    }
}

const printer = new PrintMachine("36px", "red", "Arial, sans-serif");
const anotherPrinter = new PrintMachine("20px", "green", "Courier New");

printer.print("Hello world!!!");
anotherPrinter.print("іншиц текст.");

class News {
    constructor(title, content, tags, date) {
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.date = date;
    }
    print() {
        const today = new Date();

        const diffInMilliseconds = today - this.date;
        const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

        let dateString = "";

        if (diffInDays < 1) {
            dateString = "сьогодні";
        } else if (diffInDays < 7) {
            if (diffInDays === 1) {
                dateString = "1 день тому";
            } else if (diffInDays >= 2 && diffInDays <= 4) {
                dateString = `${diffInDays} дні тому`;
            } else {
                dateString = `${diffInDays} днів тому`;
            }
        } else {
            dateString = this.date.toLocaleDateString('uk-UA');
        }
        const htmlText = `
            <h2>${this.title}</h2>
            <p>Date: ${dateString}</p>
            <p>${this.content}</p>
            <p>#${this.tags.join(" #")}</p>
        `;

        document.write(htmlText);
    }
}

const news1 = new News("Breaking News", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", ["breaking", "world"], new Date(2026, 4, 22));
const news2 = new News("Tech Update", "Aliquam eget sapien sapien. Curabitur in metus urna.", ["tech", "update"], new Date());

news1.print();
news2.print();


class NewsList {
    constructor(list) {
        this.list = list;
    }
    get length() {
        return this.list.length;
    }
    print() {
        this.list.forEach(news => news.print());
    }
    addNews(news) {
        this.list.push(news);
    }
    deleteNews(title) {
        this.list = this.list.filter(news => news.title !== title);
    }
    sortByDate() {
        this.list.sort((a, b) => b.date - a.date);
    }
    searchByTag(tag) {
        return this.list.filter(news => news.tags.includes(tag));
    }
}

const newsList = new NewsList([news1, news2]);
newsList.print();
newsList.addNews(new News("Sports Update", "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.", ["sports", "update"], new Date(2026, 4, 20)));
newsList.sortByDate();
newsList.print();
const searchResults = newsList.searchByTag("update");
console.log("Search results for tag 'update':", searchResults);
newsList.deleteNews("Tech Update");
newsList.print();


/// ------------------ dz 2 -------------------
console.clear();

class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let printedText = "";
        for (let char of text) {
            if (char !== " ") {
                if (this.inkLevel >= 0.5) {
                    printedText += char;
                    this.inkLevel -= 0.5;
                } else {
                    console.log("Чорнило закінчилось!");
                    break;
                }
            } else {
                printedText += char;
            }
        }

        document.write(`<p style="color: ${this.color}; font-weight: bold; font-family: sans-serif;">${printedText}</p>`);
    }
}

class RefillableMarker extends Marker {
    constructor(color, inkLevel) {
        super(color, inkLevel);
    }

    refill(amount) {
        this.inkLevel += amount;
        if (this.inkLevel > 100) {
            this.inkLevel = 100;
        }
        document.write(`<p style="color: gray;"><em>Маркер (${this.color}) заправлено. Поточний рівень: ${this.inkLevel}%</em></p>`);
    }
}

const simpleMarker = new Marker("blue", 5);

simpleMarker.print("ваіва ук ук ацу");
const mySuperMarker = new RefillableMarker("green", 2);

mySuperMarker.print("Hello World!");
mySuperMarker.refill(100);
mySuperMarker.print("Hello World! 2131242цк цуфапф івпівавіфаіф");


class ExtendedDate extends Date {
    getDateText() {
        const months = [
            "січня", "лютого", "березня", "квітня", "травня", "червня",
            "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFutureOrPresent() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const compareDate = new Date(this.getTime());
        compareDate.setHours(0, 0, 0, 0);

        return compareDate >= today;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDate = new Date(this.getTime());
        nextDate.setDate(this.getDate() + 1);
        return new ExtendedDate(nextDate);
    }
}


const testDate = new ExtendedDate(2026, 4, 27); 
console.log("Базова дата:", testDate.toLocaleDateString('uk-UA'));

console.log("Дата текстом:", testDate.getDateText());

console.log("Майбутня або поточна?:", testDate.isFutureOrPresent());

console.log("Чи високосний рік?:", testDate.isLeapYear());

const nextDayObj = testDate.getNextDate();
console.log("Наступна дата:", nextDayObj.toLocaleDateString('uk-UA'), `(${nextDayObj.getDateText()})`);