// {
//     console.log("x");
//     a();
//     b();
    
//     function a(){
//      console.log("a");
//     };

//     let b = function(){
//         console.log("b");
//     };

//     console.log("z");
// }

// let b = [1,4,5,6]
// console.log(typeof b)

// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
// const c = obj.b;

// obj.b();
// c();

// const x = { foo: 1 };
// const y = { foo: 2 };

// function addFoo(obj) {
//   return obj.foo + 1;
// }

// console.log(addFoo(x));
// console.log(addFoo(y));

// const arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element) {
//   console.log(element);
// });

// let x = 1;

// if (function f() {}) {
//   x += typeof f;
// }

// console.log(x);

// let a = {
//     x: 1,
//     y: 2,
// };
// let b = a;
// a.x = 5;
// console.log(a);
// console.log(b);
  
// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);
// console.log(x === y);
// console.log(z == y);
// console.log(z == x);

// var x = 0;
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     x++;
//     console.log(x);
//   }, 1000);
// }

// let a = { x: 1 };
// let b = { x: 2 };
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];

// arr.forEach((obj) => (obj.x = obj.x * 2));

// console.log(a.x, b.x, c.x, d.x, e.x);

// let num = 0;

// function test() {
//   let num = 1;
//   return num;
// }

// console.log(test());
// console.log(num);

// let obj = { name: "John", age: 25 };
// let newObj = { ...obj, age: 30 };

// console.log(obj.age);
// console.log(newObj.age);

// const add = (a = 1, b = 2) => a + b;
// console.log(add());
// console.log(add(5));
// console.log(add(undefined, 10));

// const name1 = "John";
// const age = 25;

// const user = { name1, age };
// console.log(user);

// const arr = [1, 2, 3];
// const [a, b, c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(null === undefined);
// console.log(null == undefined);

// function sumOfPositive(arr) {
//     let sum1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum1 += arr[i];
//         }   
//     }
//     return sum1;
// }
// const arr1 = [1,3,6,,-4,-7,8,2];
// console.log(sumOfPositive(arr1));

function removeVowels(str) {
    const vowels = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        newStr += str[i];
      }
    }
    return newStr;
  }

  const str = "This is a test string with vowels";
  console.log(removeVowels(str)); 
  
