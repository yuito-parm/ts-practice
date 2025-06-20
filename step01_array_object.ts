console.log("---練習問題１---");
let books: string[] = ["ぼくは明日、昨日のきみとデートする", "ノルウェイの森", "告白"];
console.log(books);

console.log("---練習問題2---");
type Friend = { name: string; age: number };
let friend: Friend = { name: "たかし", age: 23 };
console.log(friend);  

console.log("---練習問題3---");
let friends: Friend[] = [
    { name: "たかし", age: 23 }, 
    { name: "まな", age: 25 } 
]
console.log(friends);

console.log("---練習問題4---");
friends.forEach(f => {
    console.log(f.name);
});