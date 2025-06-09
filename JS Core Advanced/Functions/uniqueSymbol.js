function getUniqueSymbol(str) {
    let freq = {};
  
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1) return str[i];
    }
    
    return '';
}

console.log(getUniqueSymbol("w whebqw oi ebfh"));