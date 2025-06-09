function getMinOfArray(arr) {
    return arr.length > 0 && arr.reduce((a, b) => Math.min(a, b)) || null;
}

console.log(getMinOfArray([3, -1, 8, 5, -4, 6]));