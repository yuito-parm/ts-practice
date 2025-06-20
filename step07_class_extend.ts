class Animal {
    name: string;
    age: number;
    type: string;

    constructor(name: string, age: number, type: string) {
        this.name = name;
        this.age = age;    
        this.type = type;    
    }

    sayHello() {
        console.log(`${this.name}が鳴いた！`);
    }

    introduce() {
        console.log(`${this.name}(${this.type})、${this.age}歳です`)
    }
}

class Bird extends Animal {
    wingSpan: number;
    constructor(name: string, age: number, type: string, wingSpan: number) {
        super(name, age, type);
        this.wingSpan = wingSpan;
    }

    sayHello(): void {
        console.log(`${this.name}がぴよぴよ鳴いた！`)
    }
}

const bird = new Bird("インコ", 1, "鳥類", 30);
bird.sayHello();