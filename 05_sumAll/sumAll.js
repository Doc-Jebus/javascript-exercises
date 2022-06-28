const sumAll = function(start, end) {
    const arr = [];
    while(start <= end) {
        arr.push(start++);
    }
    
    const reducer = (accumulator, curr) => accumulator + curr;
    return arr.reduce(reducer);
    
};


// Do not edit below this line
module.exports = sumAll;
