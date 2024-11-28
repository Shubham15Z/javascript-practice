// MAP
const arr = [5, 7, 8, 29, 4];

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x * 3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map((x) => x.toString(2));

// console.log(output);

// FILTER

// const output = arr.filter((x) => x < 15);
// console.log(output);

// REDUCE

const output = arr.reduce(function (max, cur) {
    if (cur > max) {
        max = cur
    }
    return max;
}, 0)
console.log(output);