console.log("---練習1---");
interface Animal {
    name: string;
    age: number;
}
const animal: Animal = { name: "ハシビロコウ", age: 4 };
console.log(animal);

console.log("---練習2---");
const animals: Animal[] = [
    { name: "ハシビロコウ", age: 4 },
    { name: "カピバラ", age: 7 }
]
animals.forEach(a => {
    console.log(a)
})

console.log("---練習3---");
interface WithAnimalType extends Animal {
    type: string;
}
const newAnimal: WithAnimalType = { name: "レッサーパンダ", age: 2, type: "哺乳類" };
console.log(newAnimal);