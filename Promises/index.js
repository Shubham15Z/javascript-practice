// Promises

// const API_URL = "https://jsonplaceholder.typicode.com/users"

// const user = fetch(API_URL);

// console.log(user);

// user.then(function (data) {
//     console.log(data);
// })

// Create Own Promise
//Consumer part
const cart = ["item1", "item2", "item3"];

createOrder(cart)
 .then(function (orderId) {
    console.log(orderId);
    return orderId;
 })
 .then(function (orderId) {
    return proceedToPayment(orderId);
 })
 .then( function (paymentInfo) {
    console.log(paymentInfo);
 })
 .catch(function (err) {
    console.log(err.message);
 })


//Producer Part
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }

        const orderId = "123456";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    })

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise( function (resolve, reject) {
        resolve("Payment Successful");
    })
}

function validateCart() {
    return true;
}