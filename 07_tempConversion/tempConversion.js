const ftoc = function(t) {
    return Number(((t - 32) * 0.5556).toFixed(1));
};

const ctof = function(t) {
    return Number(((t * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
