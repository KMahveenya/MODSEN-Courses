for (let i = 0; i < 5; i++) {
    var varVariable = 1;
    let letVariable = 2;
    const constVariable = 3;
}

try {
    console.log('varVariable: expected - 1, real - ' + varVariable);
} catch(e) {
    console.log(e);
}

try {
    console.log('letVariable: expected - 1, real - ' + letVariable);
} catch(e) {
    console.log(e.message);
}

try {
    console.log('constVariable: expected - 1, real - ' + constVariable);
} catch(e) {
    console.log(e.message);
}
