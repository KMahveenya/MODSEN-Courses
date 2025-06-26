"use strict";
function processData(arr) {
    if (typeof arr[0] === 'number') {
        return arr.reduce((acc, elem) => {
            return acc + elem;
        }, 0);
    }
    else {
        return arr.length;
    }
}
console.log(processData(['wqe', 'asd', 'afkjxf']));
console.log(processData([-1, 5, 3, 0, 9, -3]));
