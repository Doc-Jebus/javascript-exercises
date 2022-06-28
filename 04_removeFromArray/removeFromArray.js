const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    //The 'for' loop, used by the 'forEach' method, includes a function with the callback of "item". If an array item is seen a second time, it will break out of the loop (triggered by the bang mark '!arg'), continue with pushing the remainder of the new array list. 
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
        console.log(newArray);
      }
    })
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
