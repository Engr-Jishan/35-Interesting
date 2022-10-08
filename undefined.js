let first;
// console.log(first);

function second(x, y) {
    const result = x + y;
    return result;
}
const sum = second(2, 3);
// return second();
// console.log(result);
// console.log(sum);

function double(a, b, c) {
    const result = a + b + c;
    console.log(result);
    return result;
}
// double(4, 4, 15);

// Object
const fifth = { name: "jishan ahemd", age: 20, location: "Narayanganj" };
// console.log(fifth.age);

// Array
const sixth = [2, 3, 4, 5, 6];
// console.log(sixth[0]);
delete sixth[2];
console.log(sixth);