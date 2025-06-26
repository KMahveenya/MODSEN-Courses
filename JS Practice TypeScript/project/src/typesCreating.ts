class MyStack<T> {
    private elements: T[];

    public constructor () {
        this.elements = [];
    }

    public push(elem: T): void {
        this.elements.push(elem);
    }

    public pop(): T {
        const elem = this.elements.pop();
        if (elem) {
            return elem;
        } else {
            throw new Error('Стек пуст');
        }
    }

    public peek(): T {
        if (!this.isEmpty()) {
            return this.elements[this.elements.length - 1];
        } else {
            throw new Error('Стек пуст');
        }
    }

    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    public size(): number {
        return this.elements.length;
    }

    public clear(): void {
        this.elements = [];
    }
}

const stack = new MyStack<number>;

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

//------------------------------------------

type FunctionReturnType<T> =
  T extends string ? number :
  T extends number ? string :
  T extends boolean ? "yes" | "no" :
  never;

function func<T extends string | number | boolean>(value: T): FunctionReturnType<T> {
  if (typeof value === 'string') {
    return value.length as FunctionReturnType<T>;
  } else if (typeof value === 'number') {
    return value.toString() as FunctionReturnType<T>;
  } else {
    return (value ? 'yes' : 'no') as FunctionReturnType<T>;
  }
}

console.log(func("hello"));
console.log(func(42));
console.log(func(true));

//------------------------------------------

function getValueType<T extends object, K extends keyof T>(obj: T, key: K): string {
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