type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

function error(): never {
    throw new Error("Error");
}

const username : MyReadonly<string> = 'Alice';

console.log(username);

error();