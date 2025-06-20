console.log("---練習1---")
function sum(num1:number, num2:number):number {
    return num1 + num2;
}
console.log(sum(2,5));

console.log("---練習2---")
function printProfile(name:string, age:number):void {
    console.log(`${name}さんは${age}歳です。`);
}
printProfile("ゆいと", 25);

console.log("---練習3---");
type Friend = { name: string; age: number; };
const friends: Friend[] = [
    { name: "たかし", age: 23 },
    { name: "まな", age: 25 }
];
function getFriendList(friends: Friend[]) {
    return friends.map(friend => `${friend.name}さん(${friend.age})`);
}
console.log(getFriendList(friends));