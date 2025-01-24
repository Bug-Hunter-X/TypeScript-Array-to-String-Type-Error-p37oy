function greeter(person: string | string[]) {
    if (Array.isArray(person)) {
        return "Hello, " + person.join(" ");
    } else {
        return "Hello, " + person;
    }
}

let user = ["Jane", "Doe"];
let user2 = "John";

console.log(greeter(user)); // "Hello, Jane Doe"
console.log(greeter(user2));//"Hello, John"