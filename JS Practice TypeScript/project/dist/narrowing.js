"use strict";
function printElement(element) {
    if (typeof element === 'number')
        console.log(element);
    else
        console.log(element.length);
}
printElement(43483);
