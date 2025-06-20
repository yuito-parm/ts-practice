console.log("---練習1---");
type Book = { title: string; author: string; pages: number };
const book: Book = { title: "TypeScript入門", author: "山田太郎", pages: 200 };
console.log(book);

console.log("---練習2---")
const answer: "はい" | "いいえ" | "どちらでもない" = "はい";
console.log(answer);

console.log("---練習3---");
type Gender = "male" | "female" | "other";
type User = { name: string; age: number; gender: string; };
const gender: Gender = "male";
const user: User = { name: "たろう", age: 23, gender: gender };
console.log(user);