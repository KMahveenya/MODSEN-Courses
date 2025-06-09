'use strict'

function getWords(text) {
    return text.match(/[\p{L}']+/gu) || [];
}

console.log(getWords("Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences."))