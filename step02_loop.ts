console.log("---練習1---");
let numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

console.log("---練習2---");
type Friend = { name: string; age: number };
let friends: Friend[] = [
    { name: "たかし", age: 23 }, 
    { name: "まな", age: 25 } 
]
friends.forEach(f => {
    if (f.age >= 25) {
        console.log(f);
    }
});

console.log("---練習3---");
let newFriends = friends.map(f => f.name + "さん")
console.log(newFriends)