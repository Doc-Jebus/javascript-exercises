const palindromes = function (str) {
    
    ///Either [^A-Za-z0–9]/g or /[\W_]/g will removes all non-alphanumeric characters.
    let ignorePunctuation = str.replace(/[\W_]/g, "");
        console.log(ignorePunctuation);
    let secondIgnorePunctuation = ignorePunctuation.replace(/ /g, "");
        console.log(ignorePunctuation);
    let lowCaseString = secondIgnorePunctuation.toLowerCase();
        console.log(lowCaseString);
    
    //the split method will turn the string into an array of strings separated  by commas, which then will allow the other methods to be called.
    let splitString = lowCaseString.split("");
        console.log(splitString);
    let reverseString = splitString.reverse();
        console.log(reverseString);
    let joinArray = reverseString.join("");
        console.log(joinArray);
 
    
    if (joinArray === lowCaseString) {
        return true;
    } else return false;
    
};

// Do not edit below this line
module.exports = palindromes;
