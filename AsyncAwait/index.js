// Promise with Async Function
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!");
// })

// async function getData() {
//     // return "Hello";
//     return p;
// }

// const dataPromise = getData();
// dataPromise.then( res => console.log(res));

// Diff between old way and with async await

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise  Resolved Value 1")
//     }, 20000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise  Resolved Value 2")
//     }, 40000);
// });

// OLD WAY
// function getData() {
//     p.then((res) => console.log(res));
//     console.log("Hello getData");
// }
// getData();

//WITH ASYNC AWAIT

// async function handlePromise() {
//     console.log("Hello Promise");

//     const val = await p1;
//     console.log("Hello handlePromise 1");
//     console.log(val);
    

//     const val2 = await p2;
//     console.log("Hello handlePromise 2");
//     console.log(val2);
    
// }
// handlePromise();

//API CALL

const API_URL = "https://jsonplaceholder.typicode.com/users"

async function handlePromise() {
    // const data = await fetch(API_URL);

    // const jsonData = await data.json();

    // console.log(jsonData);
    try{
        const data = await fetch(API_URL);
        const jsonData = await data.json();
        console.log(jsonData);
    }
    catch (err) {
        console.log(err)
    }
}

handlePromise();