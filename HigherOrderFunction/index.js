const radius = [2, 1, 5, 8];

const calculateArea = function (radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}

console.log(calculateArea(radius));