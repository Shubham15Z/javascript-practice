const numbers = [5, 10, 15, 20, 25, 30];

const multipliedNumbers = numbers.map(num => num * 3);

// console.log(multipliedNumbers)


const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'kiwi', color: 'green' },
    { name: 'orange', color: 'orange' },
    { name: 'pineapple', color: 'yellow' }
];

const transformedFruits = fruits.map(fruit => ({
    fruitName: fruit.name.toUpperCase(),
    fruitColor: fruit.color.toUpperCase()
}));

// console.log(transformedFruits);

const numbers1 = [5, 10, 15, 20, 25, 30];

const numbersGreaterThan20 = 
    numbers1.filter(num => num > 20);

// console.log(numbersGreaterThan20); 

const fruits1 = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'kiwi', color: 'green' },
    { name: 'orange', color: 'orange' },
    { name: 'pineapple', color: 'yellow' }
];

const yellowFruits = 
    fruits1.filter(fruits1 => fruits1.color === 'yellow');

console.log(yellowFruits);