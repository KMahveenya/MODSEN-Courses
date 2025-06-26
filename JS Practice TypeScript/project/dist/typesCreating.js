"use strict";
class MyStack {
    constructor() {
        this.elements = [];
    }
    push(elem) {
        this.elements.push(elem);
    }
    pop() {
        const elem = this.elements.pop();
        if (elem) {
            return elem;
        }
        else {
            throw new Error('Стек пуст');
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.elements[this.elements.length - 1];
        }
        else {
            throw new Error('Стек пуст');
        }
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    size() {
        return this.elements.length;
    }
    clear() {
        this.elements = [];
    }
}
const stack = new MyStack;
stack.push(4);
stack.push(7);
stack.push(-1);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
function func(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (typeof value === 'number') {
        return value.toString();
    }
    else {
        return (value ? 'yes' : 'no');
    }
}
console.log(func("hello"));
console.log(func(42));
console.log(func(true));
//------------------------------------------
function getValueType(obj, key) {
    return typeof obj[key];
}
const user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(getValueType(user, "name"));
console.log(getValueType(user, "age"));
console.log(getValueType(user, "isAdmin"));
