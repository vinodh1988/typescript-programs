function add(a, b) {
    return a + b;
}
function sum(a) {
    var sum = 0;
    for (var x in a)
        sum += a[x];
    return sum;
}
add(34, 53);
console.log(sum([43, 534, 53]));
console.log(sum([34, "raj"]));
//add(34)
//add("Raj","Ravi")
