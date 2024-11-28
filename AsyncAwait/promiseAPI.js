const p1 = new Promise( (resolve, reject) => {
    setTimeout( () => resolve("P1 Success"), 8000);
});

const p2 = new Promise( (resolve, reject) => {
    // setTimeout( () => resolve("P2 Success"), 1000);
    setTimeout( () => reject("P2 Failed"), 5000);
});

const p3 = new Promise( (resolve, reject) => {
    setTimeout( () => resolve("P3 Success"), 10000);
});

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch( err => {
//     console.error(err);
// });

// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch( err => {
//     console.error(err);
// });

// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res);
// })
// .catch( err => {
//     console.error(err);
// });

Promise.any([p1, p2, p3]).then(res => {
        console.log(res);
    })
    .catch( err => {
        console.error(err);
    });