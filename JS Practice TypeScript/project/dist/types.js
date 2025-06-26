"use strict";
function error() {
    throw new Error("Error");
}
const username = 'Alice';
console.log(username);
error();
