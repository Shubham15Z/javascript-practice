"use strict"

console.log(this)

function x() {
    console.log(this);
}

x();

const student = {
    name: 'Ajay',
    printName: function () {
        console.log(this.name);
    }
};

student.printName();

const student2 = {
    name: "Vijay"
}

student.printName.call(student2)

// const obj = {
//     a: 10,
//     x: () => {
//         console.log(this);
//     }
// };

// obj.x();

const obj2 = {
    a: 10,
    x: () => {
        // console.log(this);
       const y = () => {
            console.log(this)
        }
        y();
    }
};

obj2.x();
