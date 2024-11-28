// function x() {
//     var a = 8;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

function x() {
    var a = 8;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
// 1000 lines of code
z();

