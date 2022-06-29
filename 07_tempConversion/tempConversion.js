const ftoc = function(tempFah) {
  let convert = (tempFah - 32) * 0.5556;
  convert = +convert.toFixed(1);
  console.log(convert);
  
  return convert;
};

const ctof = function(tempCel) {
  let convert = (tempCel * 1.8) + 32;
  convert = +convert.toFixed(1);
  console.log(convert);
  
  return convert;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
