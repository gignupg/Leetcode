var isValid = function (s) {
    for (let before; before != s;) {
        before = s;
        s = s.replace(/\[\]|\{\}|\(\)/g, '');
    } 
    return !s;
};

console.log(isValid("()[{}]()"));