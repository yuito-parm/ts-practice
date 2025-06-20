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

const animal = new Animal("ハシビロコウ", 4, "哺乳類");
animal.sayHello();
animal.introduce();