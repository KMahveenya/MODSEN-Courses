function processData(arr: number[]): number;
function processData(arr: string[]): number;
function processData(arr: number[] | string[]): number {
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, elem) => {
            return acc + elem;
        }, 0);
    } else {
        return arr.length;
    }
}

console.log(processData(['wqe', 'asd', 'afkjxf']));
console.log(processData([-1, 5, 3, 0, 9, -3]));