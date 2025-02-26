console.time("plus");
for (let i = 0; i < 1e6; i++) {
    let num = +"12345";
}
console.timeEnd("plus");

console.time("number");
for (let i = 0; i < 1e6; i++) {
    let num = Number("12345");
}
console.timeEnd("number");

console.time("parseInt");
for (let i = 0; i < 1e6; i++) {
    let num = parseInt("12345");
}
console.timeEnd("parseInt");
