function removeDuplicate(arr) {
    return [...new Set(arr)];
}

const numbers = [1,4,5,8,3,6,1,4,7,9,2,6];
console.log(removeDuplicate(numbers));